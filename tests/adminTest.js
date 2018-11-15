import {Admin} from "../src/admin.js";
import {getData} from "../src/data.js";
import {assert, report} from "./assert.js";
import { Poll } from "../src/poll.js";

function test_sendData() {
    const el = document.createElement("div");
    const admin = new Admin(el);
    admin.render();

    let div0 = el.querySelector("#div_0");
    div0.querySelector("input[id='question']").text = 'Cats or dogs?';
    div0.querySelector("input[id='type']").text = 'multiple-choice';
    div0.querySelector("input[id='options']").text = 'cats,dogs';

    el.querySelector("button[id='start']").click();

    assert( () => getData().polls.length === 1 );
    assert( () => getData().polls[0].question === 'Cats or dogs?' );
}

// now we run all tests sequentially
test_sendData();

// display ugly results summary
report();
