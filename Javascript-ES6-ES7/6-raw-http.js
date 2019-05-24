const https = require('https')
const url = 'https://api.darksky.net/forecast/f8166b8c3bb313367a7faa023758213a/44.1545,-75.7088'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()