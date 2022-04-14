import { Competition, SITUACAO } from "../../src/Model/Competition";

export const competitionMock1 = new Competition(
    "id1",
    "Competicao1",
    "atleta1",
    "valor1",
    "unidade1",
    SITUACAO.FINALIZADO
)

export const competitionMock2 = new Competition(
    "id2",
    "Competicao2",
    "atleta2",
    "valor2",
    "unidade2",
    SITUACAO.ANDAMENTO
)