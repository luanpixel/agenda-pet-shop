const customExpress = require('./config/customExpress')
const conexao = require('./insfraestrutura/conexao')
const tabelas = require('./insfraestrutura/tabelas')

conexao.connect(erro => {
    if (erro) {
        console.log('erro de conection')
    } else {
        console.log('conectado com sucesso')
        tabelas.init(conexao)

        const app = customExpress()


        app.listen(3000, () => console.log("Servidor rodando na porta 3000"))
    }
})




