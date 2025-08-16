export default `
{
	"clog": {
		"scope": "javascript,typescript, typescriptreact",
		"prefix": "clog",
		"body": ["console.log('%c \${1}$CLIPBOARD:', 'color:#fff;background-color:#2a8712;', $CLIPBOARD, 'vscode://file/Users/username\${TM_FILEPATH/[\\~]//}:$TM_LINE_NUMBER'); //temp.console","$0"],
		"description": "console.log from clipboard"
	},
	"slog": {
		"scope": "javascript,typescript, typescriptreact",
		"prefix": "slog",
		"body": ["console.log('%c \${1}: ', 'color:#fff;background-color:#2a8712;', \${1}, 'vscode://file/Users/username\${TM_FILEPATH/[\\~]//}:$TM_LINE_NUMBER'); //temp.console","$0"],
		"description": "console.log message and variable at the same time"
	},
	"dlog": {
		"scope": "javascript,typescript, typescriptreact",
		"prefix": "dlog",
		"body": ["console.log('%c \${1}: ', 'color:#fff;background-color:#2a8712;', 'vscode://file/Users/username\${TM_FILEPATH/[\\~]//}:$TM_LINE_NUMBER'); //temp.console", "$0"],
		"description": "fancy default console.log"
	}
}
`;