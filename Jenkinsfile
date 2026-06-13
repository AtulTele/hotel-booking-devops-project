pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Code checkout successful'
            }
        }

        stage('Verify Tools') {
            steps {
                sh '''
                git --version
                kubectl version --client
                trivy --version
                '''
            }
        }

        stage('Kubernetes Access Test') {
            steps {
                sh '''
                kubectl get pods -n hotel-booking
                '''
            }
        }
    }
}
