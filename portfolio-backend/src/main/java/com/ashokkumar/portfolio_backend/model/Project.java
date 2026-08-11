package com.ashokkumar.portfolio_backend.model; 
import jakarta.persistence.*; 
import lombok.Data; 
@Entity @Table(name = "projects") 
@Data public class Project { 
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long id; private String title; 
    @Column(length = 1000) private String description; 
    private String techStack; 
    private String githubLink; 
    private String liveLink; 
    private String imageUrl; 
}