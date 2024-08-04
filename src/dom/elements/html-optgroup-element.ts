import { HTMLElement } from "../elements/html-element.ts";

export class HTMLOptGroupElement extends HTMLElement {
    #disabled: boolean = false;
    public get disabled() {
        return this.#disabled;
    }
    public set disabled(val: boolean) {
        this.#disabled = val;
    }

    #label: string = '';
    public get label() {
        return this.#label;
    }
    public set label(val: string) {
        this.#label = val;
    }
    
}