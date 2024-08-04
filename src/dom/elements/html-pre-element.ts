import { HTMLElement } from "../elements/html-element.ts";

export class HTMLPreElement extends HTMLElement {
    #width: number = 0;
    public get width() {
        return this.#width;
    }
    public set width(val: number) {
        this.#width = val;
    }
    
}