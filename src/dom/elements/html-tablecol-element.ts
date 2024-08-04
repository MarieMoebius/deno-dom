import { HTMLElement } from "../elements/html-element.ts";

export class HTMLTableColElement extends HTMLElement {
    #align: string = '';
    public get align() {
        return this.#align;
    }
    public set align(val: string) {
        this.#align = val;
    }

    #ch: string = '';
    public get ch() {
        return this.#ch;
    }
    public set ch(val: string) {
        this.#ch = val;
    }

    #chOff: string = '';
    public get chOff() {
        return this.#chOff;
    }
    public set chOff(val: string) {
        this.#chOff = val;
    }

    #vAlign: string = '';
    public get vAlign() {
        return this.#vAlign;
    }
    public set vAlign(val: string) {
        this.#vAlign = val;
    }

    #width: string = '';
    public get width() {
        return this.#width;
    }
    public set width(val: string) {
        this.#width = val;
    }
    
}