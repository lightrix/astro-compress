var r = async (...[a, { Buffer: i, Input: p }]) => {
	const t = p.split(".").pop();
	if (!t) return;
	const e = typeof f[t] < "u" ? f[t] : typeof a[t] < "u" ? t : !1;
	if (
		e &&
		["avif", "gif", "heif", "jpeg", "png", "raw", "tiff", "webp"].includes(
			e
		) &&
		typeof a[e] < "u" &&
		a[e] !== !1
	)
		return (
			e in i &&
			(await i[e](
				a[e] !== !0
					? a[e]
					: (await import("../../Variable/Image/sharp.js")).default
			).toBuffer())
		);
};
const { default: f } = await import("../../Variable/Image/Mapsharp.js");
export { f as _Map, r as default };
