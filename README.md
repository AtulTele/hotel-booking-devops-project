# 🏨 Hotel Room Booking System – DevOps Implementation

![Docker](https://img.shields.io/badge/Docker-Containerized-blue?logo=docker)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestrated-blue?logo=kubernetes)
![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-red?logo=jenkins)
![Trivy](https://img.shields.io/badge/Trivy-Security-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![Status](https://img.shields.io/badge/Project-Completed-success)

---

# 📌 Project Overview

This repository demonstrates a complete **DevOps implementation** of the Hotel Room Booking System application.

The original application was developed by **Samiur Rahman Mukul**.

🔗 Original Repository:

https://github.com/SamiurRahmanMukul/Hotel-Room-Booking-System

My focus was not application development but transforming the project into a production-style DevOps deployment using Docker, Kubernetes, Jenkins, and modern DevOps practices.

---

# 👨‍💻 Credits

### Original Application Developer

**Samiur Rahman Mukul**

Application source code, business logic, frontend, backend, and admin panel belong to the original developer.

### DevOps Implementation

**Atul Tele**

Implemented:

* Docker
* Kubernetes
* Jenkins
* HPA
* Ingress
* Trivy
* RBAC
* CI/CD Pipeline
* Production Deployment Practices

---

# 🏗️ Architecture Diagram

```text
                    ┌───────────────┐
                    │     Users     │
                    └───────┬───────┘
                            │
                            ▼
                 ┌────────────────────┐
                 │   NGINX Ingress    │
                 └─────────┬──────────┘
                           │
       ┌───────────────────┼───────────────────┐
       ▼                   ▼                   ▼

┌────────────┐    ┌────────────┐    ┌────────────┐
│ Frontend   │    │ Admin App  │    │ Backend    │
│ Deployment │    │ Deployment │    │ Deployment │
└─────┬──────┘    └─────┬──────┘    └─────┬──────┘
      │                 │                 │
      └─────────────────┼─────────────────┘
                        │
                        ▼

              ┌─────────────────┐
              │    MongoDB      │
              │       PVC       │
              └─────────────────┘
```

---

# ⚙️ DevOps Workflow

```text
GitHub
   │
   ▼
 Jenkins
   │
   ├── Build
   │
   ├── Trivy Scan
   │
   ├── Docker Build
   │
   ├── Push to DockerHub
   │
   └── Kubernetes Deploy
            │
            ▼
      Hotel Cluster
```

---

# 🐳 Docker Implementation

### Completed

✅ Multi-stage Dockerfiles

✅ Docker Compose

✅ Environment Variables

✅ Health Checks

✅ Container Networking

✅ Persistent Storage

---

# ☸️ Kubernetes Implementation

### Cluster Setup

* Kind Cluster
* 1 Control Plane
* 2 Worker Nodes

### Workloads

✅ Namespace

✅ Deployments

✅ Services

✅ ConfigMaps

✅ Secrets

✅ Persistent Volume Claims

✅ MongoDB Storage

✅ Ingress NGINX

---

# 🚀 Production Features

### Resource Management

✅ CPU Requests

✅ Memory Requests

✅ CPU Limits

✅ Memory Limits

### Health Checks

✅ Liveness Probe

✅ Readiness Probe

### Deployment Strategy

✅ Rolling Updates

✅ Rollback Support

---

# 📈 Autoscaling

### Horizontal Pod Autoscaler (HPA)

```text
Min Replicas : 2
Max Replicas : 5
CPU Target   : 50%
```

Implemented using:

* Metrics Server
* Kubernetes HPA

---

# 🔐 Security

### Trivy Security Scanning

Implemented vulnerability scanning for:

* Docker Images
* OS Packages
* Application Dependencies

### Kubernetes Security

✅ Secrets

✅ RBAC

✅ Service Accounts

✅ Registry Authentication

---

# 🔄 Jenkins on Kubernetes

### Jenkins Features

✅ Persistent Storage

✅ Docker Support

✅ kubectl Support

✅ Git Support

✅ Trivy Support

### Installed Tools

```text
Java 17
Git
Docker CLI
kubectl
Trivy
```

---

# 📦 Technology Stack

| Layer            | Technology      |
| ---------------- | --------------- |
| Frontend         | React / Next.js |
| Backend          | Node.js         |
| Database         | MongoDB         |
| Containerization | Docker          |
| Orchestration    | Kubernetes      |
| CI/CD            | Jenkins         |
| Security         | Trivy           |
| Ingress          | NGINX           |
| Autoscaling      | HPA             |

---

# 🎯 Future Enhancements

* Prometheus Monitoring
* Grafana Dashboards
* ArgoCD GitOps
* Helm Charts
* AWS EKS Deployment
* Terraform Infrastructure

---

# 📚 Learning Objectives

This project was created to practice:

* Containerization
* Kubernetes Administration
* CI/CD Pipelines
* Security Scanning
* Production Deployment
* Infrastructure Automation

---

# ⚠️ Disclaimer

This repository is intended for educational and DevOps learning purposes.

Application development credit belongs entirely to:

**Samiur Rahman Mukul**

My contribution focuses on DevOps engineering, infrastructure automation, deployment, security, scalability, and CI/CD implementation.
