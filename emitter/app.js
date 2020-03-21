const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('onevent', (num1, num2) => {
    console.log(num1 + num2);
});

eventEmitter.emit('onevent', 1, 2);

class person extends EventEmitter{
    constructor(name){
        super()
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

let james = new person('james'); 
let maya = new person('maya'); 
james.on('name',()=>{
    console.log('my name is ' + james.name);
})
maya.on('name',()=>{
    console.log('my name is ' + maya.name);
})

james.emit('name');
maya.emit('name');