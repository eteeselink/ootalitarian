import { getData } from './data.js';

export class Results {

    
    constructor(element) {
        console.log('result');
        this.element = element;
        this.data = getData();
    }

    render() {

        var html = ``;
        console.log(this.data);

        for (var i = 0; i < this.data.results.length; i++) {
            html += `<p>${this.data.polls[i]}</p>:<p>${this.data.results[i]}</p>`;
        }

       this.element.innerHTML = html;
    }
}