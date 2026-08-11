package com.ashokkumar.portfolio_backend.controller; 
import com.ashokkumar.portfolio_backend.model.Project; 
import com.ashokkumar.portfolio_backend.repository.ProjectRepository; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.*; 
import java.util.List; 
@RestController @RequestMapping("/api/projects") @CrossOrigin(origins = "*") 
public class ProjectController { 
    @Autowired private ProjectRepository projectRepository; 
    @GetMapping public List<Project> getAllProjects() { 
        return projectRepository.findAll(); 
    } 
    @GetMapping("/{id}")
     public Project getProjectById(@PathVariable Long id) { 
        return projectRepository.findById(id).orElse(null); 
    } 
    @PostMapping public Project createProject(@RequestBody Project project) { 
        return projectRepository.save(project); 
    } 
    @PutMapping("/{id}") public Project updateProject(@PathVariable Long id, @RequestBody Project updatedProject) { 
        updatedProject.setId(id); return projectRepository.save(updatedProject); 
    } 
    @DeleteMapping("/{id}") public String deleteProject(@PathVariable Long id) { 
        projectRepository.deleteById(id); 
        return "Project deleted successfully"; 
    } 
}