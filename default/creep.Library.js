/*

goals:
* convert creep alias to it's job list.
* calc total cost of such creep
* recommend best creep for given task / cost ?

possible usage: 
creepLibrary = new CreepLibrary();

creep = creepLibrary.getBestByFunctionAndCost('zzz',111)
creep = creepLibrary.getByRoleNmae('xx')

in: name/ cost
out: creep object

log creep.cost
queue.push(creep);

*/

const MOVE_COST = 50;
const WORK_COST = 100;
const CARRY_COST = 50;
const ATTACH_COST = 80;
const RANGED_ATTACK_COST = 150;
const HEAL_COST = 250;
const CLAIM_COST = 60;
const tough_COST = 10;

var creepRoles = {
      "worker03wcm" : 
            {
                type: 'worker03wcm',
                role: 'worker',
                task: 'mine',
                jobs: [WORK,CARRY,MOVE],
                cost: WORK_COST + CARRY_COST + MOVE_COST,
            },
            
      "worker04wcmm" : 
            {
                type: 'worker04wcmm',
                role: 'worker',
                task: 'mine',
                jobs:[WORK,CARRY,MOVE,MOVE],
                cost: WORK_COST + CARRY_COST + MOVE_COST * 2,
            }               
}

class CreepLibrary {
    
    getByRoleName(roleName) {
        switch (roleName) {
            case 'test':
                console.log('passed');
                break;
            case 'other':
                return creepRoles['worker04wcmm'];
                break;
            default:
                console.log('hz');
        }
    }
}


module.exports = CreepLibrary;