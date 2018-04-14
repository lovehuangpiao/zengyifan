/*
	requirejs的配置文件 
 */
require.config({
	// baseUrl:'lib',

	// 配置别名（虚拟路径）
	paths:{
		// 格式：别名:真实路径（基于baseUrl）
		jquery:'../lib/jquery-3.2.1',
		xzoom:'../lib/jquery-gdsZoom/jquery.gdsZoom',
	},

	// 配置依赖
	shim:{
		xzoom:['jquery']
	}
});
