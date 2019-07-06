var express = require('express');
var app     = express();
var mysql   = require('mysql');

var con; //conexão ao banco  
app.listen(3000, () => {
	console.log('Server OK!');
	con = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'ifrn@992',
		database: 'banco'
	});
	con.connect((erro) => {
		if (erro) {
			console.log('Erro: ' + erro);
		} else { console.log('DB OK!'); }
	});
});
 
app.get('/conta', 
	    (req, res) =>{
	var sql = 'SELECT * FROM conta';

	con.query(sql, (erro, retorno) => {
		if (!erro) {
			res.send(retorno);
		} 
		console.log(erro);
	});
	
});