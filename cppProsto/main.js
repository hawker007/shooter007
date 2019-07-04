var s1  = require('s1_creep_proc');

// Game.spawns.s1.memory = null;
// Game.spawns.s1.memory.memoryReinit = true;

module.exports.loop = function()
{ 
  //console.log(Game.cpu.getUsed());
  
for(var i in Memory.creeps) {
    if(!Game.creeps[i] ) {
        delete Memory.creeps[i];
    }
    if (Game.creeps[i].memory.role==null) {
        // Game.creeps[i].suicide();
    }
}

  if(Game.spawns.s1)
    s1.processing();


    
 //  Game.spawns.s1.memory.MaxUsedCPU = 0;
 //  Game.spawns.s1.memory.AverageUsedCPU = 0;
 //  Game.spawns.s1.memory.CommonUsedCPU = 0;
 //  Game.spawns.s1.memory.TickCountUsedCPU = 0;
 
  var used = Game.cpu.getUsed();
  Game.spawns.s1.memory.CommonUsedCPU += used;
  Game.spawns.s1.memory.TickCountUsedCPU++;
  Game.spawns.s1.memory.AverageUsedCPU = Game.spawns.s1.memory.CommonUsedCPU / Game.spawns.s1.memory.TickCountUsedCPU;
  if( used > Game.spawns.s1.memory.MaxUsedCPU)
    Game.spawns.s1.memory.MaxUsedCPU = used;
  
  //console.log("max CPU used - " + Game.spawns.s1.memory.MaxUsedCPU + ", Avg = " + Game.spawns.s1.memory.AverageUsedCPU);
  return;
}
