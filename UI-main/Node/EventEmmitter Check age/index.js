var event = require('events')
var em = new event.EventEmitter();
em.on("myEvent",(data)=>{
    console.log(data);
})
em.on('checkAge',(age)=>{
    if(age > 18)
    {
        console.log('Eligible')
    }
    else
    {
        console.log('Not eligible')
    }
})
em.emit('myEvent','This is my data');
em.emit('checkAge',19)
em.emit('checkAge',12)