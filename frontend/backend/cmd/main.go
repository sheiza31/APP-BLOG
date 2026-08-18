package main

import (
	"github.com/sheiza31/rest-api/config"
	"github.com/sheiza31/rest-api/migrate"
	"github.com/sheiza31/rest-api/routers"
)

func main() {
	config.ConnectDatabase()
	migrate.AutoMigrateUsers(config.DB)
	migrate.AutoMigrateCategories(config.DB)
	migrate.AutoMigratePosts(config.DB)
	app := routers.SetupRouter()
	app.Listen(":8080")
}
