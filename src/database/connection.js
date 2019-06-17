const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vuebd', {
    useNewUrlParser: true
}, (err) => {
    if (err) throw err;
});