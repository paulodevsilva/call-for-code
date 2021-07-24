include .env

.PHONY: up

up:
	 docker-compose up -d

.PHONY: down

down:
	 docker-compose down

.PHONY: logs

logs:
	 docker-compose logs -f

.PHONY: bash

bash:
	 docker exec -it mongo_call_for_code bash
