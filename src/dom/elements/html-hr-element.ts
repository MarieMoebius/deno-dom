import { HTMLElement } from "../elements/html-element.ts";

export class HTMLHrElement extends HTMLElement {
    #align: string = '';
    public get align() {
        return this.#align;
    }
    public set align(val: string) {
        this.#align = val;
    }

    #color: string = '';
    public get color() {
        return this.#color;
    }
    public set color(val: string) {
        this.#color = val;
    }

    #noshade: boolean = false;
    public get noshade() {
        return this.#noshade;
    }
    public set noshade(val: boolean) {
        this.#noshade = val;
    }

    #size: string = '';
    public get size() {
        return this.#size;
    }
    public set size(val: string) {
        this.#size = val;
    }
    
    #width: string = '';
    public get width() {
        return this.#width;
    }
    public set width(val: string) {
        this.#width = val;
    }
    
    
}