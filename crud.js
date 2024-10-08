// CRUD -> manipulacao de banco de dados
// Create -> criar (cadastrar)
// Read -> ler, listar
// Update -> atualizacao
// Delete -> apagar

const { MongoClient, ObjectId } = require("mongodb");

const fs = require("fs");

const urlcon = "mongodb+srv://aula-back:aula123456@turma-agosto.mam4s.mongodb.net/"

const conexao = new MongoClient(urlcon);

async function lerDados()
{
    let db = await conexao.connect();
    let pasta = db.db("gabriel").collection("contatos");
    let dados = await pasta.find({}).toArray();
    await db.close();

    return dados;
}

/**
 * cadastra novo contato
 * @param {string} nome 
 * @param {string} email 
 */

async function cadastrar(nome, email)
{
    let db = await conexao.connect();
    let pasta = db.db("gabriel").collection("contatos");

    let pessoa = {
        nome: nome,
        email: email        
    };

    let retorno = await pasta.insertOne(pessoa);
    await db.close();

    console.log(retorno);
}

async function atualizar()
{
    let db = await conexao.connect();
    let pasta = db.db("gabriel").collection("contatos");
    let pessoa = {_id: new ObjectId('66c6854f8bfdb8fd400bf048')};
    let valor = {email: "pedropp@gmail.com"}
    let retorno = await pasta.updateOne(pessoa, {$set: valor});
    db.close();

    console.log(retorno);
}

async function deletar()
{
    let db = await conexao.connect();
    let pasta = db.db("gabriel").collection("contatos");

    let pessoa = {_id: new ObjectId('66c6854f8bfdb8fd400bf048')}

    let retorno = await pasta.deleteOne(pessoa);

    db.close();

    console.log(retorno);

}

module.exports = {
    deletar,
    atualizar,
    cadastrar,
    lerDados
};