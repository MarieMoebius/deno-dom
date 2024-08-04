import { HTMLElement } from "../elements/html-element.ts";

export class HTMLSourceElement extends HTMLElement {
    #src: string = '';
    public get src() {
        return this.#src;
    }
    public set src(val: string) {
        this.#src = val;
    }

    #type: string = '';
    public get type() {
        return this.#type;
    }
    public set type(val: string) {
        this.#type = val;
    }

    #srcset: string = '';
    public get srcset() {
        return this.#srcset;
    }
    public set srcset(val: string) {
        this.#srcset = val;
    }

    #sizes: string = '';
    public get sizes() {
        return this.#sizes;
    }
    public set sizes(val: string) {
        this.#sizes = val;
    }

    #media: string = '';
    public get media() {
        return this.#media;
    }
    public set media(val: string) {
        this.#media = val;
    }

    #width: number = 0;
    public get width() {
        return this.#width;
    }
    public set width(val: number) {
        this.#width = val;
    }

    #height: number = 0;
    public get height() {
        return this.#height;
    }
    public set height(val: number) {
        this.#height = val;
    }

    
}