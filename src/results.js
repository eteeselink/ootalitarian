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
            var answerCount = this.getAnswerCount(this.data.polls[i], this.data.results[i]);
            var answerStr = '(';
            Object.keys(answerCount).forEach(a => {
                answerStr += `${a}:${answerCount[a]}, `;
            });
            answerStr += ')';

            html += `<p>${this.data.polls[i].question} : ${answerStr}</p>`;
        }

        this.element.innerHTML = html;
    }

    getAnswerCount(poll, answers) {
        var result = {};
        poll.choice.forEach(item => {
            result[item] = this.countElement(answers, item);
        });
        return result;
    }

    countElement(array, item) {
        var count = 0;
        for (var i = 0; i < array.length; ++i) {
            if (array[i] == item)
                count++;
        }
        return count;
    }
}