var Season = require('../models/Season'); 
 
// List of all Seasons 
exports.Season_list = async function(req, res) { 
    try{ 
        theSeasons = await Season.find(); 
        res.send(theSeasons); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Season. 
exports.Season_detail = async function(req, res) { 
console.log("detail"  + req.params.id) 
    try { 
        result = await Season.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Season create on POST. 
exports.Season_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Season(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.Season_type = req.body.Season_type; 
    document.temperature = req.body.temperature; 
    document.Season_month = req.body.Season_month; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Season delete form on DELETE. 
exports.Season_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Season delete DELETE ' + req.params.id); 
}; 
 
// Handle Season update form on PUT. 
exports.Season_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Season update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.Season_view_all_Page = async function(req, res) { 
    try{ 
        theSeasons = await Season.find(); 
        res.render('Season', { title: 'Season Search Results', results: theSeasons }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 