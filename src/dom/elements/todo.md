# TODO Mimi

> [Hier findest du die Spec](https://html.spec.whatwg.org/), also die alles umfassende Spezifikation von HTML - der heilige Gral. Schau mal rein, nicht erschrecken - ist viel.

## Vorbereitung
* [VSC installieren](https://code.visualstudio.com/Download) (Das ist meine favorisierte Entwicklungsumgebung, also ein Text-Editor in fancy) 
* [GitHub Account erstellen](https://github.com/) und Bubu den Namen schicken
* [GitHub Desktop installieren](https://desktop.github.com/) und dort anmelden 

# Ablauf
> *Das gehen wir nochmal zusammen durch, keine Angst!*
>
1. Vorbereitung
   * Du suchst dir ein **HTMLXElement** aus der Spec aus (Wobei *X* hier für einen beliebigen Namen steht, wie *Div*, *Paragraph*, *Table*, ...)
   * Eine Inhaltsverzeichnis findest du [hier](https://html.spec.whatwg.org/#all-interfaces)
   * Ich suche mir für dieses Beispiel ein sehr einfaches Element aus: **"Div"** -> `HTMLDivElement` ([siehe hier](https://html.spec.whatwg.org/#HTMLDivElement-partial))
   * Du erstellst eine neue Datei mit entsprechendem Namen `html-x-element.ts` *(alles klein geschrieben)* im `deno-dom/src/dom/html-elements`-Ordner
   * Du kopierst folgenden Inhalt in die neue Datei:
       ```ts
       import { HTMLElement } from "../elements/html-element.ts";

       export class HTMLXElement extends HTMLElement {

       }
       ```
   * Du ersetzt den Namen bei `extends HTMLXElement` durch den oben genannten Namen (*in diesem Beispiel wird `HTMLXElement` durch `HTMLDivElement` ersetzt*):
       ```ts
       import { HTMLElement } from "../elements/html-element.ts";

       export class HTMLDivElement extends HTMLElement {

       }
       ```
2. Daten sammeln
   * Für jedes Element ist ein `Interface` und eventuell ein `PartialInterface` in der Spec definiert. Für mein Beispiel sieht das wie folgt aus ([siehe hier](https://html.spec.whatwg.org/#HTMLDivElement-partial)):
       ```ts
       interface HTMLDivElement : HTMLElement {
            [HTMLConstructor] constructor();
            // alo has obsolete members
       };
       ```

       ```ts
       partial interface HTMLDivElement {
           [CEReactions] attribute DOMString align;
       };
       ```
   * Aus diesen Interfaces können wir lesen über welche Attribute *(Properties)* und Methoden unser HTMLXElement verfügt
   * Wir möchten folgende Infos bekommen: **Name**, **Type**, **Value**
   * Dafür ziehen wir alle Definitionen (für beide Interfaces) zeilenweiße *(nur Zeilen in denen `attribute` vorkommt)* mit ihrem entsprechendem **OrgType** wie folgt raus *(Name = letztes Word, OrgType = vorletztes Wort)*. :
        ```ts
        [CEReactions] attribute DOMString align;
        ```
        * --> **Name**: `align`
        * --> **OrgType**: `DomString`
    * Leider können wir den **OrgType** (`hier DomString`) nicht in jedem Fall als **Type** direkt übernehmen. Sollte der OrgType des Attributes in der Spec *blau* unterlegt sein, ([Beispiel hier](https://html.spec.whatwg.org/#htmlprogresselement)), können wir diesen direkt übernehmen. Ansonsten gilt folgendes Mapping:
      * `DomString` -> `string`
      * `boolean` -> `boolean`
      * `USVString` -> `string`
      * `unsigned long` -> `number`
      * `long` -> `number`
      * `double` -> `number`
      * ... *(vermutlich noch unvollständig, gib mir Bescheid)*
    * In diesem Fall wird `DomString` zu `string` - wir haben also **Name** und **Type**.
    * Wir brauchen noch einen **Value**, dieser entsteht aus folgendem Mapping des **Type** (In unserem Beispiel wird der **Value** eben `''`):
      * `string` -> `''`
      * `number` -> `0`
      * `boolean` -> `false`
      * *sonst* -> `undefined /* TODO */`
    * Sollte die Attribute Zeile ein **readonly** Wort enhalten (siehe [hier](https://html.spec.whatwg.org/#htmlprogresselement)) merken wir uns das für den nächsten Schritt :D
    * Wenn wir **Name** (hier `align`), **Type** (hier `string`) und **Value** (hier `''`) und eventuell **readonly** (hier *nicht* ) herausgezogen haben, können wir die Implementierung in unserer zuvor erstellen Datei angehen
  
3. Implementierung
    * Wir erstellen für jedes Attribute eine Zeile in unserem HTMLXElement mit folgender Form: `#Name: Type = Value;`. 
        ```ts
        #align: string = '';
        // #Name: Type = Value;
        ```
    * Wenn der Type in der Definition mit einem Fragezeichen endet (`DOMString?` statt `DOMString`), sieht die Form so aus: `#Name?: Type = Value;`
         ```ts
        #align?: string = '';
        // #Name?: Type = Value;
        ```
    * Wir erstellen für jedes Attribute einen **Getter** mit folgender Form (anstelle von "align", wird das **Name** Attribute benutzt):
        ```ts
        public get align() {
            return this.#align;
        }
        ```
    * Wenn **readonly** gesetzt ist müssen wir den **Setter** nicht definieren und wir sind an dieser Stelle fertig und überspringen den nächsten Schritt. Im Fall unsers Beispiel-Attributes `align` ist kein readonly gesetzt.
    *  Wir erstellen für jedes Attribute einen **Setter** mit folgender Form (anstelle von "align", wird das **Name** Attribute benutzt und anstelle von "string" der entsprechende **Type**). In unserem Beispiel ist **readonly** nicht gesetzt, und wir müssen den Setter entsprechend erstellen:
        ```ts
        public set align(val: string) {
            this.#align = val;
        }
        ```
        > Wenn der Type in der Definition mit einem Fragezeichen endet wird beim Setter hinter *val* auch ein Fragezeichen eingefügt:
        >```ts
        >public set align(val?: string) {
        >    this.#align = val;
        >}
        >```   
    * Unsere Definition für das Beispiel sieht wie folgt aus:
    ```ts
    export class HTMLDivElement extends HTMLElement {
        #align: string = ''; // #Name: Type = Value;
        public get align() { // Getter
            return this.#align;
        }
        public set align(val: string) { // Setter (string)
            this.#align = val;
        }
    }
    ```
    * Da für **HTMLDivElement** nur das `align`-Attribute definiert ist, sind wir hier fertig und können mit 1. beginnen



# Beispiel
> Die Schritt-für-Schritt Anleitung sieht unfassbar kompliziert aus, aber hier ein Beispiel - so kompliziert ist das absolut nicht :)
1. Ich suche mir **HTMLLabelElement** aus (siehe [hier]([**](https://html.spec.whatwg.org/#htmllabelelement))) und erstelle die Datei `html-label-element.ts` mit diesem Inhalt:
    ```ts
    import { HTMLElement } from "../elements/html-element.ts";

    export class HTMLLabelElement extends HTMLElement {

    }
    ```
2. Ich gehe über alle Attribute (**form**, **htmlFor**, **control**) und befolge die Schritte von oben.
3. Meine Implementierung sieht danach also so aus:
    ```ts
    import { HTMLElement } from "../elements/html-element.ts";

    export class HTMLLabelElement extends HTMLElement {
        #form?: string = '';
        public get form() {
            return this.#form;
        }

        #htmlFor: string = '';
        public get htmlFor() {
            return this.#htmlFor;
        }
        public set htmlFor(val: string) {
            this.#htmlFor = val;
        }

        #control?: HTMLElement;
        public get control() {
            return this.#control;
        }
    }
    ```
    Vergleich mit der **Spec**:
    
    <img src="https://iili.io/JC6fOBt.png"/>


# Sonderfälle
* **const** - Bei [HTMLTrackElement](https://html.spec.whatwg.org/#the-track-element) werden in der Spec z.B. `const` definiert, die jedoch kein Attribute-Keyword haben. Das wird mit `public get ...`'s umgesetzt, siehe unten:
    ```ts
    import { HTMLElement } from "../elements/html-element.ts";

    export class HTMLTrackElement extends HTMLElement {
        #kind: string = '';
        public get kind() {
            return this.#kind;
        }
        public set kind(val: string) {
            this.#kind = val;
        }

        #src: string = '';
        public get src() {
            return this.#src;
        }
        public set src(val: string) {
            this.#src = val;
        }

        #srclang: string = '';
        public get srclang() {
            return this.#srclang;
        }
        public set srclang(val: string) {
            this.#srclang = val;
        }


        #label: string = '';
        public get label() {
            return this.#label;
        }
        public set label(val: string) {
            this.#label = val;
        }

        #default: boolean = false;
        public get default() {
            return this.#default;
        }
        public set default(val: boolean) {
            this.#default = val;
        }


        public get NONE() { return 0;  };
        public get LOADING() { return 1;  };
        public get LOADED() { return 2;  };
        public get ERROR() { return 3;  };

        #readyState: number;
        public get readyState() {
            return this.#readyState;
        }

        #track: TextTrack;
        public get track() {
            return this.#track;
        };
    }
    ```
    Vergleich mit der **Spec**:

    <img src="https://iili.io/JC6uDiv.md.png"/>