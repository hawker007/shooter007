// main module

var constants = require('defs.global');         // all defs

var sys = require('sys.actions');               // system functions: echo, tick, cpu
var spawnQueue = require('spawn.queue');        // spawn: queue, runQueue
var jobsQueue = require('jobs.queue');          // jobs

var roleWorker = require('role.worker');        // worker creep behaviour 

const CreepLibrary = require('creep.Library');
const creepLibrary = new CreepLibrary();

creepLibrary.getByRoleName('test');
console.log(creepLibrary.getByRoleName('other').type);
console.log(creepLibrary.getByRoleName('other').cost);

module.exports.loop = function () {
	// sysActions
	sys.act('Report tick');
    sys.act('Clear memory');
    // sys.Echo( constants.version);
	// sys.act('Show CPU');

    //Loop through all rooms your creeps/structures are in
    for(var roomName in Game.rooms){
        var room = Game.rooms[roomName];

    	sys.Echo('roomName',roomName,'energy',room.energyAvailable);

    	// jobsQueue.init(room);
    	// jobsQueue.showAll(room);
    	// jobsQueue.addJob(room,'test1');


        var workersInRoom = _.sum(Game.creeps, (c) => c.memory.role == 'worker' && c.room == room); 
        sys.Echo('main counting ...','workersInRoom',workersInRoom);
    	/*
    	// loop through spawns: QUEUE update, run
    	var mySpawns = room.find(FIND_MY_SPAWNS);
    	for(var spawnId in mySpawns) {
    	    var spawn = mySpawns[spawnId];
    	    sys.Echo('mySpawn',spawn.name);
    	    
            spawnQueue.updateQueue(spawn,constants);
            spawnQueue.runQueue(spawn,constants);
    	}
    	*/
    	// loop through creeps
        for(var name in Game.creeps) {
            var creep = Game.creeps[name];
            if(creep.memory.role == 'worker') {
                roleWorker.run(creep);
            }
        }    	
    	
    }
    
    // sys.Echo(constants.worker03.role,constants.worker03.type,constants.worker03.jobs);

    
    // spawnDo.runQueue(spawnQueueArray);
    
}