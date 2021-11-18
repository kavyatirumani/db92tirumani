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
    // {"Season_type":"goat", "cost":12, "size":"large"} 
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
exports.Season_delete =  async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Season.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle Season update form on PUT. 
exports.Season_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Season.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Season_type) toUpdate.Season_type = req.body.Season_type; 
        if(req.body.temperature) toUpdate.temperature = req.body.temperature; 
        if(req.body.Season_month) toUpdate.Season_month = req.body.Season_month; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
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
// Handle a show one view with id specified by query 
exports.Season_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Season.findById(req.query.id) 
        res.render('Seasondetail',  { title: 'Season Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 // Handle building the view for creating a Season. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Season_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('Seasoncreate', { title: 'Season Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};
// Handle building the view for updating a Season. 
// query provides the id 
exports.Season_update_Page =  async function(req, res) { 
    console.log("update view for item " + req.query.id) 
    try{ 
        let result = await Season.findById(req.query.id) 
        res.render('Seasonupdate', { title: 'Season Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.Season_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Season.findById(req.query.id) 
        res.render('Seasondelete', { title: 'Season Delete', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};  