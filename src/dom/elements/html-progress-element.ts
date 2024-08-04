import { HTMLElement } from "../elements/html-element.ts";

export class HTMLProgressElement extends HTMLElement {
    #value: number = 0;
    public get value() {
        return this.#value;
    }
    public set value(val: number) {
        this.#value = val;
    }

    #max: number = 0;
    public get max() {
        return this.#max;
    }
    public set max(val: number) {
        this.#max = val;
    }

    #position: number = 0;
    public get position() {
        return this.#position;
    }
    
    #labels: NodeList = undefined;
    public get labels() {
        return this.#labels;
    }

}