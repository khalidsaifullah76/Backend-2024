// meng import data fruits
let fruits = require ("./fruits.js");

// membuat fungsi index
let index = () => {
    for (let fruit of fruits)
        {console.log(fruit);}
};

// membuat fungsi store
let store = (name) => 
    {fruits.push(name);
        index();};

// membuat fungsi update
let update = (fruitsupdate, newname) =>{
        fruits[fruitsupdate] = newname;
        index();
};

// Membuat fungsi destroy
let destroy = (indexdestroy) => {
        fruits.splice(indexdestroy, 1);
        index();
};

module.exports ={ index, store, update, destroy };