var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var usuario = require('../models').usuario;
var env = process.env.NODE_ENV || 'development';


// estatísticas (max, min, média, mediana, quartis etc)
router.get('/dados', function (req, res, next) {
	
	console.log(`Recuperando as estatísticas atuais`);

	const instrucaoSql = `SELECT
    (SELECT COUNT(*) FROM usuario WHERE focoestudo = 1) as aob,
    (SELECT COUNT(*) FROM usuario WHERE focoestudo = 2) as concurso,
    (SELECT COUNT(*) FROM usuario WHERE focoestudo = 3) as enem,
    (SELECT COUNT(*) FROM usuario WHERE focoestudo = 4) as ensinomedio,
    (SELECT COUNT(*) FROM usuario WHERE focoestudo = 5) as graduacao,
    (SELECT COUNT(*) FROM usuario WHERE focoestudo = 6) as idiomas,
    (SELECT COUNT(*) FROM usuario WHERE focoestudo = 7) as musica,
    (SELECT COUNT(*) FROM usuario WHERE focoestudo = 8) as posgraduacao,
    (SELECT COUNT(*) FROM usuario WHERE focoestudo = 9) as vestibular,
    (SELECT COUNT(*) FROM usuario WHERE focoestudo = 10) as outros`;
					

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});


module.exports = router;
