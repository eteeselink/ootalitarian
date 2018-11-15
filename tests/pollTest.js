import {Admin} from "../src/admin.js";
import {getData} from "../src/data.js";
import {assert, report} from "./assert.js";
import { Poll } from "../src/poll.js";



function test2() {
    var question = {};
    question.question = 'testquestion';
    question.type = 'bla';
    question.choice = new Array('a', 'b', 'c');
    getData().polls.push(question);
    console.log(getData());

    const el = document.createElement("div");
    const poll = new Poll(el);
    poll.render();



  /*  let div0 = el.querySelector("#div_0");
    div0.querySelector("input[id='question']").text = 'Cats or dogs?';
    div0.querySelector("input[id='type']").text = 'multiple-choice';
    div0.querySelector("input[id='options']").text = 'cats,dogs';

    el.querySelector("button[id='start']").click();

    assert( () => getData().polls.length === 1 );
    assert( () => getData().polls[0].question === 'Cats or dogs?' );*/
}

// now we run all tests sequentially

test2();

// display ugly results summary
report();
