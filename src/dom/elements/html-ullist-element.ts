import { HTMLElement } from "../elements/html-element.ts";

export class HTMLUListElement extends HTMLElement {
    #compact: boolean = false;
    public get compact() {
        return this.#compact;
    }
    public set compact(val: boolean) {
        this.#compact = val;
    }

    #type: string = '';
    public get type() {
        return this.#type;
    }
    public set type(val: string) {
        this.#type = val;
    }
    
}