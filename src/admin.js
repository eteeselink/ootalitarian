import {getData} from "./data.js";
import {Poll} from "./poll.js";

export class Admin {

  constructor(element) {
    this.element = element;
    this.index = 0;
    getData().polls = [];
    getData().results = [];
  }

  createPoll(target) {
    target.innerHTML = `
      <div id="div_${this.index}" style="background-color: E5FDFF; padding-left: 5px">

        <h4>Poll No. ${this.index + 1}</h4>

        <label for="question">Please write the question you are struggling with:</label><br/>
        <input type="text" size="80" id="question"/><br/><br/>

        <label for="type">Poll Type:</label><br/>
        <input type="text" size="30" id="type" value="multiple-choice" disabled/><br/><br/>

        <label for="options">Please specify options (comma-separated):</label><br/>
        <input type="text" size="80" id="options"/><br/>

        <hr/>
      </div>
    `;

    this.index++;
  }

  render() {

    this.element.innerHTML = `
      <h3>Welcome to your voting application!</h3>
      <button id="start">Go!</button>
      <button id="new">Add another poll</button>
      <br/>
      <hr/>
      <div id="container"></div>
    `;

    var div = document.createElement('div');
    this.createPoll(div);
    this.element.querySelector("#container").appendChild(div);

    // Start the poll
    this.element.querySelector("button[id='start']").addEventListener("click", ev => {
        ev.preventDefault();
        if (this.collectData() === true) {
          new Poll(this.element).render("Nobi");
        }
    });

    // Create a new poll
    this.element.querySelector("button[id='new']").addEventListener("click", ev => {
        ev.preventDefault();
        var div = document.createElement('div');
        this.createPoll(div);
        this.element.querySelector("#container").appendChild(div);
    });
  }

  collectData() {
    var ok = true;
    getData().polls = [];

    for (var i = 0; i < this.index; i++) {
      let currentDiv = this.element.querySelector("#div_" + i);
      let question = currentDiv.querySelector("#question").value;
      let type = currentDiv.querySelector("#type").value;
      let choice = currentDiv.querySelector("#options").value.split(",");

      if (question.length === 0 || type.length === 0 || currentDiv.querySelector("#options").value.length === 0) {
        currentDiv.style = "background-color: pink;"
        ok = false;
      } else {
        currentDiv.style = "background-color: E5FDFF;"
      }

      getData().polls.push({question,type, choice});

    }

    return ok;
  }
}
