var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Season_controller = require('../controllers/Season'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Season ROUTES /// 
 
// POST request for creating a Season.  
router.post('/Season', Season_controller.Season_create_post); 
 
// DELETE request to delete Season. 
router.delete('/Season/:id', Season_controller.Season_delete); 
 
// PUT request to update Season. 
router.put('/Season/:id', Season_controller.Season_update_put); 
 
// GET request for one Season. 
router.get('/Season/:id', Season_controller.Season_detail); 
 
// GET request for list of all Season items. 
router.get('/Season', Season_controller.Season_list); 

/* GET detail View page 
router.get('/detail', Season_controller.Season_view_one_Page); */ 
module.exports = router; 