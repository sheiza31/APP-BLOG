package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/sheiza31/rest-api/config"
	"github.com/sheiza31/rest-api/models"
)

func GetAllPosts(c *fiber.Ctx) error {
	var posts []models.Post
	if err := config.DB.Preload("Category").Order("created_at DESC").Find(&posts).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to fetch posts",
		})
	}
	return c.JSON(fiber.Map{
		"posts": posts,
	})
}

func GetPostByID(c *fiber.Ctx) error {
	id := c.Params("id")
	var post models.Post
	if err := config.DB.Preload("Category").First(&post, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Post not found",
		})
	}
	return c.JSON(fiber.Map{
		"post": post,
	})
}

func CreatePost(c *fiber.Ctx) error {
	type CreateRequest struct {
		Title      string `json:"title"`
		Slug       string `json:"slug"`
		Content    string `json:"content"`
		Excerpt    string `json:"excerpt"`
		CoverImage string `json:"cover_image"`
		Status     string `json:"status"`
		CategoryID uint   `json:"category_id"`
		Tags       string `json:"tags"`
	}

	var req CreateRequest
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Invalid request body",
		})
	}

	if req.Title == "" || req.Slug == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Title and slug are required",
		})
	}

	var existing models.Post
	if err := config.DB.Where("slug = ?", req.Slug).First(&existing).Error; err == nil {
		return c.Status(fiber.StatusConflict).JSON(fiber.Map{
			"message": "Slug already exists",
		})
	}

	post := models.Post{
		Title:      req.Title,
		Slug:       req.Slug,
		Content:    req.Content,
		Excerpt:    req.Excerpt,
		CoverImage: req.CoverImage,
		Status:     req.Status,
		CategoryID: req.CategoryID,
		Tags:       req.Tags,
	}

	if err := config.DB.Create(&post).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to create post",
		})
	}

	config.DB.Preload("Category").First(&post, post.ID)

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "Post created successfully",
		"post":    post,
	})
}

func UpdatePost(c *fiber.Ctx) error {
	id := c.Params("id")

	var post models.Post
	if err := config.DB.First(&post, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Post not found",
		})
	}

	type UpdateRequest struct {
		Title      string `json:"title"`
		Slug       string `json:"slug"`
		Content    string `json:"content"`
		Excerpt    string `json:"excerpt"`
		CoverImage string `json:"cover_image"`
		Status     string `json:"status"`
		CategoryID uint   `json:"category_id"`
		Tags       string `json:"tags"`
	}

	var req UpdateRequest
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Invalid request body",
		})
	}

	if req.Title != "" {
		post.Title = req.Title
	}
	if req.Slug != "" {
		post.Slug = req.Slug
	}
	if req.Content != "" {
		post.Content = req.Content
	}
	if req.Excerpt != "" {
		post.Excerpt = req.Excerpt
	}
	if req.CoverImage != "" {
		post.CoverImage = req.CoverImage
	}
	if req.Status != "" {
		post.Status = req.Status
	}
	if req.CategoryID != 0 {
		post.CategoryID = req.CategoryID
	}
	if req.Tags != "" {
		post.Tags = req.Tags
	}

	if err := config.DB.Save(&post).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to update post",
		})
	}

	config.DB.Preload("Category").First(&post, post.ID)

	return c.JSON(fiber.Map{
		"message": "Post updated successfully",
		"post":    post,
	})
}

func DeletePost(c *fiber.Ctx) error {
	id := c.Params("id")

	var post models.Post
	if err := config.DB.First(&post, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Post not found",
		})
	}

	if err := config.DB.Delete(&post).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to delete post",
		})
	}

	return c.JSON(fiber.Map{
		"message": "Post deleted successfully",
	})
}
