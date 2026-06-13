# 🏨 Hotel Room Booking System – Production DevOps Implementation

![Docker](https://img.shields.io/badge/Docker-Containerized-blue?logo=docker)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestrated-blue?logo=kubernetes)
![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-red?logo=jenkins)
![Trivy](https://img.shields.io/badge/Trivy-Security-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![Kaniko](https://img.shields.io/badge/Kaniko-Image%20Build-orange)
![Status](https://img.shields.io/badge/Project-Completed-success)

---

# 📌 Project Overview

This repository demonstrates a complete Production-Style DevOps implementation of a Hotel Room Booking Application.

The original application was developed by **Samiur Rahman Mukul**.

Original Repository:

https://github.com/SamiurRahmanMukul/Hotel-Room-Booking-System

My contribution focuses on transforming the application into a cloud-native deployment using modern DevOps practices including Docker, Kubernetes, Jenkins, Kaniko, RBAC, Security Scanning, and CI/CD automation.

---

# 👨‍💻 Credits

## Original Application Developer

**Samiur Rahman Mukul**

Responsible for:

* Frontend Development
* Backend Development
* Business Logic
* Admin Panel
* Database Design

## DevOps Implementation

**Atul Tele**

Implemented:

* Docker Containerization
* Kubernetes Deployment
* Jenkins on Kubernetes
* RBAC Configuration
* Trivy Security Scanning
* NGINX Ingress Controller
* CI/CD Automation
* Kaniko Image Build Pipeline
* Docker Hub Integration
* Rolling Deployment Strategy
* Smoke Testing
* Production Deployment Practices

---

# 🏗️ Architecture

```text
Developer
    │
    ▼
 GitHub Repository
    │
    ▼
 Jenkins Pipeline
    │
    ├────────────► Trivy Security Scan
    │
    ├────────────► Kaniko Image Build
    │
    ├────────────► Docker Hub Push
    │
    ▼
 Kubernetes Cluster
    │
    ├────────► Frontend Deployment
    ├────────► Backend Deployment
    ├────────► Admin Deployment
    └────────► MongoDB Deployment
    │
    ▼
 NGINX Ingress
    │
    ├────────► hotel.local
    ├────────► admin.hotel.local
    └────────► api.hotel.local
```

---

# ⚙️ DevOps Workflow

```text
GitHub
   │
   ▼
 Jenkins
   │
   ├── Checkout Source Code
   │
   ├── Verify Tools
   │
   ├── Trivy Security Scan
   │
   ├── Create Kaniko Build Job
   │
   ├── Build Docker Image
   │
   ├── Push Image to Docker Hub
   │
   ├── Update Kubernetes Deployment
   │
   ├── Rolling Update
   │
   └── Smoke Test
            │
            ▼
      Production Cluster
```

---

# 🐳 Docker Implementation

Implemented:

* Multi-Stage Dockerfiles
* Docker Compose
* Container Networking
* Environment Variables
* Health Checks
* Persistent Storage
* Docker Hub Image Registry

---

# ☸️ Kubernetes Implementation

## Cluster Setup

* Kind Kubernetes Cluster
* 1 Control Plane Node
* 2 Worker Nodes

## Kubernetes Resources

* Namespace
* Deployments
* Services
* ConfigMaps
* Secrets
* Persistent Volume Claims
* MongoDB Storage
* RBAC
* Service Accounts
* NGINX Ingress

---

# 🚀 Production Features

## Resource Management

* CPU Requests
* Memory Requests
* CPU Limits
* Memory Limits

## Health Monitoring

* Liveness Probes
* Readiness Probes

## Deployment Strategy

* Rolling Updates
* Zero-Downtime Deployments
* Rollback Support

---

# 🔐 Security Implementation

## Trivy Security Scanning

Implemented vulnerability scanning for:

* Docker Images
* Application Dependencies
* OS Packages

## Kubernetes Security

* RBAC
* Service Accounts
* Secrets Management
* Registry Authentication

---

# 🤖 Jenkins CI/CD Pipeline

Jenkins is deployed inside Kubernetes and performs automated deployment.

### Pipeline Stages

✅ Checkout Source Code

✅ Verify Tools

✅ Trivy File System Scan

✅ Create Kaniko Build Job

✅ Build Docker Image

✅ Push Image to Docker Hub

✅ Update Kubernetes Deployment

✅ Rolling Restart

✅ Smoke Testing

---

# 📦 Technology Stack

| Layer            | Technology          |
| ---------------- | ------------------- |
| Frontend         | React               |
| Backend          | Node.js             |
| Database         | MongoDB             |
| Containerization | Docker              |
| Registry         | Docker Hub          |
| Orchestration    | Kubernetes          |
| CI/CD            | Jenkins             |
| Image Build      | Kaniko              |
| Security         | Trivy               |
| Ingress          | NGINX               |
| Networking       | Kubernetes Services |

---

# 🌐 Application URLs

Frontend

http://hotel.local

Admin Panel

http://admin.hotel.local

Backend API

http://api.hotel.local

---

# 📷 Project Screenshots

## Jenkins Pipeline

(Add Jenkins Screenshot Here)

## Frontend Application

(Add Frontend Screenshot Here)

## Admin Dashboard

(Add Admin Screenshot Here)

## Kubernetes Pods

(Add kubectl get pods Screenshot Here)

---

# 🎯 Learning Outcomes

This project helped me gain hands-on experience with:

* Docker Containerization
* Kubernetes Administration
* Jenkins CI/CD
* Kubernetes RBAC
* DevSecOps Practices
* Security Scanning
* Container Image Management
* NGINX Ingress
* Production Deployment Strategies
* Automated Rolling Updates

---

# 🚀 Future Enhancements

* Prometheus Monitoring
* Grafana Dashboards
* Helm Charts
* ArgoCD GitOps
* Terraform Infrastructure
* AWS EKS Deployment
* Automated Testing
* Slack Notifications

---

# ⚠️ Disclaimer

This repository is intended for educational and DevOps learning purposes.

Application development credit belongs entirely to:

**Samiur Rahman Mukul**

My contribution focuses on DevOps engineering, Kubernetes deployment, CI/CD automation, security scanning, infrastructure management, and production deployment practices.

---

# 👨‍💻 Author

**Atul Tele**

DevOps Engineer

GitHub:
https://github.com/AtulTele
