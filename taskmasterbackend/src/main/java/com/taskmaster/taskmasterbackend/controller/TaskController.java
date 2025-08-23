package com.taskmaster.taskmasterbackend.controller;

import com.taskmaster.taskmasterbackend.entity.Task;
import com.taskmaster.taskmasterbackend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        Optional<Task> task = taskService.getTaskById(id);
        if (task.isPresent()) {
            return ResponseEntity.ok(task.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        return ResponseEntity.ok(taskService.saveTask(task));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task taskDetails) {
        Optional<Task> existingTask = taskService.getTaskById(id);
        if (existingTask.isPresent()) {
            Task updatedTask = existingTask.get();
            updatedTask.setName(taskDetails.getName());
            updatedTask.setDescription(taskDetails.getDescription());
            updatedTask.setDueDate(taskDetails.getDueDate());
            updatedTask.setDueDate(taskDetails.getDueDate());
            return ResponseEntity.ok(taskService.saveTask(updatedTask));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        Optional<Task> existingTask = taskService.getTaskById(id);
        if (existingTask.isPresent()) {
            taskService.deleteTaskById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
