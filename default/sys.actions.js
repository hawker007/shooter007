/*
standard system actions
actions.sys.js
 */
 
function myLog (myArr) {
    var myStr = '(sni script)'+'['+Game.time.toString().padStart(5)+']';
    myArr.forEach(function(element) {
        if (element)
            myStr += element.toString().padStart(25);
    });
    return myStr;
}

module.exports = {
    act (param, param1 = null, param2 = null, param3 = null, param4 = null, param5 = null) {
        switch (param) {
            case 'Report tick': {
                console.log(myLog(['-----------------------','-----------------------','------------------ TICK','------------------ MEM:', JSON.stringify(Memory).length ]));
                break;
            }
            case 'Clear memory': {
                for(var name in Memory.creeps) {
                    if(!Game.creeps[name]) {
                        delete Memory.creeps[name];
                        console.log(myLog(['Release memory',name]));
                    }
                }                
                break;
            }
            case 'Show CPU': {
                console.log(myLog(['myLimit/Bucket/tickLimit',Game.cpu.limit, '/', Game.cpu.bucket, '/', Game.cpu.tickLimit]));
                break;
            }    
            default:
            {   
                console.log(myLog(['Unknown param!']));
            }
        }
    },

    Echo (param, param1 = null, param2 = null, param3 = null, param4 = null, param5 = null) {
        console.log(myLog([param,param1,param2,param3,param4,param5]));
    }    
};