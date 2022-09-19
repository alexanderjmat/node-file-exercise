const fs = require('fs')
const axios = require('axios')
const argv = process.argv


function cat(argv) {
    if (argv.includes('--out')) {
        return writeFile(argv[3], argv[4])
    }
    return readSource(argv[2])
}

function readSource(path) {
    if (path.includes('https') || path.includes('http')) {
        return readURL(path)
    }
    return readFile(path)
}

function writeFile(writtenFile, writingFile) {
    fs.readFile(writingFile, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        }
        return fs.writeFile(writtenFile, data, 'utf8', (err, data) => {
            if (err) {
                console.log(err)
            }
            console.log(`Content of ${writingFile} written to ${writtenFile}`)
        })
    })
}

function readFile(path) {
    return fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        }
        console.log(data)
    })
}

async function readURL(path) {
    let request = await axios.get(path)
    console.log(request.data)
}

cat(argv);