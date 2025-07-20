const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://0.0.0.0/project')
.then(() => {
    console.log('connected to dataase')

})