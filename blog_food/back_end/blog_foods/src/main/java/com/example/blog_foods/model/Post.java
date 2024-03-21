package com.example.blog_foods.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
    @Column(columnDefinition = "VARCHAR(255)",nullable = false)
    private String title;
    private LocalDate createDay;
    @Column(columnDefinition = "LONGTEXT")
    private String introduce;
    @Column(columnDefinition = "LONGTEXT")
    private String introducePicture;
    @Column(columnDefinition = "LONGTEXT")
    private String ingredient;
    @Column(columnDefinition = "LONGTEXT")
    private String Making;
    @Column(columnDefinition = "boolean default false")
    private Boolean isDeleted = false;

    public Post() {
    }

    public Post(Integer id, User user, String title, LocalDate createDay, String introduce,
                String introducePicture, String ingredient, String making, Boolean isDeleted) {
        this.id = id;
        this.user = user;
        this.title = title;
        this.createDay = createDay;
        this.introduce = introduce;
        this.introducePicture = introducePicture;
        this.ingredient = ingredient;
        Making = making;
        this.isDeleted = isDeleted;
    }

    public Boolean getDeleted() {
        return isDeleted;
    }

    public void setDeleted(Boolean deleted) {
        isDeleted = deleted;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDate getCreateDay() {
        return createDay;
    }

    public void setCreateDay(LocalDate createDay) {
        this.createDay = createDay;
    }

    public String getIntroduce() {
        return introduce;
    }

    public void setIntroduce(String introduce) {
        this.introduce = introduce;
    }

    public String getIntroducePicture() {
        return introducePicture;
    }

    public void setIntroducePicture(String introducePicture) {
        this.introducePicture = introducePicture;
    }

    public String getIngredient() {
        return ingredient;
    }

    public void setIngredient(String ingredient) {
        this.ingredient = ingredient;
    }

    public String getMaking() {
        return Making;
    }

    public void setMaking(String making) {
        Making = making;
    }
}
