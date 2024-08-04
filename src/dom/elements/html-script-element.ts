import { HTMLElement } from "../elements/html-element.ts";

export class HTMLSciptElement extends HTMLElement {
    #src: string = '';
    public get src() {
        return this.#src;
    }
    public set src(val: string) {
        this.#src = val;
    }

    #type: string = '';
    public get type() {
        return this.#type;
    }
    public set type(val: string) {
        this.#type = val;
    }

    #noModule: boolean = false;
    public get noModule() {
        return this.#noModule;
    }
    public set noModule(val: boolean) {
        this.#noModule = val;
    }

    #async: boolean = false;
    public get async() {
        return this.#async;
    }
    public set async(val: boolean) {
        this.#async = val;
    }

    #defer: boolean = false;
    public get defer() {
        return this.#defer;
    }
    public set defer(val: boolean) {
        this.#defer = val;
    }

    #crossOrigin?: string = '';
    public get crossOrigin() {
        return this.#crossOrigin;
    }
    public set form(val: string | undefined) {
        this.#crossOrigin = val;

    }
    #text: string = '';
    public get text() {
        return this.#text;
    }
    public set text(val: string) {
        this.#text = val;
    }

    #intergrity: string = '';
    public get intergrity() {
        return this.#intergrity;
    }
    public set intergrity(val: string) {
        this.#intergrity = val;
    }

    #referrerPolicy: string = '';
    public get referrerPolcy() {
        return this.#referrerPolicy;
    }
    public set referrerPolicy(val: string) {
        this.#referrerPolicy = val;
    }

    #blocking: DOMTokenList = undefined
    public get blocking() {
        return this.#blocking;
    }

    #fetchPriority: string = '';
    public get fetchPriority() {
        return this.#fetchPriority;
    }
    public set fetchPriority(val: string) {
        this.#fetchPriority = val;
    }

    #charset: string = '';
    public get charset() {
        return this.#charset;
    }
    public set charset(val: string) {
        this.#charset = val;
    }

    #event: string = '';
    public get event() {
        return this.#event;
    }
    public set event(val: string) {
        this.#event = val;
    }

    #htmlFor: string = '';
    public get htmlFor() {
        return this.#htmlFor;
    }
    public set htmlFor(val: string) {
        this.#htmlFor = val;
    }

    
}