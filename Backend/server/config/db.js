const mongoose = require('mongoose');

export default () => {
    mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/smileDog');
mongoose.connection
    .once('open', () => console.log('MongoDB open'))
    .on('error',error => console.warn('Warning', error))
};

