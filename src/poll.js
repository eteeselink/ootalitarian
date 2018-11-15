import {getData} from "./data.js";
import {Results} from "./results.js";

export class Poll {
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }

    render() {
        var htmlStr = '';
        for (var i = 0; i < getData().polls.length; i++) { 
            var question = getData().polls[i];
            htmlStr += question.question + '<br>';
            
            // add options for every choice
            for (var j = 0; j < question.choice.length; j++) { 
                var choice = question.choice[j];
                var choiceId = `${i}${j}`
                htmlStr += `<input type="radio" name="${question.question}" value="${choice}" id="${choiceId}">
                <label for="${choiceId}">${choice}</label><br>`;
            }
        }
        
        // add button
        htmlStr += `<button id="btn">Vote!</button><br>`;
        // add button
        htmlStr += `<button id="results">Results</button>`;
        this.element.innerHTML = htmlStr;

        document.getElementById("btn").addEventListener("click", ev => {
            ev.preventDefault();

            if (getData().results.length == 0) {
                for (var i = 0; i < getData().polls.length; i++) { 
                    getData().results.push(new Array());
                }
            }

            for (var i = 0; i < getData().polls.length; i++) { 
                var question = getData().polls[i];                
                getData().results[i].push(this.element.querySelector("input[name=" + question.question + "]:checked").value);
            }
        })

        document.getElementById("results").addEventListener("click", ev => {
            ev.preventDefault();
            const results = new Results(document.getElementById("hello"));
            results.render();
        })
    }
}