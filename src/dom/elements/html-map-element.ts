import { HTMLElement } from "../elements/html-element.ts";

export class HTMLMapElement extends HTMLElement {
    #name: string = '';
    public get name() {
        return this.#name;
    }
    public set name(val: string) {
        this.#name = val;
    }

    #areas: HTMLCollection = undefined;
    public get areas() {
        return this.#areas;
    }
    
}