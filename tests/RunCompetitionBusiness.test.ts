import RunCompetitionBusiness from "../src/Business/RunCompetition/RunCompetitionBusiness"
import { SITUACAO } from "../src/Model/Competition"
import RunCompetitionDataMock from "./mocks/RunCompetitionMocks/RunCompetitionDataMock"

const runCompetitionBusinessMock = new RunCompetitionBusiness(
    new RunCompetitionDataMock()
)

describe('teste ao cadastrar atleta e competição', () => {

    test("erro ao passar algum input vazio", async () => {
        const input = ({
            id: "id1",
            competicao: "competicao1",
            atleta: "atleta1",
            valor: "",
            unidade: "s",
            situacao: SITUACAO.ANDAMENTO
        })

        try {
            await runCompetitionBusinessMock.insertRun(input)

        } catch (error: any) {
            console.log(error.message)
            expect(error.message).toEqual("Insira todos os campos!")
        }
    })

    test("erro ao passar unidade diferente de s", async () => {
        expect.assertions
        const input = ({
            id: "id1",
            competicao: "competicao1",
            atleta: "atleta1",
            valor: "valor1",
            unidade: "a",
            situacao: SITUACAO.ANDAMENTO
        })

        try {
            await runCompetitionBusinessMock.insertRun(input)

        } catch (error: any) {
            console.log(error.message)
            expect(error.message).toEqual("Unidade inválida!")
        }
    })

    test("erro ao cadastrar com competição finalizada", async () => {
        expect.assertions
        const input = ({
            id: "id1",
            competicao: "competicao1",
            atleta: "atleta1",
            valor: "valor1",
            unidade: "s",
            situacao: SITUACAO.FINALIZADO
        })

        try {
            await runCompetitionBusinessMock.insertRun(input)

        } catch (error: any) {
            console.log(error.message)
            expect(error.message).toEqual("Essa competição já foi finalizada!")
        }
    })

    test("erro ao cadastrar competidor já inscrito na competição", async () => {
        expect.assertions
        const input = ({
            id: "id2",
            competicao: "competicao2",
            atleta: "atleta2",
            valor: "valor2",
            unidade: "s",
            situacao: SITUACAO.ANDAMENTO
        })

        try {
            await runCompetitionBusinessMock.insertRun(input)

        } catch (error: any) {
            console.log(error.message)
            expect(error.message).toEqual("Esse atleta já realizou esta prova!")
        }
    })

    test("se tudo estiver correto", async () => {
        expect.assertions
        const input = ({
            id: "id1",
            competicao: "competicao1",
            atleta: "atleta1",
            valor: "valor1",
            unidade: "s",
            situacao: SITUACAO.ANDAMENTO
        })

        try {
            await runCompetitionBusinessMock.insertRun(input)

        } catch (error: any) {
            console.log(error.message)
        }
    })

})


describe('teste ao finalizar corrida', () => {

    test("erro ao passar algum input vazio", async () => {
        const input = (
            "competicao1" 
        )

        try {
            await runCompetitionBusinessMock.finishRun(input)

        } catch (error: any) {
            console.log(error.message)
            expect(error.message).toEqual("Essa competição/modalidade não existe!")
        }
    })

    test("se tudo estiver correto", async () => {
        const input = (
            "competicao1" 
        )

        try {
            await runCompetitionBusinessMock.finishRun(input)

        } catch (error: any) {
            console.log(error.message)
        }
    })

}) 


describe('teste ao pegar Ranking da corrida', () => {

    test("erro ao passar algum input vazio", async () => {
        const input = (
            "competicao1" 
        )

        try {
            await runCompetitionBusinessMock.getRanking(input)

        } catch (error: any) {
            console.log(error.message)
            expect(error.message).toEqual("Essa competição/modalidade não existe!")
        }
    })

    test("se tudo estiver correto", async () => {
        const input = (
            "competicao1" 
        )

        try {
            await runCompetitionBusinessMock.getRanking(input)

        } catch (error: any) {
            console.log(error.message)
        }
    })

}) 