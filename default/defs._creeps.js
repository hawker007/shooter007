/*
global.defs.js
 */

var costs = {
        "move": 50,
        "work": 100,
        "carry": 50,
        "attack": 80,
        "ranged_attack": 150,
        "heal": 250,
        "claim": 60,
        "tough": 10
    }
    
module.exports = {

    // diffent types of creeps
    workers: {
      "worker03wcm" : 
            {
                type: 'worker03wcm',
                role: 'worker',
                task: 'mine',
                jobs:[WORK,CARRY,MOVE],
            },
      "worker04wcmm" : 
            {
                type: 'worker04wcmm',
                role: 'worker',
                task: 'mine',
                jobs:[WORK,CARRY,MOVE,MOVE]
            }            
    },    
    
    // assess costs to produce worker
    getCost(worker) {
      var result = 9999999;
      var jobs = this.workers[worker].jobs;
      if (jobs.length > 0) { 
          result = 0;
      }
      for(var jobId in jobs) {
          result += costs[jobs[jobId]];
      }
      return result;
    }    
 
};
