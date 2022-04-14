import BaseDatabase from "../../../src/Data/BaseDatabase"
import { Competition, SITUACAO } from "../../../src/Model/Competition"
import { competitionMock1, competitionMock2 } from "../CompetitionMock"
import { DartCompetitionRepositoryMock } from "./DartCompetitionRepositoryMock"

export default class DartCompetitionDataMock extends BaseDatabase implements DartCompetitionRepositoryMock {
    protected TABLE_NAME = "Run_competition"

    insert = async (competition: Competition) => {
        return competition
    }

    getByAtleta = async (atleta: string) => {
        return competitionMock1
    }

    getCompetitionByName = async (competition: string) => {
        return competitionMock2
    }

    getCompetitionAndAthlete = async (competition: string)=> {
        return "atleta1"
    }

    getSituationByName = async (competition: string, situation: SITUACAO) => {
        if(competition === "competicao1" && situation === SITUACAO.FINALIZADO){
            return "FINALIZADO"
        } else if(competition === "competicao2" && situation === SITUACAO.FINALIZADO){
            return 0
        } else {
            undefined
        }
    }

    updateSituation = async () => {}

    getRanking = async ():Promise<Competition[]> => {
       return [competitionMock1, competitionMock2]
    }

    getAthleteCount = async (athlete:string, competition:string) => {
        return 4
    }
}