const opn = require('opn');
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true })

nightmare
    .goto('http://www.rpachallenge.com')
    .inject('js', 'cake.js')
    .catch(error => {
        console.log(error)
    })

