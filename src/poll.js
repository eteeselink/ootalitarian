import {getData} from "./data.js";


export class Poll {
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }

    render() {
        this.element.innerHTML = `
            
            <input type="radio" name="pizza" value="${getData().polls[0]}" id="radio1">
            <label for="radio1">${getData().polls[0]}</label><br>



            <button id="btn">Vote!</button>
        `;

        document.getElementById("btn").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();

            getData().results.push(this.element.querySelector("input[name=pizza]:checked").value);
            //const bestPizza = this.element.querySelector("input[name=pizza]:checked").value;
            //this.element.innerHTML = `<p>Indeed ${name}, Pizza ${bestPizza} is by far the best.</p><div id="pizza"></div>`;
            
            //makeAsciiArt(this.element.querySelector("#pizza"));
        })
    }
}