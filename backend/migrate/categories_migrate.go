package migrate

import (
	"github.com/sheiza31/rest-api/models"
	"gorm.io/gorm"
)

func AutoMigrateCategories(db *gorm.DB) {
	db.AutoMigrate(&models.Category{})
}
