class Data {

    constructor() {

    }
}

const data = new Data();
export function getData() {
    data.polls = [];
    data.results = [];
    return data;
}