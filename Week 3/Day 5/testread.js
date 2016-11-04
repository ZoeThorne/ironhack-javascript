var read = require('read');

options = {
    prompt: "What's your name?\n>"
}


read(options, displayName)


function displayName (err, name){
    console.log("Your name is: " + name)
}
