import { HTMLElement } from "../elements/html-element.ts";

export class HTMLTitleElement extends HTMLElement {
    #text: string = '';
    public get text() {
        return this.#text;
    }
    public set text(val: string) {
        this.#text = val;
    }
    
}