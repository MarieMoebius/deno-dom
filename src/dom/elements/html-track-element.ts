import { HTMLElement } from "../elements/html-element.ts";

export class HTMLTrackElement extends HTMLElement {
    #kind: string = '';
    public get kind() {
        return this.#kind;
    }
    public set kind(val: string) {
        this.#kind = val;
    }

    #src: string = '';
    public get src() {
        return this.#src;
    }
    public set src(val: string) {
        this.#src = val;
    }

    #srclang: string = '';
    public get srclang() {
        return this.#srclang;
    }
    public set srclang(val: string) {
        this.#srclang = val;
    }

    #label: string = '';
    public get label() {
        return this.#label;
    }
    public set label(val: string) {
        this.#label = val;
    }

    #default: boolean = false;
    public get default() {
        return this.#default;
    }
    public set default(val: boolean) {
        this.#default = val;
    }

    #readyState: number = 0;
    public get readyState() {
        return this.#readyState;
    }
    public set readyState(val: number) {
        this.#readyState = val;
    }

}