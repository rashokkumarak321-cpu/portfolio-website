package com.ashokkumar.portfolio_backend.repository; 
import com.ashokkumar.portfolio_backend.model.Project; 
import org.springframework.data.jpa.repository.JpaRepository; 
public interface ProjectRepository extends JpaRepository<Project, Long> { }