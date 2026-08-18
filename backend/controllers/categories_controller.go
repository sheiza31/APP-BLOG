package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/sheiza31/rest-api/config"
	"github.com/sheiza31/rest-api/models"
)

func GetAllCategories(c *fiber.Ctx) error {
	var categories []models.Category
	if err := config.DB.Preload("Posts").Order("created_at DESC").Find(&categories).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to fetch categories",
		})
	}

	type CategoryResponse struct {
		ID          uint   `json:"ID"`
		Name        string `json:"name"`
		Slug        string `json:"slug"`
		Description string `json:"description"`
		PostCount   int    `json:"post_count"`
	}

	var response []CategoryResponse
	for _, cat := range categories {
		response = append(response, CategoryResponse{
			ID:          cat.ID,
			Name:        cat.Name,
			Slug:        cat.Slug,
			Description: cat.Description,
			PostCount:   len(cat.Posts),
		})
	}

	return c.JSON(fiber.Map{
		"categories": response,
	})
}

func GetCategoryByID(c *fiber.Ctx) error {
	id := c.Params("id")
	var category models.Category
	if err := config.DB.First(&category, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Category not found",
		})
	}
	return c.JSON(fiber.Map{
		"category": category,
	})
}

func CreateCategory(c *fiber.Ctx) error {
	type CreateRequest struct {
		Name        string `json:"name"`
		Slug        string `json:"slug"`
		Description string `json:"description"`
	}

	var req CreateRequest
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Invalid request body",
		})
	}

	if req.Name == "" || req.Slug == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Name and slug are required",
		})
	}

	var existing models.Category
	if err := config.DB.Where("slug = ?", req.Slug).First(&existing).Error; err == nil {
		return c.Status(fiber.StatusConflict).JSON(fiber.Map{
			"message": "Slug already exists",
		})
	}

	category := models.Category{
		Name:        req.Name,
		Slug:        req.Slug,
		Description: req.Description,
	}

	if err := config.DB.Create(&category).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to create category",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message":  "Category created successfully",
		"category": category,
	})
}

func UpdateCategory(c *fiber.Ctx) error {
	id := c.Params("id")

	var category models.Category
	if err := config.DB.First(&category, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Category not found",
		})
	}

	type UpdateRequest struct {
		Name        string `json:"name"`
		Slug        string `json:"slug"`
		Description string `json:"description"`
	}

	var req UpdateRequest
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Invalid request body",
		})
	}

	if req.Name != "" {
		category.Name = req.Name
	}
	if req.Slug != "" {
		category.Slug = req.Slug
	}
	if req.Description != "" {
		category.Description = req.Description
	}

	if err := config.DB.Save(&category).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to update category",
		})
	}

	return c.JSON(fiber.Map{
		"message":  "Category updated successfully",
		"category": category,
	})
}

func DeleteCategory(c *fiber.Ctx) error {
	id := c.Params("id")

	var category models.Category
	if err := config.DB.First(&category, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Category not found",
		})
	}

	if err := config.DB.Delete(&category).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to delete category",
		})
	}

	return c.JSON(fiber.Map{
		"message": "Category deleted successfully",
	})
}
