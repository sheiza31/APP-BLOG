package migrate

import (
	"github.com/sheiza31/rest-api/models"
	"gorm.io/gorm"
)

func AutoMigratePosts(db *gorm.DB) {
	db.AutoMigrate(&models.Post{})
}
