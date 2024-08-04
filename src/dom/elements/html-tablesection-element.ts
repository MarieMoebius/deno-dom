import { HTMLElement } from "../elements/html-element.ts";

export class HTMLTableSectionElement extends HTMLElement {
    #rows: HTMLCollection = undefined;
    public get rows() {
        return this.#rows;
    }

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
    
    
}