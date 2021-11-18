var express = require('express');
var router = express.Router();
const Season_controlers= require('../controllers/Season'); 

/* GET home page. */
router.get('/', Season_controlers.Season_view_all_Page ); 
/* GET detail View page  */  
router.get('/detail', Season_controlers.Season_view_one_Page);
/* GET create Season page */ 
router.get('/create', Season_controlers.Season_create_Page); 
/* GET create update page */ 
router.get('/update', Season_controlers.Season_update_Page); 
 /* GET create Season page */ 
router.get('/delete', Season_controlers.Season_delete_Page); 
module.exports = router;
