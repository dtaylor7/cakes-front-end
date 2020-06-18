prod:
	npm install
	npm install -g http-server
	ng build --prod
	http-server ./dist/front-end -0 -p 4200

dev:
	npm install
	npm start