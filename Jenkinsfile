pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub...'
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

        stage('Trivy File Scan') {
            steps {
                sh '''
                trivy fs --severity HIGH,CRITICAL --exit-code 0 .
                '''
            }
        }

        stage('Kubernetes Access Test') {
            steps {
                sh '''
                kubectl get pods -n hotel-booking
                kubectl get svc -n hotel-booking
                kubectl get ingress -n hotel-booking
                '''
            }
        }

        stage('Rolling Restart Backend') {
            steps {
                sh '''
                kubectl rollout restart deployment backend -n hotel-booking
                kubectl rollout status deployment backend -n hotel-booking
                '''
            }
        }

        stage('Smoke Test') {
            steps {
                sh '''
                kubectl run smoke-test --rm -i --restart=Never \
                --image=curlimages/curl:latest \
                -n hotel-booking -- \
                curl -s http://backend:5000
                '''
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully!'
        }

        failure {
            echo 'CI/CD Pipeline failed. Check console output.'
        }
    }
}
