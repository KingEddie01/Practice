const promise = new Promise((resolve,reject) => {
    
    let fileLoaded = true;
    
    if(fileLoaded){
        
        resolve("File is loaded");
    }
    else{
        reject("File not loaded")
    }
})
promise.then(value => console.log(value))
         .catch(error => console.log(error));


const newPromise = new Promise(resolve => {
    setTimeout(resolve,5000)
})

newPromise.then(()=>console.log("Thanks for your patience"))

// without the async keyword
function loadFile(){
    let fileLoaded = false;
    
    if(fileLoaded){
        
        return Promise.resolve("File is loaded finally");
    }
    else{
        return Promise.reject("File not loaded for now");
    }
}
loadFile().then(value => console.log(value))
         .catch(error => console.log(error));
{}
// with the async keyword
async function loadedFile(){
    let fileComplete = true;
   
    if(fileComplete){
        
        return "File loading is completed";
    }
    else{
        
        throw "File not loaded completely"
    }
}  
loadedFile().then(value => console.log(value)).catch(error => console.log(error));     

// await makes async funtion wait for a promise
async function runFile(){
    let fileRun = true;

    if(fileRun){
        return "file is running";
    }
    else{
        throw "file is not running";
    }
    
}
async function startFile(){
    try{
    let message = await runFile();
    console.log(message)
    }
    catch(error){
        console.log(error)
    }
}

startFile();

