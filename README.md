# Lightweight queue

Based on fixed size array. Internally write and read operations changes different locations in memory. Make an instance and use it like this: 

    var Queue = require('Queue'),
    queue = new Queue(1000);
    
    // New queue is empty and count equals 0
    var count = queue.getCount();    
    
    var person = { id: 1, name: 'Jack' };
    
    queue.enqueue(person);
    
    // Now count equals 1
    count = queue.getCount();
    
    var item = queue.dequeue();
    
    // Now count equals 0 again
        
Full usage instructions you can find at spec/QueueSpec.js.