import { HTMLElement } from "../elements/html-element.ts";

export class HTMLHtmlElement extends HTMLElement {
    #version: string = '';
    public get version() {
        return this.#version;
    }
    public set version(val: string) {
        this.#version = val;
    }
}