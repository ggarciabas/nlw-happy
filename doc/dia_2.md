# Dia 2

## Comandos

- `yarn init -y`
- `yarn add express`
- `yarn add typescript`
- `yarn tsc --init`: para inicializar o tsconfig.json.
- `yarn add ts-node-dev -D`: para conseguir executar o projeto utilizando typescript com node.
- `--transpile-only`: para que somente converta, sem verificar erros.
- `--ignore-watch node_modules`: não ficará observando alterações da pasta.
- `yarn add typeorm sqlite3`
    - Driver Nativo: não oferece abstração (insere SQL)
    - Query Builder: knex.js (mais famoso); escreve a query com java script. Constroi a query por meio das funções.
    - Type ORM: abstração maior. Utiliza uma classe para representar uma tabela do banco de dados. Um objeto é uma linha desta tabela. As alterações no objeto reflete no banco de dados.
- `yarn typeorm`: cli para migrations.
    - Alterar caminho para compreender typescript: `"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"`
- Criar migrations: `yarn typeorm migration:create -n nome_migration`
    - UP: realizar alterações no banco de dados
    - DOWN: desfaz alterações no banco de dados
- Executar migrations: `yarn typeorm migration:run`
- Ativar configuração tsconfig.json: 
    - `"strictPropertyInitialization": false`
    - `"experimentalDecorators": true`
    - `"emitDecoratorMetadata": true,`
- `multer` para lidar com upload de arquivos em geral dentro do node.
    - `yarn install multer`
    - `routes.post('/orphanages', upload.array('nome_do_campo_com_imagens'), OrphanagesController.create)`: 
- Pacote para gerenciar erros com `async`:
    - `express-async-erros`
- Pacote para validação de dados `yup`.
- Pacote `cors` para que seja possível aceitar conexão de vários domnínios.