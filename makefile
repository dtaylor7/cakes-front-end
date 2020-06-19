prod:
	npm install
	npm install http-server --no-save
	npm run-script ng build --prod
	npx http-server ./dist/front-end -0 -p 4200

dev:
	npm install
	npm run-script ng serve