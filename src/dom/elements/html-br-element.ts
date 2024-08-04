import { HTMLElement } from "../elements/html-element.ts";

export class HTMLBrElement extends HTMLElement {
    #clear: string = '';
    public get clear() {
        return this.#clear;
    }
    public set clear(val: string) {
        this.#clear = val;
    }
}