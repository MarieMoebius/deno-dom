// Used instead of jsdom CSSStyleSheet in deno
export class CSSStyleSheet {

	static IS_COMPAT = true

	_cached_css?: string

	replace(css:string) {
		this._cached_css = css;
	}

	replaceSync(css:string) {
		this._cached_css = css;
	}

	cssRules:CSSStyleRule[] = []

}

export class CSSStyleRule {
	cssText = ""
}