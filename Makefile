install:
	npm link
brain-games:
	node src/bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .