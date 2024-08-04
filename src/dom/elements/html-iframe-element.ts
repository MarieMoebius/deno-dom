import { HTMLElement } from "../elements/html-element.ts";

export class HTMLIframeElement extends HTMLElement {
    #src: string = '';
    public get src() {
        return this.#src;
    }
    public set src(val: string) {
        this.#src = val;
    }

    #srcdoc: string = '';
    public get srcdoc() {
        return this.#srcdoc;
    }
    public set srcdoc(val: string) {
        this.#srcdoc = val;
    }

    #name: string = '';
    public get name() {
        return this.#name;
    }

    #sandbox: DOMTokenList = undefined;
    public get sandbox() {
        return this.#sandbox;
    }
    
    #allow: string = '';
    public get allow() {
        return this.#allow;
    }
    public set allow(val: string) {
        this.#allow = val;
    }
    
    #allowFullsreen: boolean = false;
    public get allowFullscreen() {
        return this.#allowFullsreen;
    }
    public set allowFullscreen(val: boolean) {
        this.#allowFullsreen = val;
    }

    #width: string = '';
    public get width() {
        return this.#width;
    }
    public set width(val: string) {
        this.#width = val;
    }

    #height: string = '';
    public get height() {
        return this.#height;
    }
    public set height(val: string) {
        this.#height = val;
    }

    #referrerPolicy: string = '';
    public get referrerPolicy() {
        return this.#referrerPolicy;
    }
    public set referrerPolicy(val: string) {
        this.#referrerPolicy = val;
    }

    #loading: string = '';
    public get loading() {
        return this.#loading;
    }
    public set loading(val: string) {
        this.#loading = val;
    }

    #contentDocument?: Document = undefined;
    public get contentDocument() {
        return this.#contentDocument;
    }
   
    #contentWindow?: WindowProxy = undefined;
    public get contentWindow() {
        return this.#contentWindow;
    }
    
    #align: string = '';
    public get align() {
        return this.#align;
    }
    public set align(val: string) {
        this.#align = val;
    }
    
    #scrolling: string = '';
    public get scrolling() {
        return this.#scrolling;
    }
    public set scrolling(val: string) {
        this.#scrolling = val;
    }

    #frameBorder: string = '';
    public get frameBorder() {
        return this.#frameBorder;
    }
    public set frameBorder(val: string) {
        this.#frameBorder = val;
    }

    #longDesc: string = '';
    public get longDesc() {
        return this.#longDesc;
    }
    public set longDesc(val: string) {
        this.#longDesc = val;
    }

    #marginHeight: string = '';
    public get marginHeight() {
        return this.#marginHeight;
    }
    public set marginHeight(val: string) {
        this.#marginHeight = val;
    }

    #marginWidth: string = '';
    public get marginWidth() {
        return this.#marginWidth;
    }
    public set marginWidth(val: string) {
        this.#marginWidth = val;
    }

    
}
