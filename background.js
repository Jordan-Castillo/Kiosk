chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('Layout.html', {
		'outerBounds': {
			'width': 400,
			'height': 500,
		},
		'id': 'main',
		'showInShelf': true,
		'icon': 'icons/faviconit/favicon-16.png'
		
	});
});
