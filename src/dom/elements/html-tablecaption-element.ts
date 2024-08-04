import { HTMLElement } from "../elements/html-element.ts";

export class HTMLTableCaptionElement extends HTMLElement {
    #align: string = '';
    public get align() {
        return this.#align;
    }
    public set align(val: string) {
        this.#align = val;
    }
    
}