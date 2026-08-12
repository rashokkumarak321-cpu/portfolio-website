package com.ashokkumar.portfolio_backend.repository; 
import com.ashokkumar.portfolio_backend.model.Message; 
import org.springframework.data.jpa.repository.JpaRepository; 
public interface MessageRepository extends JpaRepository<Message, Long> { }