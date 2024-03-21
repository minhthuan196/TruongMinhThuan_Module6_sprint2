package com.example.blog_foods.model;

import jakarta.persistence.*;

@Entity
public class PostHasCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "post_id", referencedColumnName = "id")
    Post post;
    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    Category category;

    public PostHasCategory() {
    }

    public PostHasCategory(Integer id, Post post, Category category) {
        this.id = id;
        this.post = post;
        this.category = category;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
