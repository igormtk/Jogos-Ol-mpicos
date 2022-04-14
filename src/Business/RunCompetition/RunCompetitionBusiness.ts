import { Competition, InputDTO, SITUACAO } from "../../Model/Competition";
import { IdGenerator } from "../../Services/IdGenerator";
import { RunCompetitionRepository } from "./RunCompetitionRepository";

export default class RunCompetitionBusiness {
    private idGenerator: IdGenerator;
    private competitionData: RunCompetitionRepository;

    constructor(
        competitionDataImplementation: RunCompetitionRepository
    ){  
        this.idGenerator = new IdGenerator
        this.competitionData = competitionDataImplementation
    }

    insertRun = async(input: InputDTO):Promise<void> => {
        const {competicao, atleta, valor, unidade} = input
        
        if(!competicao || !atleta || !valor || !unidade){
            throw new Error("Insira todos os campos!")
        }

        if(typeof competicao !== "string" || typeof atleta !== "string" || typeof valor !== "string" || typeof unidade !== "string"){
            throw new Error("Insira valores válidos!")
        }

        if(unidade !== "s"){
            throw new Error("Unidade inválida!")
        }

        const verificaSituacaoCompeticao = await this.competitionData.getSituationByName(competicao, SITUACAO.FINALIZADO)

        if(verificaSituacaoCompeticao.length > 0){
            throw new Error("Essa competição já foi finalizada!")
        }

        const verificaCompetidor = await this.competitionData.getByAtleta(atleta)

        if(verificaCompetidor){
            const verificaQualCompeticao = await this.competitionData.getCompetitionAndAthlete(competicao)

            if(verificaQualCompeticao === atleta){
                throw new Error("Esse atleta já realizou esta prova!")
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
    }

    finishRun = async(input: string) => {
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