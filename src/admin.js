import {getData} from "./data.js";
import {Poll} from "./poll.js";

export class Admin {

  constructor(element) {
    this.element = element;
  }

  render() {
    this.element.innerHTML = `
      <label for="question">Please write the question you are struggling with:</label>
      <input type="text" id="question"/>
      <button id="start">Start</button>
    `;

    this.element.querySelector("button[id='start']").addEventListener("click", ev => {
        // always add `preventDefault` in an event handler. otherwise, the browser
        // will do some default action which usually means submitting the data to the server,
        // which causes the entire page to reload.
        // since we have no server, we don't want that :-)
        ev.preventDefault();

        let questionText = this.element.querySelector("#question").value;
        getData().polls.push(questionText);

        console.log(getData());

        new Poll(this.element).render("Nobi");
    });

  }

}
