import { Request, Response } from "express";
import DartCompetitionBusiness from "../../Business/DartCompetition/DartCompetitionBusiness";
import DartCompetitionData from "../../Data/DartCompetition/DartCompetitionData";
import { InputDTO } from "../../Model/Competition";

export default class DartCompetitionController {
    private dartCompetitionBusiness: DartCompetitionBusiness;
    constructor(
    ){
        this.dartCompetitionBusiness = new DartCompetitionBusiness(new DartCompetitionData())
    }

    createDart = async (req: Request, res: Response) => {
        const {competicao, atleta, valor, unidade} = req.body

        const input: InputDTO = {
            competicao,
            atleta,
            valor,
            unidade
        }
    
        try {
            await this.dartCompetitionBusiness.insertDart(input)
            res.send({message: "Atleta inserido na competição!"})

        } catch (error:any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

    finishDart = async (req: Request, res: Response) => {
        const { competicao } = req.body
        
        try {
            await this.dartCompetitionBusiness.finishDart(competicao)
            res.send({message: "Competição finalizada!"})

        } catch (error:any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

    rankingDart = async (req: Request, res: Response) => {
        const {competicao} = req.body
        
        try {
            const ranking = await this.dartCompetitionBusiness.getRanking(competicao)
            res.send({message: "Esse é o resultado da competição", ranking})

        } catch (error:any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

}