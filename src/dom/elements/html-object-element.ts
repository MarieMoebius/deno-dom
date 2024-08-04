import { HTMLElement } from "../elements/html-element.ts";

export class HTMLObjectElement extends HTMLElement {
    #align: string = '';
    public get align() {
        return this.#align;
    }
    public set align(val: string) {
        this.#align = val;
    }

    #archive: string = '';
    public get archive() {
        return this.#archive;
    }
    public set archive(val: string) {
        this.#archive = val;
    }

    #code: string = '';
    public get code() {
        return this.#code;
    }
    public set code(val: string) {
        this.#code = val;
    }

    #declare: boolean = false;
    public get declare() {
        return this.#declare;
    }
    public set declare(val: boolean) {
        this.#declare = val;
    }
    
    #hspace: number = 0;
    public get hspace() {
        return this.#hspace;
    }
    public set hspace(val: number) {
        this.#hspace = val;
    }

    #standby: string = '';
    public get standby() {
        return this.#standby;
    }
    public set standby(val: string) {
        this.#standby = val;
    }

    #vspace: number = 0;
    public get vspace() {
        return this.#vspace;
    }
    public set vspace(val: number) {
        this.#vspace = val;
    }

    #codeBase: string = '';
    public get codeBase() {
        return this.#codeBase;
    }
    public set codeBase(val: string) {
        this.#codeBase = val;
    }

    #codeType: string = '';
    public get codeType() {
        return this.#codeType;
    }
    public set codeType(val: string) {
        this.#codeType = val;
    }

    #useMap: string = '';
    public get useMap() {
        return this.#useMap;
    }
    public set useMap(val: string) {
        this.#useMap = val;
    }

}