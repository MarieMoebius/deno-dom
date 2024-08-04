import { HTMLElement } from "../elements/html-element.ts";

export class HTMLAnchorElement extends HTMLElement {
    #target: string = ''
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
    public get rel() {
        return this.#rel;
    }
    public set rel(val: string) {
        this.#rel = val;
    }

    #relList: DOMTokenList = undefined;
    public get relList() {
        return this.#relList;
    }

    #hreflang: string = '';
    public get hreflang() {
        return this.#hreflang;
    }
    public set hreflang(val: string) {
        this.#hreflang = val;
    }

    #type: string = '';
    public get type() {
        return this.#type;
    }
    public set type(val: string) {
        this.#type = val;
    }

    #text: string = '';
    public get text() {
        return this.#text;
    }
    public set text(val: string) {
        this.#text = val;
    }

    #referrerPolicy: string = '';
    public get referrerPolicy() {
        return this.#referrerPolicy;
    }
    public set referrerPolicy(val: string) {
        this.#referrerPolicy = val;
    }

    #coords: string = '';
    public get coords() {
        return this.#coords;
    }
    public set coords(val: string) {
        this.#coords = val;
    }

    #charset: string = '';
    public get charset() {
        return this.#charset;
    }
    public set charset(val: string) {
        this.#charset = val;
    }

    #name: string = '';
    public get name() {
        return this.#name;
    }
    public set name(val: string) {
        this.#name = val;
    }

    #rev: string = '';
    public get rev() {
        return this.#rev;
    }
    public set rev(val: string) {
        this.#rev = val;
    }
    
    #shape: string = '';
    public get shape() {
        return this.#shape;
    }
    public set shape(val: string) {
        this.#shape = val;
    }
 }
