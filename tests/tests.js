import {Admin} from "../src/admin.js";
import {getData} from "../src/data.js";
import {assert, report} from "./assert.js";

function test1() {
    const el = document.createElement("div");
    const admin = new Admin(el);
    admin.render();

    let div0 = el.querySelector("#div_0");
    div0.querySelector("input[id='question']").value = 'Cats or dogs?';
    div0.querySelector("input[id='type']").value = 'multiple-choice';
    div0.querySelector("input[id='options']").value = 'cats,dogs';

    el.querySelector("button[id='start']").click();

    assert( () => getData().polls.length === 1 );
    assert( () => getData().polls[0].question === 'Cats or dogs?' );
}

// now we run all tests sequentially
test1();

// display ugly results summary
report();
