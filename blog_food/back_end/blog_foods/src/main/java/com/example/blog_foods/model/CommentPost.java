package com.example.blog_foods.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class CommentPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private LocalDate dateComment;
    @Column(columnDefinition = "LONGTEXT")
    private String content;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    User user;
    @ManyToOne
    @JoinColumn(name = "post_id", referencedColumnName = "id")
    Post post;
}
