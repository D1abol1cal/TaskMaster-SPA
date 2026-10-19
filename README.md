# TaskMaster SPA

A simple full-stack task manager. Create tasks, mark them done, and watch the progress bar update live. Built with **Angular** on the frontend and **Spring Boot + PostgreSQL** on the backend.

![Angular](https://img.shields.io/badge/Angular-18-DD0031?logo=angular&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.4-6DB33F?logo=springboot&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-blue?logo=postgresql&logoColor=white)

## Features

- Create, edit and delete tasks with a name, description and due date
- Mark a task complete or incomplete with one click
- Live progress bar showing the percentage of tasks completed
- Tasks belong to projects on the backend (`Project` ⟷ `Task`), ready for a multi-project UI

## Tech stack

| Layer | Technologies |
|---|---|
| Frontend | Angular 18 (standalone components, signals, new control-flow syntax), RxJS |
| Backend | Spring Boot 3.4, Spring Data JPA, Lombok |
| Database | PostgreSQL |

## Repository structure

```
.
├── frontend/   # Angular 18 single-page app
└── backend/    # Spring Boot REST API
```

## Getting started

### Prerequisites
- Node.js 20+ and Angular CLI 18 (`npm i -g @angular/cli@18`)
- JDK 24
- PostgreSQL running locally

### 1. Create the database
```sql
CREATE DATABASE taskmaster;
```

### 2. Run the backend
```bash
cd backend
./mvnw spring-boot:run
```
By default it connects to `jdbc:postgresql://localhost:5432/taskmaster` with username/password `postgres`/`postgres`. Override any of these with the `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USERNAME` and `DB_PASSWORD` environment variables. The API runs on `http://localhost:8081`.

### 3. Run the frontend
```bash
cd frontend
npm install
npm start
```
Open `http://localhost:4200`.

## API overview

| Base path | Purpose |
|---|---|
| `/api/tasks` | Create, read, update, delete tasks |
| `/api/projects` | Create, read, update, delete projects and their tasks |

## Notes

This was originally scaffolded with two parallel sets of components (one with Angular's older `*.component.ts` naming, one with the newer bare `*.ts` naming introduced in Angular 18). The unused set has been removed; only the wired-up `*.component.ts` versions remain.
