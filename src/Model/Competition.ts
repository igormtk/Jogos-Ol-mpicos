export class Competition {  
    constructor(
        private id: string,
        private competicao: string,
        private atleta: string,
        private valor: string,
        private unidade: string,
        private situacao: SITUACAO
    ){
        this.id = id;
        this.competicao = competicao;
        this.atleta = atleta;
        this.valor = valor;
        this.unidade = unidade;
        this.situacao = situacao
    }

    public getId(){
        return this.id
    }

    public getCompeticao(){
        return this.competicao
    }

    public getAtleta(){
        return this.atleta
    }

    public getValue(){
        return this.valor
    }

    public getUnidade(){
        return this.unidade
    }

    public getSituacao(){
        return this.situacao
    }

    static toCompetitionModel(data: any): Competition {
        return new Competition(data.id, data.competicao, data.atleta, data.valor, data.unidade, data.situacao)
    }

}

export type InputDTO = {
    competicao: string,
    atleta: string,
    valor: string,
    unidade: string
}

export enum SITUACAO {
    ANDAMENTO = "EM ANDAMENTO",
    FINALIZADO = "FINALIZADO"
}

export type InputCompeticaoDTO = {
    competicao: string
}