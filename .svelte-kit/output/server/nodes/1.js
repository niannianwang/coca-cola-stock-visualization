

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.25d1831a.js","_app/immutable/chunks/index.867448f4.js","_app/immutable/chunks/singletons.6c895703.js"];
export const stylesheets = [];
export const fonts = [];
