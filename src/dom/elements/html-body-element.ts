import { HTMLElement } from "../elements/html-element.ts";

export class HTMLBodyElement extends HTMLElement {
    #text: string = '';
    public get text() {
        return this.#text;
    }
    public set text(val: string) {
        this.#text = val;
    }

    #link: string = '';
    public get link() {
        return this.#link;
    }
    public set link(val: string) {
        this.#link = val;
    }

    #vLink: string = '';
    public get vLink() {
        return this.#vLink;
    }
    public set vLink(val: string) {
        this.#vLink = val;
    }

    #aLink: string = '';
    public get aLink() {
        return this.#aLink;
    }
    public set aLink(val: string) {
        this.#aLink = val;
    }

    #bgColor: string = '';
    public get bgColor() {
        return this.#bgColor;
    }
    public set bgColor(val: string) {
        this.#bgColor = val;
    }
    
    #background: string = '';
    public get background() {
        return this.#background;
    }
    public set background(val: string) {
        this.#background = val;
    }
}