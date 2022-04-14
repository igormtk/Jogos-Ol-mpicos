import RunCompetitionBusiness from "../../Business/RunCompetition/RunCompetitionBusiness";
import RunCompetitionData from "../../Data/RunCompetitionData/RunCompetitionData";
import { Request, Response } from "express";
import { InputDTO } from "../../Model/Competition";

export default class RunCompetitionController {
    private runCompetitionBusiness: RunCompetitionBusiness;
    constructor(
    ){
        this.runCompetitionBusiness = new RunCompetitionBusiness(new RunCompetitionData())
    }

    createRun = async (req: Request, res: Response) => {
        const {competicao, atleta, valor, unidade} = req.body

        const input: InputDTO = {
            competicao,
            atleta,
            valor,
            unidade
        }
    
        try {
            await this.runCompetitionBusiness.insertRun(input)
            res.send({message: "Atleta inserido na competição!"})

        } catch (error:any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

    finishRun = async (req: Request, res: Response) => {
        const { competicao } = req.body
        
        try {
            await this.runCompetitionBusiness.finishRun(competicao)
            res.send({message: "Competição finalizada!"})

        } catch (error:any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

    rankingRun = async (req: Request, res: Response) => {
        const {competicao} = req.body
        
        try {
            const ranking = await this.runCompetitionBusiness.getRanking(competicao)
            res.send({message: "Esse é o resultado da competição", ranking})

        } catch (error:any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

}