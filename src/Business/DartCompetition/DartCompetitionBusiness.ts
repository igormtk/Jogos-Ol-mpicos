import { Competition, InputDTO, SITUACAO } from "../../Model/Competition";
import { IdGenerator } from "../../Services/IdGenerator";
import { DartCompetitionRepository } from "./DartCompetitionRepository";

export default class DartCompetitionBusiness {
    private idGenerator: IdGenerator;
    private competitionData: DartCompetitionRepository;

    constructor(
        competitionDataImplementation: DartCompetitionRepository
    ){  
        this.idGenerator = new IdGenerator
        this.competitionData = competitionDataImplementation
    }

    insertDart = async(input: InputDTO) => {
        const {competicao, atleta, valor, unidade} = input

        if(!competicao || !atleta || !valor || !unidade){
            throw new Error("Insira todos os campos!")
        }

        if(typeof competicao !== "string" || typeof atleta !== "string" || typeof valor !== "string" || typeof unidade !== "string"){
            throw new Error("Insira valores válidos!")
        }

        if(unidade !== "m"){
            throw new Error("Unidade inválida!")
        }

        const verificaSituacaoCompeticao = await this.competitionData.getSituationByName(competicao, SITUACAO.FINALIZADO)

        if(verificaSituacaoCompeticao?.length > 0){
            throw new Error("Essa competição já foi finalizada!")
        }

        const verificaChances = await this.competitionData.getAthleteCount(atleta, competicao)

        if(verificaChances >= 3){
            throw new Error("O atleta já realizou todos os lançamentos!")
        }

        if(unidade !== "m"){
            throw new Error("Unidade inválida!")
        }
  
        const id = this.idGenerator.generate()

        const situacao = SITUACAO.ANDAMENTO

        const novaCompeticao = new Competition(
            id,
            competicao,
            atleta,
            valor,
            unidade,
            situacao
        )

        await this.competitionData.insert(novaCompeticao)
     
        
    }

    finishDart = async(input: string) => {
        const competicao  = input
        
        const situacao = SITUACAO.FINALIZADO

        const verificaCompeticao = await this.competitionData.getCompetitionByName(competicao)

        if(!verificaCompeticao){
            throw new Error("Essa competição/modalidade não existe!")
        }

        await this.competitionData.updateSituation(situacao, competicao)
    }

    getRanking = async(input: string) => {
        const competicao  = input
        
        const verificaCompeticao = await this.competitionData.getCompetitionByName(competicao)

        if(!verificaCompeticao){
            throw new Error("Essa competição/modalidade não existe!")
        }

        const resultado = await this.competitionData.getRanking(competicao)

        return resultado
    }
}