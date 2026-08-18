package requests

type CategoryCreateRequest struct {
	Name        string `form:"name" binding:"required" json:"name"`
	Slug        string `form:"slug" binding:"required" json:"slug"`
	Description string `form:"description" binding:"required" json:"description"`
}