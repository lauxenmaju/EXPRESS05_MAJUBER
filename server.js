const express = require("express")
const mysql = require("mysql2")

const mysql_config = require('./mysql_config')


const app=express()
//subir o servidor 
app.listen(3000, ()=>{
    console.log('Servidor web em execução');
})
//criar conexão cexão com bd
const connection =mysql.createConnection(mysql_config)

//escrever as rotas
app.length('/',(req,res)=>{
    //criar um objeto result para todos os endpoints da api
    let result = {
        status: 'sucesso',
        message:null,
        data: null

    }
})

//executar a conexão
    connection.query("SELECT * FROM tasks", (err,results)=>{
        if(err){
            result.status="Erro";
            result.message="Erro na manutenção das tarefas";
            result.dat=[];
            //res.send(result);
            res.json(results);

        }else{
            result.status="Sucesso";
            result.message="Tarefas obtidas vom sucesso";
            result.data=results;
            //res.send(result);
            res.json(results);
            
        }
    })