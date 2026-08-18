package models

import (
	"gorm.io/gorm"
)

type Users struct {
	gorm.Model
	FullName string `json:"full_name"`
	Email    string `json:"email" gorm:"unique"`
	Password string `json:"password"`
	Role     string `json:"role" gorm:"default:user"`
}
