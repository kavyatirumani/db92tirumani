var express = require('express');
var router = express.Router();
const Season_controlers= require('../controllers/Season'); 

/* GET home page. */
router.get('/', Season_controlers.Season_view_all_Page ); 

module.exports = router;
