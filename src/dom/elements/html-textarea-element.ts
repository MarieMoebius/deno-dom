import { HTMLElement } from "../elements/html-element.ts";

export class HTMLTextAreaElement extends HTMLElement {
    #autocomplete: string = '';
    public get autocomplete() {
        return this.#autocomplete;
    }
    public set autocomplete(val: string) {
        this.#autocomplete = val;
    }

    #cols: number = 0;
    public get cols() {
        return this.#cols;
    }
    public set cols(val: number) {
        this.#cols = val;
    }

    #dirName: string = '';
    public get dirName() {
        return this.#dirName;
    }
    public set dirName(val: string) {
        this.#dirName = val;
    }

    #disabled: boolean = false;
    public get disabled() {
        return this.#disabled;
    }
    public set disabled(val: boolean) {
        this.#disabled = val;
    }

    #readOnly: boolean = false;
    public get readOnly() {
        return this.#readOnly;
    }
    public set readOnly(val: boolean) {
        this.#readOnly = val;
    }

    #rows: number = 0;
    public get rows() {
        return this.#rows;
    }
    public set rows(val: number) {
        this.#rows = val;
    }

    #type: string = '';
    public get type() {
        return this.#type;
    }

    #defaultValue: string = '';
    public get defaultValue() {
        return this.#defaultValue;
    }
    public set defaultValue(val: string) {
        this.#defaultValue = val;
    }
    
    #value: string = '';
    public get value() {
        return this.#value;
    }
    public set value(val: string) {
        this.#value = val;
    }

    #validationMessage: string = '';
    public get validationMessage() {
        return this.#validationMessage;
    }

    #selectionStart: number = 0;
    public get selectionStart() {
        return this.#selectionStart;
    }
    public set selectionStart(val: number) {
        this.#selectionStart = val;
    }

    #selectionEnd: number = 0;
    public get selectionEnd() {
        return this.#selectionEnd;
    }
    public set selectionEnd(val: number) {
        this.#selectionEnd = val;
    }

    #form?: HTMLFormElement = undefined
    public get form() {
        return this.#form;
    }

    #maxLength: number = 0;
    public get maxLenght() {
        return this.#maxLength;
    }
    public set maxLength(val: number) {
        this.#maxLength = val;
    }

    #minLength: number = 0;
    public get minLength() {
        return this.#minLength;
    }
    public set minLength(val: number) {
        this.#minLength = val;
    }

    #name: string = '';
    public get name() {
        return this.#name;
    }
    public set name(val: string) {
        this.#name = val;
    }

    #placeholder: string = '';
    public get placeholder() {
        return this.#placeholder;
    }
    public set placeholder(val: string) {
        this.#placeholder = val;
    }

    #required: boolean = false;
    public get required() {
        return this.#required;
    }
    public set required(val: boolean) {
        this.#required = val;
    }

    #wrap: string = '';
    public get wrap() {
        return this.#wrap;
    }
    public set wrap(val: string) {
        this.#wrap = val;
    }

    #textLength: number = 0;
    public get textLength() {
        return this.#textLength;
    }

    #willValidate: boolean = false;
    public get willValidate() {
        return this.#willValidate;
    }

    #validity: ValidityState = undefined
    public get validity() {
        return this.#validity;
    }

    #labels: NodeList = undefined
    public get labels() {
        return this.#labels;
    }
    
}