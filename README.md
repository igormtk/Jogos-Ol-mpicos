# Jogos Olímpicos - Estante Virtual
- Case de back-End

Esse projeto consiste em construir uma API REST em Ruby para o COB (Comitê Olímico Brasileiro), que será responsável por marcar e dizer os vencedores das seguintes modalidades:

- 100m rasos: Menor tempo vence
- Lançamento de Dardo: Maior distância vence

- Documentação API:
Acesse o postman aqui 👉 https://documenter.getpostman.com/view/18386394/Uyr4L1JG


## Desenvolvedor 

- Igor Eiiji Avelar Matsuoka

### Tecnologias utilizadas: 
- Typescript
- Node
- SQL
- MySQL
- Express
- Cors
- Dotenv
- Knex
- React
- Axios
- UUID
- json
- jest

### Funcionalidades:
- Cadastrar atleta em uma determinada competição (100m ou dardo), inserindo:
    - Nome da competição (se o nome não existir irá ser criada uma nova, se a competição já tiver sido finalizada, não será possível a inserção do atleta), 
    - Nome do atleta,
    - O valor da sua corrida/arremesso,
    - unidade em que serão feitas as medidas (m = metros, s = segundos)

- Finalizar a competição a partir do nome da competição;

- Mostrar a colocação dos atletas desde o primeiro colocado ao último a partir do nome da competição.

### Testes para os 100m:
- Erro ao passar algum input vazio na hora de cadastrar
- Erro ao passar unidade diferente de "s" na hora de cadastrar
- Erro ao tentar cadastrar em uma competição finalizada
- Erro ao cadastrar competidor já que já terminou a competição
- Teste de sucesso ao cadastrar
- Teste ao passar alguma competição inexistente na hora de terminar uma competição
- Teste de sucesso ao finalizar competição
- Teste ao passar alguma competição inexistente na hora pegar o ranking da competição
- Teste de sucesso ao pegar ranking da corrida

### Testes para o arremesso de dardo:
- Erro ao passar algum input vazio na hora de cadastrar
- Erro ao passar unidade diferente de "m" na hora de cadastrar
- Erro ao tentar cadastrar em uma competição finalizada
- Erro ao cadastrar competidor já que realizou os 3 lançamentos
- Teste de sucesso ao cadastrar
- Teste ao passar alguma competição inexistente na hora de terminar uma competição
- Teste de sucesso ao finalizar competição
- Teste ao passar alguma competição inexistente na hora pegar o ranking da competição
- Teste de sucesso ao pegar ranking da corrida