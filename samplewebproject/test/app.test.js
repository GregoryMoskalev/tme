const assert = require('assert');
const render = require('../../render');

it('has a text input', async () => {
	const dom = await render('index.html');

	const input = dom.window.document.querySelector('input');

	assert(input);
});
