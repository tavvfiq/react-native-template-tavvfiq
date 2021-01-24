module.exports = {
	presets: ["module:metro-react-native-babel-preset"],
	plugins: [
		[
			"module-resolver",
			{
				root: ["./src"],
				extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
				alias: {
					assets: "./src/assets",
					screens: "./src/screens",
					navigation: "./src/navigation",
					components: "./src/components",
					hoc: "./src/hoc",
					hooks: "./src/hooks",
					utils: "./src/utils",
					styles: "./src/styles",
					interface:"./src/interface"
				},
			},
		],
		"react-native-reanimated/plugin",
	],
};
