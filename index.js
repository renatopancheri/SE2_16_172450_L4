//Libraries (default)
var http = require('http');

//for templates
var bind = require('bind');
var ip='127.0.0.1';
var port=1337;


var express = require('express');
var url=require('url');

var employee=require('./employee.js');
//instantiate express
var app = express();

app.set('port', (process.env.PORT || port));
app.use(express.static('client_files'));//per le richieste di specifici files( /* ---> /client_files/*)
//use: for both POST and GET
app.use('/', function(request, response) //uso solo il get perché ho solo un singolo form
{
    //set the headers of the responce
    var headers = {};
    headers["Access-Control-Allow-Origin"] = "*"; //for cross enviroment request
    headers["Access-Control-Allow-Methods"] = "GET";//methods allowed to responce
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"; //type of headers
    //answer
    headers["Content-Type"] = "text/html";//format response
    response.writeHead(200, headers);
	var url_parts = url.parse(request.url, true);
    	var getVar = url_parts.query; //parsing dei parametri
	var ret=employee.main(getVar);//chiamo la mia funzione main che lavora i parametri in ingresso e restituisce un oggetto con tutti i valori necessari per creare il template corretto
	bind.toFile('tpl/home.tpl',
	ret, 
    function(data) 
    {
        //write response
        response.end(data);
    });
});

listener=app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'),listener.address());
});
