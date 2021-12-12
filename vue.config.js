module.exports = {

	devServer: {
		disableHostCheck: true,
	}, 

	runtimeCompiler: true,

	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'Skyle 보호 대상자용'
				return args
			})
	}
}
