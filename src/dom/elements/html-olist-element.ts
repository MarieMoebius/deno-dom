import { HTMLElement } from "../elements/html-element.ts";

export class HTMLOlistElement extends HTMLElement {
    #reversed: boolean = false;
    public get reversed() {
        return this.#reversed;
    }
    public set reversed(val: boolean) {
        this.#reversed = val;
    }

    #start: number = 0;
    public get start() {
        return this.#start;
    }
    public set start(val: number) {
        this.#start = val;
    }

    #type: string = '';
    public get type() {
        return this.#type;
    }
    public set type(val: string) {
        this.#type = val;
    }

    #compact: boolean = false;
    public get compact() {
        return this.#compact;
    }
    public set compact(val: boolean) {
        this.#compact = val;
    }

    
}