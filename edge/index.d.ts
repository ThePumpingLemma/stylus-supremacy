export = StylusSupremacy

declare namespace StylusSupremacy {
	export function format(content: string, options: FormattingOptions): string
	export const schema: any
	export function createFormattingOptions(options: any): FormattingOptions
	export function createFormattingOptionsFromStylint(options: any): FormattingOptions
	export function checkIfFilePathIsIgnored(filePath: string, rootPath: string, options: any): FormattingOptions
	export function findParentNode(inputNode: any, condition: (node: any) => boolean): FormattingOptions
	export function findChildNodes(inputNode: any, condition: (node: any) => boolean): FormattingOptions

	// Do not modify as the following block is auto-generated
	// See "reviseTypeDefinition.js"
	export interface FormattingOptions {
		insertColons?: boolean
		insertSemicolons?: boolean
		insertBraces?: boolean
		insertNewLineAroundImports?: boolean | string
		insertNewLineAroundBlocks?: boolean | string
		insertNewLineAroundProperties?: boolean
		insertNewLineAroundOthers?: boolean | string
		insertNewLineBetweenSelectors?: boolean
		insertSpaceBeforeComment?: boolean
		insertSpaceAfterComment?: boolean
		insertSpaceAfterComma?: boolean
		insertSpaceInsideParenthesis?: boolean
		insertParenthesisAfterNegation?: boolean
		insertParenthesisAroundIfCondition?: boolean
		insertNewLineBeforeElse?: boolean
		insertLeadingZeroBeforeFraction?: boolean
		selectorSeparator?: string
		tabStopChar?: string
		newLineChar?: string
		quoteChar?: string
		sortProperties?: boolean | string | string[]
		alwaysUseImport?: boolean
		alwaysUseNot?: boolean
		alwaysUseAtBlock?: boolean
		alwaysUseExtends?: boolean
		alwaysUseNoneOverZero?: boolean
		alwaysUseZeroWithoutUnit?: boolean
		reduceMarginAndPaddingValues?: boolean
		ignoreFiles?: string[]
	}
}
