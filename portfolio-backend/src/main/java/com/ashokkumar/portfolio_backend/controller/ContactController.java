package com.ashokkumar.portfolio_backend.controller; 
import com.ashokkumar.portfolio_backend.model.Message; 
import com.ashokkumar.portfolio_backend.repository.MessageRepository; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.*; 
import java.util.List; 
@RestController 
@RequestMapping("/api/contact") 
@CrossOrigin(origins = "*") public class ContactController { 
    @Autowired private MessageRepository messageRepository; 
    // POST - save a new contact message 
    @PostMapping public Message createMessage(@RequestBody Message message) { return messageRepository.save(message); } 
    // GET - view all messages (only you would use this, e.g. in Postman) 
    @GetMapping public List<Message> getAllMessages() { return messageRepository.findAll(); 
    } 
}