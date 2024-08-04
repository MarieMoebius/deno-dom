import { HTMLElement } from "../elements/html-element.ts";

export class HTMLTableRowElement extends HTMLElement {
    #rowIndex: number = 0;
    public get rowIndex() {
        return this.#rowIndex;
    }
    public set rowIndex(val: number) {
        this.#rowIndex = val;
    }

    #sectionRowIndex: number = 0;
    public get sectionRowIndex() {
        return this.#sectionRowIndex;
    }
    public set sectionRowIndex(val: number) {
        this.#sectionRowIndex = val;
    }

    #cells: HTMLCollection = undefined;
    public get cells() {
        return this.#cells;
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

    #bgColor: string = '';
    public get bgColor() {
        return this.#bgColor;
    }
    public set bgColor(val: string) {
        this.#bgColor = val;
    }
    
}