class Data {
    constructor() {
        this.polls = [];
        this.results = [];    
    }
}

const data = new Data();
export function getData() {
    return data;
}