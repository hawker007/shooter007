/*
managing  job queue
working in current room only
room loop in main()
*/
var sys = require('sys.actions');

var jobsQueue = {
    
    init: function(room) {
        // init 
        if (typeof room.memory.jobsQueue === 'undefined') {
            room.memory.jobsQueue = [];
            sys.Echo(room.name, 'init jobsQueue');
        }        
    },
    
    showAll: function(room) {
        var taskList = room.memory.jobsQueue;
        for(var taskId in taskList) {
            sys.Echo(room.name, 'task', taskId);
        }
    },
    
    addJob: function(room,task) {
         room.memory.jobsQueue.push(task);
    }
    
};

module.exports = jobsQueue;