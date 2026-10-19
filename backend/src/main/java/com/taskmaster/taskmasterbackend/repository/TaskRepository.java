package com.taskmaster.taskmasterbackend.repository;

import com.taskmaster.taskmasterbackend.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
