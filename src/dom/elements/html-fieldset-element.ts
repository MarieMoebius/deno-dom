import { HTMLElement } from "../elements/html-element.ts";

export class HTMLFieldSetElement extends HTMLElement {
    #disabled: boolean = false;
    public get disabled() {
        return this.#disabled ;
    }
    public set disabled(val: boolean) {
        this.#disabled = val;
        
    }
    #name: string = '';
    public get name() {
        return this.#name;
    }
    public set name(val: string) {
        this.#name = val;
    }

    #type: string = '';
    public get type() {
        return this.#type;
    }
    public set type(val: string) {
        this.#type = val;
    }

    #form?: HTMLFormElement = undefined;
    public get form() {
        return this.#form;
    }

    
}