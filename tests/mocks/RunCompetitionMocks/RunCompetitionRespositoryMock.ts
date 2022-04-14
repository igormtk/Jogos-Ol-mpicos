import { Competition, SITUACAO } from "../../../src/Model/Competition"

export interface RunCompetitionRepositoryMock {
    insert(competition: Competition):Promise<Competition>
    getByAtleta(atleta: string):Promise<Competition>
    getCompetitionByName(competition: string):Promise<Competition>
    updateSituation(situation: SITUACAO.FINALIZADO, competition: string):Promise<void>
    getSituationByName(competition: string, situation: SITUACAO.FINALIZADO):Promise<any>
    getCompetitionAndAthlete(competition: string): Promise<string>
    getRanking(competition: string):Promise<Competition[]>
    getAthleteCount(athlete:string, competition:string):Promise<number>
}