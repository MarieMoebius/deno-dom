import type { HTMLElement } from "../elements/html-element.ts";
import { SVGElement } from "../elements/svg-element.ts";
import type { HTMLFormElement } from "../html-elements/html-form-element.ts";
import { MathMLElement } from "../elements/math-ml-element.ts";
import { HTMLTemplateElement } from "../html-elements/html-template-element.ts";
import { HTMLDivElement } from "../html-elements/html-div-element.ts";
import { HTMLImageElement } from "../html-elements/html-image-element.ts";
import { HTMLVideoElement } from "../html-elements/html-video-element.ts";
import { HTMLButtonElement } from "../html-elements/html-button-element.ts";
import { HTMLHeadingElement } from "../html-elements/html-heading-element.ts";
import { HTMLInputElement } from "../html-elements/html-input-element.ts";
import { HTMLDialogElement } from "../html-elements/html-dialog-element.ts";
import { HTMLOptionElement } from "../html-elements/html-option-element.ts";

export interface HTMLElementTagNameMap {
    "a": HTMLElement // HTMLAnchorElement;
    "abbr": HTMLElement;
    "address": HTMLElement;
    "area": HTMLElement // HTMLAreaElement;
    "article": HTMLElement;
    "aside": HTMLElement;
    "audio": HTMLElement // HTMLAudioElement;
    "b": HTMLElement;
    "base": HTMLElement // HTMLBaseElement;
    "bdi": HTMLElement;
    "bdo": HTMLElement;
    "blockquote": HTMLElement // HTMLQuoteElement;
    "body": HTMLElement // HTMLBodyElement;
    "br": HTMLElement // HTMLBRElement;
    "button": HTMLButtonElement;
    "canvas": HTMLElement // HTMLCanvasElement;
    "caption": HTMLElement // HTMLTableCaptionElement;
    "cite": HTMLElement;
    "code": HTMLElement;
    "col": HTMLElement // HTMLTableColElement;
    "colgroup": HTMLElement // HTMLTableColElement;
    "data": HTMLElement // HTMLDataElement;
    "datalist": HTMLElement // HTMLDataListElement;
    "dd": HTMLElement;
    "del": HTMLElement // HTMLModElement;
    "details": HTMLElement // HTMLDetailsElement;
    "dfn": HTMLElement;
    "dialog": HTMLDialogElement;
    "div": HTMLDivElement;
    "dl": HTMLElement // HTMLDListElement;
    "dt": HTMLElement;
    "em": HTMLElement;
    "embed": HTMLElement // HTMLEmbedElement;
    "fieldset": HTMLElement // HTMLFieldSetElement;
    "figcaption": HTMLElement;
    "figure": HTMLElement;
    "footer": HTMLElement;
    "form": HTMLFormElement;
    "h1": HTMLHeadingElement;
    "h2": HTMLHeadingElement;
    "h3": HTMLHeadingElement;
    "h4": HTMLHeadingElement;
    "h5": HTMLHeadingElement;
    "h6": HTMLHeadingElement;
    "head": HTMLElement // HTMLHeadElement;
    "header": HTMLElement;
    "hgroup": HTMLElement;
    "hr": HTMLElement // HTMLHRElement;
    "html": HTMLElement//HTMLHtmlElement;
    "i": HTMLElement;
    "iframe": HTMLElement // HTMLIFrameElement;
    "img": HTMLImageElement;
    "input": HTMLInputElement;
    "ins": HTMLElement // HTMLModElement;
    "kbd": HTMLElement;
    "label": HTMLElement // HTMLLabelElement;
    "legend": HTMLElement // HTMLLegendElement;
    "li": HTMLElement // HTMLLIElement;
    "link": HTMLElement // HTMLLinkElement;
    "main": HTMLElement;
    "map": HTMLElement // HTMLMapElement;
    "mark": HTMLElement;
    "menu": HTMLElement // HTMLMenuElement;
    "meta": HTMLElement // HTMLMetaElement;
    "meter": HTMLElement // HTMLMeterElement;
    "nav": HTMLElement;
    "noscript": HTMLElement;
    "object": HTMLElement // HTMLObjectElement;
    "ol": HTMLElement // HTMLOListElement;
    "optgroup": HTMLElement // HTMLOptGroupElement;
    "option": HTMLOptionElement
    "output": HTMLElement // HTMLOutputElement;
    "p": HTMLElement // HTMLParagraphElement;
    "picture": HTMLElement // HTMLPictureElement;
    "pre": HTMLElement // HTMLPreElement;
    "progress": HTMLElement // HTMLProgressElement;
    "q": HTMLElement // HTMLQuoteElement;
    "rp": HTMLElement;
    "rt": HTMLElement;
    "ruby": HTMLElement;
    "s": HTMLElement;
    "samp": HTMLElement;
    "script": HTMLElement // HTMLScriptElement;
    "search": HTMLElement;
    "section": HTMLElement;
    "select": HTMLElement // HTMLSelectElement;
    "slot": HTMLElement // HTMLSlotElement;
    "small": HTMLElement;
    "source": HTMLElement // HTMLSourceElement;
    "span": HTMLElement // HTMLSpanElement;
    "strong": HTMLElement;
    "style": HTMLElement // HTMLStyleElement;
    "sub": HTMLElement;
    "summary": HTMLElement;
    "sup": HTMLElement;
    "table": HTMLElement // HTMLTableElement;
    "tbody": HTMLElement // HTMLTableSectionElement;
    "td": HTMLElement // HTMLTableCellElement;
    "template": HTMLTemplateElement;
    "textarea": HTMLElement // HTMLTextAreaElement;
    "tfoot": HTMLElement // HTMLTableSectionElement;
    "th": HTMLElement // HTMLTableCellElement;
    "thead": HTMLElement // HTMLTableSectionElement;
    "time": HTMLElement // HTMLTimeElement;
    "title": HTMLElement // HTMLTitleElement;
    "tr": HTMLElement // HTMLTableRowElement;
    "track": HTMLElement // HTMLTrackElement;
    "u": HTMLElement;
    "ul": HTMLElement // HTMLUListElement;
    "var": HTMLElement;
    "video": HTMLVideoElement;
    "wbr": HTMLElement;
}

export interface SVGElementTagNameMap {
    "a": SVGElement // SVGAElement;
    "animate": SVGElement // SVGAnimateElement;
    "animateMotion": SVGElement // SVGAnimateMotionElement;
    "animateTransform": SVGElement // SVGAnimateTransformElement;
    "circle": SVGElement // SVGCircleElement;
    "clipPath": SVGElement // SVGClipPathElement;
    "defs": SVGElement // SVGDefsElement;
    "desc": SVGElement // SVGDescElement;
    "ellipse": SVGElement // SVGEllipseElement;
    "feBlend": SVGElement // SVGFEBlendElement;
    "feColorMatrix": SVGElement // SVGFEColorMatrixElement;
    "feComponentTransfer": SVGElement // SVGFEComponentTransferElement;
    "feComposite": SVGElement // SVGFECompositeElement;
    "feConvolveMatrix": SVGElement // SVGFEConvolveMatrixElement;
    "feDiffuseLighting": SVGElement // SVGFEDiffuseLightingElement;
    "feDisplacementMap": SVGElement // SVGFEDisplacementMapElement;
    "feDistantLight": SVGElement // SVGFEDistantLightElement;
    "feDropShadow": SVGElement // SVGFEDropShadowElement;
    "feFlood": SVGElement // SVGFEFloodElement;
    "feFuncA": SVGElement // SVGFEFuncAElement;
    "feFuncB": SVGElement // SVGFEFuncBElement;
    "feFuncG": SVGElement // SVGFEFuncGElement;
    "feFuncR": SVGElement // SVGFEFuncRElement;
    "feGaussianBlur": SVGElement // SVGFEGaussianBlurElement;
    "feImage": SVGElement // SVGFEImageElement;
    "feMerge": SVGElement // SVGFEMergeElement;
    "feMergeNode": SVGElement // SVGFEMergeNodeElement;
    "feMorphology": SVGElement // SVGFEMorphologyElement;
    "feOffset": SVGElement // SVGFEOffsetElement;
    "fePointLight": SVGElement // SVGFEPointLightElement;
    "feSpecularLighting": SVGElement // SVGFESpecularLightingElement;
    "feSpotLight": SVGElement // SVGFESpotLightElement;
    "feTile": SVGElement // SVGFETileElement;
    "feTurbulence": SVGElement // SVGFETurbulenceElement;
    "filter": SVGElement // SVGFilterElement;
    "foreignObject": SVGElement // SVGForeignObjectElement;
    "g": SVGElement // SVGGElement;
    "image": SVGElement // SVGImageElement;
    "line": SVGElement // SVGLineElement;
    "linearGradient": SVGElement // SVGLinearGradientElement;
    "marker": SVGElement // SVGMarkerElement;
    "mask": SVGElement // SVGMaskElement;
    "metadata": SVGElement // SVGMetadataElement;
    "mpath": SVGElement // SVGMPathElement;
    "path": SVGElement // SVGPathElement;
    "pattern": SVGElement // SVGPatternElement;
    "polygon": SVGElement // SVGPolygonElement;
    "polyline": SVGElement // SVGPolylineElement;
    "radialGradient": SVGElement // SVGRadialGradientElement;
    "rect": SVGElement // SVGRectElement;
    "script": SVGElement // SVGScriptElement;
    "set": SVGElement // SVGSetElement;
    "stop": SVGElement // SVGStopElement;
    "style": SVGElement // SVGStyleElement;
    "svg": SVGElement // SVGSVGElement;
    "switch": SVGElement // SVGSwitchElement;
    "symbol": SVGElement // SVGSymbolElement;
    "text": SVGElement // SVGTextElement;
    "textPath": SVGElement // SVGTextPathElement;
    "title": SVGElement // SVGTitleElement;
    "tspan": SVGElement // SVGTSpanElement;
    "use": SVGElement // SVGUseElement;
    "view": SVGElement // SVGViewElement;
}

export interface MathMLElementTagNameMap {
    "annotation": MathMLElement;
    // "annotation-xml": MathMLElement;
    // "maction": MathMLElement;
    // "math": MathMLElement;
    // "merror": MathMLElement;
    // "mfrac": MathMLElement;
    // "mi": MathMLElement;
    // "mmultiscripts": MathMLElement;
    // "mn": MathMLElement;
    // "mo": MathMLElement;
    // "mover": MathMLElement;
    // "mpadded": MathMLElement;
    // "mphantom": MathMLElement;
    // "mprescripts": MathMLElement;
    // "mroot": MathMLElement;
    // "mrow": MathMLElement;
    // "ms": MathMLElement;
    // "mspace": MathMLElement;
    // "msqrt": MathMLElement;
    // "mstyle": MathMLElement;
    // "msub": MathMLElement;
    // "msubsup": MathMLElement;
    // "msup": MathMLElement;
    // "mtable": MathMLElement;
    // "mtd": MathMLElement;
    // "mtext": MathMLElement;
    // "mtr": MathMLElement;
    // "munder": MathMLElement;
    // "munderover": MathMLElement;
    // "semantics": MathMLElement;
}

export type HTMLTag = keyof HTMLElementTagNameMap | Uppercase<keyof HTMLElementTagNameMap>
export type HTMLElementByTag<Tag extends HTMLTag> = HTMLElementTagNameMap[Lowercase<Tag>]

export type SVGTag = keyof SVGElementTagNameMap | Uppercase<keyof SVGElementTagNameMap>
export type SVGElementByTag<Tag extends SVGTag> = SVGElementTagNameMap[Lowercase<Tag>]

export type MathMLTag = keyof MathMLElementTagNameMap | Uppercase<keyof MathMLElementTagNameMap>
export type MathMLElementByTag<Tag extends MathMLTag> = MathMLElementTagNameMap[Lowercase<Tag>]
