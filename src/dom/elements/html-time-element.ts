import { HTMLElement } from "../elements/html-element.ts";

export class HTMLTimeElement extends HTMLElement {
    #dataTime: string = '';
    public get dataTime() {
        return this.#dataTime;
    }
    public set dataTime(val: string) {
        this.#dataTime = val;
    }
    
}