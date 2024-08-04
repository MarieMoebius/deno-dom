import { HTMLElement } from "../elements/html-element.ts";

export class HTMLDataListElement extends HTMLElement {
    #accept: string = '';
    public get accept() {
        return this.#accept;
    }
    public set accept(val: string) {
        this.#accept = val;
    }
    
    #alt: string = '';
    public get alt() {
        return this.#alt;
    }
    public set alt(val: string) {
        this.#alt = val;
    }
    
    #autocomplete: string = '';
    public get autocomplete() {
        return this.#autocomplete;
    }
    public set autocomplete(val: string) {
        this.#autocomplete = val;
    }
    
    #defaultChecked: boolean = false;
    public get defaultChecked() {
        return this.#defaultChecked;
    }
    public set defaultChecked(val: boolean) {
        this.#defaultChecked = val;
    }
   
    #checked: boolean = false;
    public get checked() {
        return this.#checked;
    }
    public set checked(val: boolean) {
        this.#checked = val;
    }
    
    #dirName: string = '';
    public get dirName() {
        return this.#dirName;
    }
    public set dirNAme(val: string) {
        this.#dirName = val;
    }
    
    #disabled: boolean = false;
    public get disabled() {
        return this.#disabled;
    }
    public set disabled(val: boolean) {
        this.#disabled = val;
    }
    
    #formAction: string = '';
    public get formAction() {
        return this.#formAction;
    }
    public set formAction(val: string) {
        this.#formAction = val;
    }
    
    #formEnctype: string = '';
    public get formEnctype() {
        return this.#formEnctype;
    }
    public set formEnctype(val: string) {
        this.#formEnctype = val;
    }
   
    #formMethod: string = '';
    public get formMethod() {
        return this.#formMethod;
    }
    public set formMethod(val: string) {
        this.#formMethod = val;
    }
    #formNovalidate: boolean = false;
    public get formNovalidate() {
        return this.#formNovalidate;
    }
    public set formNovalidate(val: boolean) {
        this.#formNovalidate = val;
    }
    
    #formtarget: string = '';
    public get formtarget() {
        return this.#formtarget;
    }
    public set formtarget(val: string) {
        this.#formtarget = val;
    }
   
    #height: number = 0;
    public get height() {
        return this.#height;
    }
    public set height(val: number) {
        this.#height = val;
    }
    
    #indeterminate: boolean = false;
    public get indeterminate() {
        return this.#indeterminate;
    }
    public set indeterminate(val: boolean) {
        this.#indeterminate = val;
    }

    #max: string = '';
    public get max() {
        return this.#max;
    }
    public set max(val: string) {
        this.#max = val;
    }

    #maxLength: number = 0;
    public get maxLength() {
        return this.#maxLength;
    }
    public set maxLength(val: number) {
        this.#maxLength = val;
    }
    
    #min: string = '';
    public get min() {
        return this.#min;
    }
    public set min(val: string) {
        this.#min = val;
    }

    #minLength: number = 0;
    public get minLength() {
        return this.#minLength;
    }
    public set minLength(val: number) {
        this.#minLength = val;
    }

    #multiple: boolean = false;
    public get multiple() {
        return this.#multiple;
    }
    public set multiple(val: boolean) {
        this.#multiple = val;
    }

    #name: string = '';
    public get name() {
        return this.#name;
    }
    public set name(val: string) {
        this.#name = val;
    }
    
    #pattern: string = '';
    public get pattern() {
        return this.#pattern;
    }
    public set pattern(val: string) {
        this.#pattern = val;
    }

    #placeholder: string = '';
    public get placeholder() {
        return this.#placeholder;
    }

    #readOnly: boolean = false;
    public get readOnly() {
        return this.#readOnly;
    }
    public set readOnly(val: boolean) {
        this.#readOnly = val;
    }

    #required: boolean = false;
    public get required() {
        return this.#required;
    }
    public set required(val: boolean) {
        this.#required = val;
    }

    #size: number = 0;
    public get size() {
        return this.#size;
    }
    public set size(val: number) {
        this.#size = val;
    }

    #src: string = '';
    public get src() {
        return this.#src;
    }
    public set src(val: string) {
        this.#src = val;
    }

    #step: string = '';
    public get step() {
        return this.#step;
    }
    public set step(val: string) {
        this.#step = val;
    }
    
    #type: string = '';
    public get type() {
        return this.#type;
    }
    public set type(val: string) {
        this.#type = val;
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

    #willValidate: boolean = false;
    public get willValidate() {
        return this.#willValidate;
    }

    #validity: ValidityState = undefined;
    public get validity() {
        return this.#validity;
    }
    
    #validationMessage: string = '';
    public get validationMessage() {
        return this.#validationMessage;
    }

    #labels?: NodeList = undefined
    public get labels() {
        return this.#labels;
    }
    public set labels(val: NodeList | undefined) {
        this.#labels = val;
    }

    #selectionStart?: number = 0;
    public get selectionStart() {
        return this.#selectionStart;
    }

    public set selectionStart(val: number | undefined) {
        this.#selectionStart = val;
    }

    #selectionEnd?: number = 0;
    public get selectionEnd() {
        return this.#selectionEnd;
    }
    public set selectionEnd(val: number | undefined) {
        this.#selectionEnd = val;
    }

    #files?: FileList = undefined;
    public get files() {
        return this.#files;
    }
    public set files(val: FileList | undefined ) {
        this.#files = val;
    }

    #form?: HTMLFormElement = undefined;
    public get form() {
        return this.#form;
    }
    public set form(val: HTMLFormElement | undefined) {
        this.#form = val;
    }

    #selectionDirection?: string = '';
    public get selectionDirection() {
        return this.#selectionDirection;
    }
    public set selectionDirection(val: string| undefined ) {
        this.#selectionDirection = val;
    }
    
   
    

}

    
 
    
