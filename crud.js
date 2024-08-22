// CRUD -> manipulacao de banco de dados
// Create -> criar (cadastrar)
// Read -> ler, listar
// Update -> atualizacao
// Delete -> apagar

const { MongoClient } = require("mongodb");

const fs = require("fs");

const urlcon = "mongodb+srv://aula-back:aula123456@turma-agosto.mam4s.mongodb.net/"

const conexao = new MongoClient(urlcon);

async function lerDados()
{
    let db = await conexao.connect();
    let pasta = db.db("gabriel").collection("contatos");
    let dados = await pasta.find({}).toArray();

    console.log(dados);
}

lerDados();