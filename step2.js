const fs = require('fs')
const axios = require('axios')
const argv = process.argv
const path = argv[2]


function cat(path) {
    return fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        }
        console.log(data)
    })
}

async function webCat(path) {
    let request = await axios.get(path)
    console.log(request.data)
} 

function evalFunction() {
    if (path.includes('https') || path.includes('http')) {
        return webCat(path);
    }
    return cat(path)
}
evalFunction()