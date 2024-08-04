import { HTMLElement } from "../elements/html-element.ts";

export class HTMLTableCellElement extends HTMLElement {
    #colSpan: number = 0;
    public get colSpan() {
        return this.#colSpan;
    }
    public set colSpan(val: number) {
        this.#colSpan = val;
    }

    #rowSpan: number = 0;
    public get rowSpan() {
        return this.#rowSpan;
    }
    public set rowSpan(val: number) {
        this.#rowSpan = val;
    }

    #headers: string = '';
    public get headers() {
        return this.#headers;
    }
    public set headers(val: string) {
        this.#headers = val;
    }

    #cellIndex: number = 0;
    public get cellIndex() {
        return this.#cellIndex;
    }
    public set cellIndex(val: number) {
        this.#cellIndex = val;
    }

    #scope: string = '';
    public get scope() {
        return this.#scope;
    }
    public set scope(val: string) {
        this.#scope = val;
    }

    #abrr: string = '';
    public get abrr() {
        return this.#abrr;
    }
    public set abrr(val: string) {
        this.#abrr = val;
    }

    #align: string = '';
    public get align() {
        return this.#align;
    }
    public set align(val: string) {
        this.#align = val;
    }

    #axis: string = '';
    public get axis() {
        return this.#axis;
    }
    public set axis(val: string) {
        this.#axis = val;
    }

    #height: string = '';
    public get height() {
        return this.#height;
    }
    public set height(val: string) {
        this.#height = val;
    }

    #width: string = '';
    public get width() {
        return this.#width;
    }
    public set width(val: string) {
        this.#width = val;
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

}