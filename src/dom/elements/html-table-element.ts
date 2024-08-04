import { HTMLElement } from "../elements/html-element.ts";

export class HTMLTableElement extends HTMLElement {
    #align: string = '';
    public get align() {
        return this.#align;
    }
    public set align(val: string) {
        this.#align = val;
    }
    #border: string = '';
    public get border() {
        return this.#border;
    }
    public set border(val: string) {
        this.#border = val;
    }

    #frame: string = '';
    public get frame() {
        return this.#frame;
    }
    public set frame(val: string) {
        this.#frame = val;
    }

    #rules: string = '';
    public get rules() {
        return this.#rules;
    }
    public set rules(val: string) {
        this.#rules = val;
    }

    #summary: string = '';
    public get summary() {
        return this.#summary;
    }
    public set summary(val: string) {
        this.#summary = val;
    }

    #width: string = '';
    public get width() {
        return this.#width;
    }
    public set width(val: string) {
        this.#width = val;
    }

    #bgColor: string = '';
    public get bgColor() {
        return this.#bgColor;
    }
    public set bgColor(val: string) {
        this.#bgColor = val;
    }

    #cellPadding: string = '';
    public get cellPadding() {
        return this.#cellPadding;
    }
    public set cellPadding(val: string) {
        this.#cellPadding = val;
    }

    #cellSpacing: string = '';
    public get cellSpacing() {
        return this.#cellSpacing;
    }
    public set cellSpacing(val: string) {
        this.#cellSpacing = val;
    }

    #tHead?: HTMLTableSectionElement = undefined;
    public get tHead() {
        return this.#tHead;
    }
    public set tHead(val: HTMLTableCaptionElement | undefined ) {
        this.#tHead = val;
    }

    #tFoot?: HTMLTableSectionElement = undefined;
    public get tFoot() {
        return this.#tFoot;
    }
    public set tFoot(val: HTMLTableSectionElement | undefined) {
        this.#tFoot = val;
    }

    #tBodies: HTMLCollection = undefined;
    public get tBodies() {
        return this.#tBodies;
    }

    #rows: HTMLCollection = undefined
    public get rows() {
        return this.#rows;
    }

}