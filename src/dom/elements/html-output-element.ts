import { HTMLElement } from "../elements/html-element.ts";

export class HTMLOutPutElement extends HTMLElement {
    #htmlFor: DOMTokenList = undefined;
    public get htmlFor() {
        return this.#htmlFor;
    }

    #form?: HTMLFormElement = undefined
    public get form() {
        return this.#form;
    }
    
}