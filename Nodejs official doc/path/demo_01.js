const path = require('path');

var obj = {
	basename:path.basename('/home/oracle/index.html','.html'),	//第二个参数存在时，删除返回值的后缀名
	delimiter:process.env.PATH.split(path.delimiter),	//The platform-specific path delimiter, ; or ':'.
	sep:'home\\oracle\\index.html'.split(path.sep),		//The platform-specific file separator. '\\' or '/'.Sometime "/" is not successful.
	dirname:path.dirname("/home/oracle/index.html"),		//Return the directory name of a path, similar to the Unix dirname command. path must be a string.
	extname:path.extname("/home/oracle/index.html"),
	format:path.format({
		dir: '/home/oracle',
		base: 'index.html'
	}),
	join:path.join("home","oracle","index.html"),
	parse:path.parse("/home/oracle/index.html"),
	win32: path.win32
}
console.log(obj)




/**
path.relative(from, to)
Solve the relative path from from to to. from and to must be strings.

At times we have two absolute paths, and we need to derive the relative path from one to the other. This is actually the reverse transform of path.resolve, which means we see that:
	path.resolve(from, path.relative(from, to)) == path.resolve(to)	
Examples:
	path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb')
	// returns '..\\..\\impl\\bbb'

	path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')
	// returns '../../impl/bbb'
	
	
path.resolve([from ...], to)
Resolves to to an absolute path. All arguments must be strings.

Examples:
	path.resolve('/foo/bar', './baz')
	// returns '/foo/bar/baz'

	path.resolve('/foo/bar', '/tmp/file/')
	// returns '/tmp/file'

	path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
	// if currently in /home/myself/node, it returns
	// '/home/myself/node/wwwroot/static_files/gif/image.gif'
*/