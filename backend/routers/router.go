package routers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/sheiza31/rest-api/controllers"
	"github.com/sheiza31/rest-api/controllers/auth"
)

func SetupRouter() *fiber.App {
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000",
		AllowHeaders: "Origin, Content-Type, Accept, Authorization",
		AllowMethods: "GET, POST, PUT, DELETE, OPTIONS",
	}))

	api := app.Group("/api")

	v1 := api.Group("/v1/auth")
	v1.Post("/login", auth.Login)
	v1.Post("/register", auth.Register)
	v1.Post("/logout", func(c *fiber.Ctx) error { return c.JSON(fiber.Map{"message": "Logout endpoint"}) })

	cat_v1 := api.Group("/v1")
	cat_v1.Get("/categories", controllers.GetAllCategories)
	cat_v1.Post("/categories", controllers.CreateCategory)
	cat_v1.Get("/categories/:id", controllers.GetCategoryByID)
	cat_v1.Put("/categories/:id", controllers.UpdateCategory)
	cat_v1.Delete("/categories/:id", controllers.DeleteCategory)

	user_v1 := api.Group("/v1")
	user_v1.Get("/users", func(c *fiber.Ctx) error { return c.JSON(fiber.Map{"message": "Get users"}) })
	user_v1.Post("/users", func(c *fiber.Ctx) error { return c.JSON(fiber.Map{"message": "Create user"}) })
	user_v1.Get("/users/:id", func(c *fiber.Ctx) error { return c.JSON(fiber.Map{"message": "Get user by id"}) })
	user_v1.Put("/users/:id", func(c *fiber.Ctx) error { return c.JSON(fiber.Map{"message": "Update user"}) })
	user_v1.Delete("/users/:id", func(c *fiber.Ctx) error { return c.JSON(fiber.Map{"message": "Delete user"}) })

	post_v1 := api.Group("/v1")
	post_v1.Get("/posts", controllers.GetAllPosts)
	post_v1.Post("/posts", controllers.CreatePost)
	post_v1.Get("/posts/:id", controllers.GetPostByID)
	post_v1.Put("/posts/:id", controllers.UpdatePost)
	post_v1.Delete("/posts/:id", controllers.DeletePost)

	app.Post("/api/v1/upload", controllers.UploadFile)
	app.Static("/uploads", "./uploads")

	return app
}
