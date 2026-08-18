package config

import (
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)
var DB *gorm.DB
func ConnectDatabase() {
	dsn := "host=localhost user=postgres password=eja123 dbname=db_blog port=5432 sslmode=disable"

	var err error
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Gagal konek PostgreSQL:", err)
	}

	fmt.Println("PostgreSQL connected!")
}
