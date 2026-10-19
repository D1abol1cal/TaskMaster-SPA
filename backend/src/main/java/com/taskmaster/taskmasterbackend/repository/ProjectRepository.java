package com.taskmaster.taskmasterbackend.repository;

import com.taskmaster.taskmasterbackend.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
