var notify = require('./eventerListener');

var not = new notify();

// not.on('message', () => {
//             this.not.notify('this is message')
//         });

//register event
 not.on('article', (args) => not.articles(args))

class User {
        
    static async create(req, res) {
        
        try {
            let arr = [];
        var name = req.body.name;
        var age = req.body.age;
        var address = req.body.address;
        const arrr = {
            name, age, address
        }
        await arr.push(name, age, address);
        // make noise that article is created 
        not.emit('article', arrr);
        res.json({
            arr
        })
        } catch (error) {
            res.json({
            error
        })
        }
    }
}

module.exports = User;