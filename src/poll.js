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
        console.log(getData());
        var htmlStr = '';
        for (var i = 0; i < getData().polls.length; i++) { 
            var question = getData().polls[i];
            var questionId = `q${i}`;
            htmlStr += question.question + '<br>';
            
            // add options for every choice
            for (var j = 0; j < question.choice.length; j++) { 
                var choice = question.choice[j];
                var choiceId = `${i}${j}`
                htmlStr += `<input type="radio" name="${questionId}" value="${choice}" id="${choiceId}">
                <label for="${choiceId}">${choice}</label><br>`;
            }
        }
        
        // add button
        htmlStr += `<button id="btn">Vote!</button><br>`;
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
                //var question = getData().polls[i];  
                var questionId = `q${i}`;              
                getData().results[i].push(this.element.querySelector("input[name=" + questionId + "]:checked").value);
            }
            this.render();
        })

        document.getElementById("results").addEventListener("click", ev => {
            ev.preventDefault();
            const results = new Results(document.getElementById("hello"));
            results.render();
        })
    }
}