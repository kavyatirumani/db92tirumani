var Dog = require('../models/dog'); 
 
// List of all Costumes 
exports.dog_list = async function(req, res) { 
        try{ 
            let dog = await Dog.find(); 
            res.send(dog); 
        } 
        catch(err){ 
            res.status(500); 
            res.send(`{"error": ${err}}`); 
        }   
}; 
 // VIEWS 
// Handle a show all view 
exports.dog_view_all_Page = async function(req, res) { 
    try{ 
        let dogs = await Dog.find(); 
        res.render('dog', { title: 'Dog Search Results', results: dogs }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// for a specific dog. 
exports.dog_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: dog detail: ' + req.params.id); 
}; 
 
// Handle dog delete form on DELETE. 
exports.dog_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: dog delete DELETE ' + req.params.id); 
}; 
 
// Handle dog update form on PUT. 
exports.dog_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: dog update PUT' + req.params.id); 
}; 
// Handle Costume create on POST. 
exports.dog_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Dog(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"dog_type":"pooch", "price":12, "colour":"white"} 
    document.breed = req.body.breed; 
    document.price = req.body.price; 
    document.colour = req.body.colour; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 