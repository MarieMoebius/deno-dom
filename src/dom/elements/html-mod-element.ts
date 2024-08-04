import { HTMLElement } from "../elements/html-element.ts";

export class HTMLModElement extends HTMLElement {
#cite: string = '';
public get cite() {
    return this.#cite;
}
public set cite(val: string) {
    this.#cite = val;
}

#dataTime: string = '';
public get dataTime() {
    return this.#dataTime;
}
public set dataTime(val: string) {
    this.#dataTime = val;
}


}