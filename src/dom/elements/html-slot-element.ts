import { HTMLElement } from "../elements/html-element.ts";

export class HTMLSlotElement extends HTMLElement {
    #name: string = '';
    public get name() {
        return this.#name;
    }
    public set name(val: string) {
        this.#name = val;
    }
    
}