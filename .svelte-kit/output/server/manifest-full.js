export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Coca-Cola_stock_history.csv","favicon.png"]),
	mimeTypes: {".csv":"text/csv",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.46b669af.js","app":"_app/immutable/entry/app.a825ff0e.js","imports":["_app/immutable/entry/start.46b669af.js","_app/immutable/chunks/index.867448f4.js","_app/immutable/chunks/singletons.6c895703.js","_app/immutable/entry/app.a825ff0e.js","_app/immutable/chunks/index.867448f4.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
