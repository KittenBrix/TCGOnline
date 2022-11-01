import { Side } from "./enums";

export default class Stack<Type> {
    private readonly state: Type[]; //no replacing! >:(

    constructor() {
        this.state = [];
    }
    
    public shuffle(): void {
        // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array Knuth shuffle
        let currentIndex = this.state.length;
        let randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          // And swap it with the current element.
          [this.state[currentIndex], this.state[randomIndex]] = [
            this.state[randomIndex], this.state[currentIndex]];
        }
    }

    public getList(): Type[]
    {
        return this.state;
    }

    public push(...arg: Type[]) {
        this.state.push(...arg);
    }

    public draw(amount: number, side: ) {
        const X =
    }

    
}