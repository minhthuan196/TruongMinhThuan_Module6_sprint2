package com.example.blog_foods.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class User {
        @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(columnDefinition = "VARCHAR(100)",nullable = false)
    private String fullName;
    @OneToOne
    @JoinColumn(name = "account_id", referencedColumnName = "id")
    private Account account;
    @Column(columnDefinition = "VARCHAR(15)")
    private String phone;
    @Column(columnDefinition = "VARCHAR(50)")
    private String email;
    @Column(columnDefinition = "VARCHAR(100)")
    private String address;
    @Column(columnDefinition = "LONGTEXT")
    private String avatar;
    private LocalDate birthday;
    private Boolean gender;
    @OneToOne
    @JoinColumn(name = "user_type_id", referencedColumnName = "id")
    private UserType userType;
    @Column(columnDefinition = "boolean default false")
    private Boolean isDeleted = false;

    public User(Integer id, String fullName, Account account, String phone, String email, String address,
                String avatar, LocalDate birthday, Boolean gender, UserType userType, Boolean isDeleted) {
        this.id = id;
        this.fullName = fullName;
        this.account = account;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.avatar = avatar;
        this.birthday = birthday;
        this.gender = gender;
        this.userType = userType;
        this.isDeleted = isDeleted;
    }

    public User() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public LocalDate getBirthday() {
        return birthday;
    }

    public void setBirthday(LocalDate birthday) {
        this.birthday = birthday;
    }

    public Boolean getGender() {
        return gender;
    }

    public void setGender(Boolean gender) {
        this.gender = gender;
    }

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }

    public Boolean getDeleted() {
        return isDeleted;
    }

    public void setDeleted(Boolean deleted) {
        isDeleted = deleted;
    }
}
