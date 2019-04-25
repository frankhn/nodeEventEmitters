var EventEmitter = require('events')
// var app = require('./app');

class Notify extends EventEmitter {

    notify(text){
        console.log('from notify class', text);
        ee.emit('message');
    }

    articles(args){
        setTimeout( () => {
            console.log('from the articles', args);
        }, 5000);
    }
}

module.exports = Notify;