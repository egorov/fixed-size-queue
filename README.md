# fixed-size-queue ![Build status](https://travis-ci.org/egorov/fixed-size-queue.svg?branch=master)

Lightweight queue based on fixed size array internally.

You can add it to your project with npm:

    npm install fixed-size-queue

Based on fixed size array. Internally write and read operations changes different locations in memory. Make an instance and use it like this: 

    var capacity = 1000,
    queue = require('fixed-size-queue').create(capacity);
    
    // New queue is empty and count equals 0
    assert.equal(0, queue.getCount());    
    
    var person = { id: 1, name: 'Jack' };
    
    queue.enqueue(person);
    
    // Now queue contains one item
    assert.equal(1, queue.getCount());
            
    var item = queue.dequeue();
    
    // Now it is empty again
    assert.equal(0, queue.getCount());    
        
Full usage instructions you can find at spec/QueueSpec.js.