nvm:
	. ${NVM_DIR}/nvm.sh && nvm use && $(CMD)
install: ## Install dependencies
	make nvm CMD="npm install"
start: ## Serve a pre-build production site
	make nvm CMD="npm run start"
build: ## Serve a pre-build production site
	make nvm CMD="npm run build"
test: ## Serve a pre-build production site
	make nvm CMD="npm run test"
