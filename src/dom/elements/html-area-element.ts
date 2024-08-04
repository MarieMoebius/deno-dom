import { HTMLElement } from "../elements/html-element.ts";

export class HTMLAreaElement extends HTMLElement {
    #alt: string = '';
    public get alt() {
        return this.#alt;
    }
    public set alt(val: string) {
        this.#alt = val;
    }

    #coords: string = '';
    public get coords() {
        return this.#coords;
    }
    public set coords(val: string) {
        this.#coords = val;
    
    }
    #shape: string = '';
    public get shape() {
        return this.#shape;
    }
    public set shape(val: string) {
        this.#shape = val;
    }

    #target: string = '';
    public get target() {
        return this.#target;
    }
    public set target(val: string) {
        this.#target = val;
    }

    #download: string = '';
    public get download() {
        return this.#download;
    }
    public set download(val: string) {
        this.#download = val;
    }

    #ping: string = '';
    public get ping() {
        return this.#ping;
    }
    public set ping(val: string) {
        this.#ping = val;
    }
    #rel: string = '';
    public set rel(val: string) {
        this.#rel = val;
    }

    #relList: DOMTokenList = undefined;
    public get relList() {
        return this.#relList;
    }

    #referrerPolicy: string = '';
    public get referrerPolicy() {
        return this.#referrerPolicy;
    }

    #noHref: boolean = false;
    public get noHref() {
        return this.#noHref;
    }
    
    public set noHref(val: boolean) {
        this.#noHref = val;
    }
}


