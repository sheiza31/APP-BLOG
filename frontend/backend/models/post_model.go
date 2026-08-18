package models

import (
	"gorm.io/gorm"
)

type Post struct {
	gorm.Model
	Title       string   `json:"title"`
	Slug        string   `json:"slug"`
	Content     string   `json:"content"`
	Excerpt     string   `json:"excerpt"`
	CoverImage  string   `json:"cover_image"`
	Status      string   `json:"status"` // draft, published
	CategoryID  uint     `json:"category_id"`
	Category    Category `json:"category" gorm:"foreignKey:CategoryID"`
	Tags        string   `json:"tags"`
}
