import {getData} from "./data.js";
import {Poll} from "./poll.js";

export class Admin {

  constructor(element) {
    this.element = element;
    getData().polls = [];
    getData().results = [];
  }

  render() {
    this.element.innerHTML = `
      <label for="question">Please write the question you are struggling with:</label><br/>
      <input type="text" size="80" id="question"/><br/>

      <label for="type">Poll Type:</label><br/>
      <input type="text" size="30" id="type"/><br/>

      <label for="options">Please specify options (comma-separated):</label><br/>
      <input type="text" size="80" id="options"/><br/>

      <button id="new">Add Poll</button>
      <button id="start">Start</button>
    `;

    this.element.querySelector("button[id='start']").addEventListener("click", ev => {
        // always add `preventDefault` in an event handler. otherwise, the browser
        // will do some default action which usually means submitting the data to the server,
        // which causes the entire page to reload.
        // since we have no server, we don't want that :-)
        ev.preventDefault();

        let questionText = this.element.querySelector("#question").value;
        let questionType = this.element.querySelector("#type").value;
        let options = this.element.querySelector("#options").value.split(",");

        getData().polls.push({questionText,questionType, options});

        console.log(getData());

        new Poll(this.element).render("Nobi");
    });

  }

}
