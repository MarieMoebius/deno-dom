import { HTMLElement } from "../elements/html-element.ts";

export class HTMLLiElement extends HTMLElement {
    #value: number = 0;
    public get value() {
        return this.#value;
    }
    public set value(val: number) {
        this.#value = val;
    }

    #type: string = '';
    public get type() {
        return this.#type;
    }
    public set type(val: string) {
        this.#type = val;
    }

}