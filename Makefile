USER_ID := $(shell id -u)
GROUP_ID := $(shell id -g)
dc := USER_ID=$(USER_ID) GROUP_ID=$(GROUP_ID) docker-compose

.DEFAULT_GOAL := help

##
## ------------
DEFAULT: ## DEFAULT
-----: ## -----

help: ## Show help
	@grep -E '(^[a-zA-Z_/]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

.PHONY: help

##
## ------------
DOCKER: ## DOCKER

up: ## Start Stack
	$(dc) up -d

down: ## Down Stack
	$(dc) down

build: ## Build Stack
	$(dc) build

.PHONY: up down build

##
## ------------
ANGULAR: ## ANGULAR

app/bash: ## Launch Angular bash
	docker-compose exec app /bin/bash

app/start: ## Start Angular application
	docker-compose exec app npm run start

app/test: ## Launch tests
	docker-compose exec app npm run test

app/build: ## Build Angular application
	docker-compose exec app npm run build

app/lint: ## Launch linter
	docker-compose exec app npm run lint

.PHONY: app/bash app/start app/test app/build app/lint