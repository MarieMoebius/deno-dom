import { HTMLElement } from "../elements/html-element.ts";

export class HTMLMeterElement extends HTMLElement {
    #value: number = 0;
    public get value() {
        return this.#value;
    }
    public set value(val: number) {
        this.#value = val;
    }

    #min: number = 0;
    public get min() {
        return this.#min;
    }
    public set min(val: number) {
        this.#min = val;
    }

    #max: number = 0;
    public get max() {
        return this.#max;
    }
    public set max(val: number) {
        this.#max = val;
    }
    
    #low: number = 0;
    public get low() {
        return this.#low;
    }
    public set low(val: number) {
        this.#low = val;
    }

    #high: number = 0;
    public get high() {
        return this.#high;
    }
    public set high(val: number) {
        this.#high = val;
    }

    #optimum: number = 0;
    public get optimum() {
        return this.#optimum;
    }
    public set optimum(val: number) {
        this.#optimum = val;
    }
    
    #labels: NodeList = undefined;
    public get labels() {
        return this.#labels;
    }
    public set labels(val: NodeList) {
        this.#labels = val;
    }

    
}