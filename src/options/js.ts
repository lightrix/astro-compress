import type { MinifyOptions } from "terser";

export default interface JS extends MinifyOptions {
	// rome-ignore lint:
	[key: string]: any;
}
