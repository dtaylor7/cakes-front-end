prod:
	npm install
	npm install -g http-server
	npm run-script ng build --prod
	http-server ./dist/front-end -0 -p 4200

dev:
	npm install
	npm run-script ng serve