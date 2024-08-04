import { HTMLElement } from "../elements/html-element.ts";

export class HTMLMetalElement extends HTMLElement {
    #name: string = '';
    public get name() {
        return this.#name;
    }
    public set name(val: string) {
        this.#name = val;
    }

    #httEquiv: string = '';
    public get httEquiv() {
        return this.#httEquiv;
    }
    public set httEquiv(val: string) {
        this.#httEquiv = val;
    }

    #content: string = '';
    public get content() {
        return this.#content;
    }
    public set content(val: string) {
        this.#content = val;
    }

    #media: string = '';
    public get media() {
        return this.#media;
    }
    public set media(val: string) {
        this.#media = val;
    }

    #scheme: string = '';
    public get scheme() {
        return this.#scheme;
    }
    public set scheme(val: string) {
        this.#scheme = val;
    }

    
}