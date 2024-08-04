import { HTMLElement } from "../elements/html-element.ts";

export class HTMLBaseElement extends HTMLElement {
    #href: string = '';
    public get href() {
        return this.#href;
    }
    public set href(val: string) {
        this.#href = val;
    }
    
    #target: string = '';
    public get target() {
        return this.#target;
    }
    public set target(val: string) {
        this.#target = val;
    }
}