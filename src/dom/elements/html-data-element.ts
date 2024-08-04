import { HTMLElement } from "../elements/html-element.ts";

export class HTMLDataElement extends HTMLElement {
    #value: string = '';
    public get value() {
        return this.#value;
    }
    public set value(val: string) {
        this.#value = val;
    }
}