package migrate

import (
	"github.com/sheiza31/rest-api/models"
	"gorm.io/gorm"
)

func AutoMigrateUsers(db *gorm.DB)  {
	db.AutoMigrate(&models.Users{})
}