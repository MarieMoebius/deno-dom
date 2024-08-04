import { HTMLElement } from "../elements/html-element.ts";

export class HTMLListElement extends HTMLElement {
#compact: boolean = false;
public get compact() {
    return this.#compact;
}
public set compact(val: boolean) {
    this.#compact = val;
}

}
