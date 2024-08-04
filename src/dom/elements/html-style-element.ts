import { HTMLElement } from "../elements/html-element.ts";

export class HTMLStyleElement extends HTMLElement {
    #disabled: boolean = false;
    public get disabled() {
        return this.#disabled;
    }
    public set disabled(val: boolean) {
        this.#disabled = val;
    }

    #media: string = '';
    public get media() {
        return this.#media;
    }
    public set media(val: string) {
        this.#media = val;
    }

    #blocking: DOMTokenList = undefined;
    public get blocking() {
        return this.#blocking;
    }

    #type: string = '';
    public get type() {
        return this.#type;
    }
    public set type(val: string) {
        this.#type = val;
    }

    
}