/*
managing  spawn queue
working in current room only
room loop in main()
*/
var sys = require('sys.actions');

module.exports = {
    // managing Queue
    updateQueue(spawn,constants){
        
        // init 
        if (typeof spawn.memory.spawnQueue === 'undefined') {
            spawn.memory.spawnQueue = [];
            sys.Echo(spawn.name, 'init spawnQueue');
        }

        // empty queue if not valid
        
        // define new queue
        // var workersInRoom = _.sum(Game.creeps, (c) => c.memory.role == 'worker' && c.room == spawn.room); 
            // no one here ? low energy ? SPAWN cheapest worker
            // TO DO: under attach TO DO: controller level
        //    if (spawn.room.energyAvailable < 2300 && workersInRoom == 0) {}
        
        if (spawn.memory.spawnQueue.length == 0) {
            spawn.memory.spawnQueue.push('worker03wcm');
            sys.Echo(spawn.name, 'Queued! new queue:', spawn.memory.spawnQueue);
        }
        
    },
    
    // executing Queue
    runQueue(spawn,constants) {
        
        if (typeof spawn.memory.spawnQueue !== 'undefined' && spawn.memory.spawnQueue.length !==0) {

            var newRole = spawn.memory.spawnQueue[0]; // first element
            sys.Echo('Spawning...','newRole / cost', newRole, constants.getCost(newRole));
            
            if (constants.workers[newRole]) { // type exists ?
                var newName = constants.workers[newRole].type + '_' + Game.time.toString().padStart(5,'0');
                var spawnResult = spawn.spawnCreep(constants.workers[newRole].jobs,newName,{memory:{role:constants.workers[newRole].role, working: false},dryRun:true});
                if (spawnResult) {
                    sys.Echo('Spawning...','FAILED', spawnResult);
                    
                } else {
                    sys.Echo('Spawning...','name', newName);
                    sys.Echo('Spawning...','type', constants.workers[newRole].type);
                    sys.Echo('Spawning...','role', constants.workers[newRole].role);
                    sys.Echo('Spawning...','jobs', constants.workers[newRole].jobs);
                    var spawnResult = spawn.spawnCreep(constants.workers[newRole].jobs,newName,{memory:{role:constants.workers[newRole].role, working: false},dryRun:false});
                    sys.Echo('Spawning...','success', spawnResult);
                    
                    var removedFromQueue = spawn.memory.spawnQueue.shift(); // fifo from array
                    sys.Echo('Spawning...','removedFromQueue', removedFromQueue);
                }
                
            } else {
                // wrong type in queue - remove
                sys.Echo('Spawning...','not found', newRole);
                var removedFromQueue = spawn.memory.spawnQueue.shift(); // fifo from array
                sys.Echo('Spawning...','removedFromQueue', removedFromQueue);
            }
            
            // Game.spawns['dutchan'].spawnCreep([WORK, CARRY, CARRY, MOVE], 'dave', {memory:{role:'harvester', working: false}});

            
        }
    }
    
};