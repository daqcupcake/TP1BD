var express = require('express');
var request = require("request");
var app = express();
var sql = require('mssql');

var dbconfig = {
    user:'admin',
    password:'Boris1234',
    server: 'testdani.clffvzjinwhe.us-east-2.rds.amazonaws.com',
    database:'TP1'
};




app.get('/', function (req,res){


    //config for database
    var config = {
        user:'admin',
        password:'Boris1234',
        server: 'testdani.clffvzjinwhe.us-east-2.rds.amazonaws.com',
        database:'TP1'
    };
    
    //everything that happens once the app is launched
    sql.connect(config, function(err){
        if(err) console.log(err);

        //create request object
        var request = new sql.Request();

        //query to the database
        request.query('exec spListarClientes', function(err,recordset){
            if (err) console.log(err);

            res.send(recordset);
            console.log(recordset);
        });
    });
});

app.get('/getClients', (req, res) =>{
    sql.connect(dbconfig, function(err){
        if(err) console.log(err);

        //create request object
        var request = new sql.Request();

        //query to the database
        request.query('exec spListarClientes', function(err,recordset){
            if (err) console.log(err);

            res.send(recordset);
            console.log(recordset);
        });
    });
})

app.get('/createClient', (req, res) =>{
    sql.connect(dbconfig, function(err){
        if(err) console.log(err);
        var name= req.query.name;
        var type = req.query.idtipo;
        var ced= req.query.cedula;
        var dir= req.query.direccion;
        var city=req.query.ciudad;
        var tel = req.query.telefono;
        var stat= req.query.estado;
        //create request object
        var request = new sql.Request();
        var pquery ="exec spInsertarCliente @nombre= '" + name + "', @idTipoCliente="+type+", @cedula="+ced+", @direccion='" +dir+"', @ciudad='"+city+"', @telefono="+tel+', @estado='+stat
        console.log(pquery)
        //query to the database
        request.query(pquery,function(err,recordset){
            if (err) console.log(err);

            res.send(recordset);
            console.log(recordset);
        });
    });
})

app.get('/updateClient',(req,res) =>{
    sql.connect(dbconfig, function(err){
        if(err) console.log(err);
        var idcliente = req.query.id;
        var name= req.query.name;
        var type = req.query.idtipo;
        var ced= req.query.cedula;
        var dir= req.query.direccion;
        var city=req.query.ciudad;
        var tel = req.query.telefono;
        var stat= req.query.estado;

        var request = new sql.Request();
        var pquery = "exec spUpdateCliente @ID="+idcliente+", @nombre= '" + name + "', @idTipoCliente="+type+", @cedula="+ced+", @direccion='" +dir+"', @ciudad='"+city+"', @estado="+stat
        console.log(pquery)

        request.query(pquery,function(err,recordset){
            if (err) console.log(err);

            res.send(recordset);
            console.log(recordset);
        });
    })
})


var server = app.listen(5000, function(){
    console.log('Server is running..');
});