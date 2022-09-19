const fs = require('fs')
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

let readData = fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data)
})

cat(path)


