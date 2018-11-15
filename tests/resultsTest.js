import {Admin} from "../src/admin.js";
import {getData} from "../src/data.js";
import {assert, report} from "./assert.js";
import { Poll } from "../src/poll.js";
import { Results } from "../src/results.js";


function testcountElement(){
    var r= new Results;
    assert( () => r.countElement([1,2,3,4],1) === 1 );
    assert( () => r.countElement([1,1,1,1],1) === 4 );
    assert( () => r.countElement([1,2,1,1,5,6,7,8],1) === 3 );
    assert( () => r.countElement([1,2,3,4],8) === 0 );
    assert( () => r.countElement([4,2,3,4],4) === 2 );
    }

    function testgetAnswerCount(){
        var r= new Results;

        var questfion1 = r.getAnswerCount({question: 'question1', type: 'text', choice: ['a','b','c','d']} , ['a','a','b']);
        
        assert( () => questfion1['b'] == '1');
        assert( () => questfion1['a'] == '2');
        assert( () => questfion1['c'] == '0');
        assert( () => questfion1['d'] == '0');
        
        }

// now we run all tests sequentially
//test1();
testcountElement();
testgetAnswerCount();

// display ugly results summary
report();
