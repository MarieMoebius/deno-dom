import { HTMLElement } from "../elements/html-element.ts";

export class HTMLDetailsElement extends HTMLElement {
#name: string = '';
public get name() {
    return this.#name;
}
public set name(val: string) {
    this.#name = val;
}

#open: boolean = false;
public get open() {
    return this.#open;
}
public set open(val: boolean) {
    this.#open = val;
}


}