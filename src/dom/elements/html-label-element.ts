import { HTMLElement } from "../elements/html-element.ts";

export class HTMLLabelElement extends HTMLElement {
    #form?: HTMLFormElement = undefined;
    public get form() {
        return this.#form;
    }

    #htmlFor: string = '';
    public get htmlFor() {
        return this.#htmlFor;
    }
    public set htmlFor(val: string) {
        this.#htmlFor = val;
    }

    #control?: HTMLElement = undefined;
    public get control() {
        return this.#control;
    }
    
}