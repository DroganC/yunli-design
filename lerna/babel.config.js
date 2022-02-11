/*
 * @Author: Droganc
 * @Date: 2021-11-22 13:37:10
 * @LastEditTime: 2022-02-11 10:26:30
 * @LastEditors: Droganc
 * @Description: 
 * @FilePath: /lerna/yunli-design/babel.config.js
 */
module.exports = {
	babelHelpers: 'runtime',
	presets: [
		[
			'@babel/preset-env',
			{
				modules: false,
				targets: {
					browsers: ['>0.25%, not dead'],
				},
			},
		],
		'@babel/preset-typescript',
	],
	plugins: [
		'@babel/proposal-class-properties',
		'@babel/proposal-object-rest-spread',
	],
}
