const faker = require('faker')
const fs = require('fs')

function generateData(){
    let data = []
    for (let id = 1 ; id <= 50 ; id++){
        const title = faker.lorem.sentence(4)
        const description = faker.lorem.sentences(5)

        data.push({
            id: id,
            title: title,
            description: description
        })
    }
    return data
}
const data = generateData()
fs.writeFileSync('datapool.json', JSON.stringify(data, null, '\t'))