import { HTMLElement } from "../elements/html-element.ts";

export class HTMLLinkElement extends HTMLElement {
    #href: string = '';
    public get href() {
        return this.#href;
    }
    public set href(val: string) {
        this.#href = val;
    }

    #rel: string = '';
    public get rel() {
        return this.#rel;
    }
    public set rel(val: string) {
        this.rel = val;
    }

    #as: string = '';
    public get as() {
        return this.#as;
    }
    public set as(val: string) {
        this.#as = val;
    }

    #relList: DOMTokenList = undefined
    public get relList() {
        return this.#relList;
    }

    #media: string = '';
    public get media() {
        return this.#media;
    }
    public set media(val: string) {
        this.#media = val;
    }

    #intergrity: string = '';
    public get intergrity() {
        return this.#intergrity;
    }
    public set intergrity(val: string) {
        this.#intergrity = val;
    }

    #hreflang: string = '';
    public get hreflang() {
        return this.#hreflang
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

    #crossOrigin?: DOMTokenList = undefined;
    public get crossOrigin() {
        return this.#crossOrigin;
    }

    #sizes: DOMTokenList = undefined;
    public get sizes() {
        return this.#sizes;
    }
    
    #imageSrcset: string = '';
    public get imageSrcset() {
        return this.#imageSrcset;
    }
    public set imageSrcset(val: string) {
        this.#imageSrcset = val;
    }

    #imageSizes: string = '';
    public get imageSizes() {
        return this.#imageSizes;
    }
    public set imageSizes(val: string) {
        this.#imageSizes = val;
    }

    #referrerPolicy: string = '';
    public get referrerPolicy() {
        return this.#referrerPolicy;
    }
    public set referrerPolicy(val: string) {
        this.#referrerPolicy = val;
    }

    #blocking: DOMTokenList = undefined;
    public get blocking() {
        return this.#blocking;
    }

    #disabled: boolean = false;
    public get disabled() {
        return this.#disabled;
    }
    public set disabled(val: boolean) {
        this.#disabled = val;
    }

    #fetchPriority: string = '';
    public get fetchPriority() {
        return this.#fetchPriority;
    }
    public set fetchPriority(val: string) {
        this.#fetchPriority = val;
    }
    

}

