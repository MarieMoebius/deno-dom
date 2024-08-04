import { HTMLElement } from "../elements/html-element.ts";

export class HTMLEmbedElement extends HTMLElement {
#src: string = '';
public get src() {
    return this.#src;
}
public set src(val: string) {
    this.#src = val;
}

#type: string = '';
public get type() {
    return this.#type;
}
public set type(val: string) {
    this.#type = val;
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

#align: string = '';
public get align() {
    return this.#align;
}
public set align(val: string) {
    this.#align = val;
}
#name: string = '';
public get name() {
    return this.#name;
}
public set name(val: string) {
    this.#name = val;
}

}