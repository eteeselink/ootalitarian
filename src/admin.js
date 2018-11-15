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
      <div id="div_${this.index}">
        <label for="question">Please write the question you are struggling with:</label><br/>
        <input type="text" size="80" id="question"/><br/>

        <label for="type">Poll Type:</label><br/>
        <input type="text" size="30" id="type"/><br/>

        <label for="options">Please specify options (comma-separated):</label><br/>
        <input type="text" size="80" id="options"/><br/>

        <hr/>
      </div>
    `;

    this.index++;
  }

  render() {

    this.element.innerHTML = `
      <button id="new">Add Poll</button>
      <button id="start">Start</button>
      <br/>
      <div id="container"></div>
    `;

    var div = document.createElement('div');
    this.createPoll(div);
    this.element.querySelector("#container").appendChild(div);

    this.element.querySelector("button[id='start']").addEventListener("click", ev => {
        // always add `preventDefault` in an event handler. otherwise, the browser
        // will do some default action which usually means submitting the data to the server,
        // which causes the entire page to reload.
        // since we have no server, we don't want that :-)
        ev.preventDefault();

        for (var i = 0; i < this.index; i++) {
          let currentDiv = this.element.querySelector("#div_" + i);
          let question = currentDiv.querySelector("#question").value;
          let type = currentDiv.querySelector("#type").value;
          let choice = currentDiv.querySelector("#options").value.split(",");

          getData().polls.push({question,type, choice});
        }
        
        new Poll(this.element).render("Nobi");
    });

    this.element.querySelector("button[id='new']").addEventListener("click", ev => {
        // always add `preventDefault` in an event handler. otherwise, the browser
        // will do some default action which usually means submitting the data to the server,
        // which causes the entire page to reload.
        // since we have no server, we don't want that :-)
        ev.preventDefault();

        var div = document.createElement('div');
        this.createPoll(div);
        this.element.querySelector("#container").appendChild(div);
    });
  }

}
