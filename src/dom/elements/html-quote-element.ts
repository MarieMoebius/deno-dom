import { HTMLElement } from "../elements/html-element.ts";

export class HTMLQuoteElement extends HTMLElement {
    #cite: string = '';
    public get cite() {
        return this.#cite;
    }
    public set cite(val: string) {
        this.#cite = val;
    }
    
}