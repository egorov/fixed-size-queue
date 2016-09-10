describe('Queue', function(){
    'use strict';

    var Queue, capacity, queue;

    beforeEach(function(){
		Queue = require('../index');
        capacity = 10;
        queue = Queue.create(capacity);
    });

    it('should return queue capacity and count', function(){

        expect(queue.getCapacity()).toEqual(capacity);
        expect(queue.getCount()).toEqual(0);

    });

    it('should set default capacity value', function(){

        var default_capacity_queue = Queue.create(-1);
        expect(default_capacity_queue.getCapacity()).toEqual(100);

        default_capacity_queue = Queue.create(0);
        expect(default_capacity_queue.getCapacity()).toEqual(100);

        default_capacity_queue = Queue.create();
        expect(default_capacity_queue.getCapacity()).toEqual(100);
    });

    it('should enqueue value', function(){

        queue.enqueue({ name: 'value' });

        expect(queue.getCount()).toEqual(1);

    });

    it('should dequeue value', function(){

        var original = { name: 'value' };
        queue.enqueue(original);
        var item = queue.dequeue();

        expect(item).toEqual(original);

    });

    it('should throw when dequeue from empty', function(){

        var method = function(){
            queue.dequeue();
        };

        expect(method).toThrow(new Error('Queue is empty!'));
    });

    it('should throw queue is full error', function(){

        for(var i = 0; i < queue.getCapacity(); i++){
            expect(queue.getCount()).toEqual(i);
            queue.enqueue(i);
        }

        var method = function(){
            queue.enqueue(10);
        };

        expect(method).toThrow(new Error('Queue is full!'));

    });

    it('should enqueue to full and dequeue to empty', function(){

        for(var i = 0; i < queue.getCapacity(); i++){
            expect(queue.getCount()).toEqual(i);
            queue.enqueue(i);
        }

        for(var j = queue.getCount(); j > 0; j--){
            expect(queue.getCount()).toEqual(j);
            queue.dequeue();
        }

    });

    it('should enqueue and dequeue in loop', function(){

        for(var i = 0; i < 100; i++){
            queue.enqueue(i);
            var item = queue.dequeue();
            expect(item).toEqual(i);
        }

        expect(queue.getCount()).toEqual(0);

    });

    it('should peek an element', function(){

        var original = { name: 'value'};
        queue.enqueue(original);
        var copy = queue.peek();
        expect(queue.getCount()).toEqual(1);
        expect(copy).toEqual(original);

    });

    it('should throw an error on try to peek from empty queue', function(){

        var method = function(){
            queue.peek();
        };

        expect(method).toThrow(new Error("Queue is empty!"));

    });

    it('should peek first element', function(){

        var first = { name: 'first'};
        var second = { name: 'second'};

        queue.enqueue(first);
        queue.enqueue(second);
        expect(queue.getCount()).toEqual(2);

        var copyOfFirst = queue.peek();
        expect(copyOfFirst).toEqual(first);

    });

    it('should return last inserted element', function(){

        var original = { name: 'value'};
        queue.enqueue(original);
        var copy = queue.last();
        expect(queue.getCount()).toEqual(1);
        expect(copy).toEqual(original);

    });

    it('should throw an error on try to get last from empty queue', function(){

        var method = function(){
            queue.last();
        };

        expect(method).toThrow(new Error("Queue is empty!"));

    });

    it('should return last inserted element', function(){

        var first = { name: 'first'};
        var second = { name: 'second'};

        queue.enqueue(first);
        queue.enqueue(second);
        expect(queue.getCount()).toEqual(2);

        var copyOfLast = queue.last();
        expect(copyOfLast).toEqual(second);

    });

});
