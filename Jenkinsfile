pipeline {
    agent {
        kubernetes {
            yaml """
apiVersion: v1
kind: Pod
spec:
  serviceAccountName: jenkins-deployer
  containers:
    - name: kaniko
      image: gcr.io/kaniko-project/executor:debug
      command:
        - cat
      tty: true
      volumeMounts:
        - name: docker-config
          mountPath: /kaniko/.docker
  volumes:
    - name: docker-config
      secret:
        secretName: dockerhub-secret
        items:
          - key: .dockerconfigjson
            path: config.json
"""
        }
    }

    environment {
        BACKEND_IMAGE = "atultele/hotel-backend"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Trivy File Scan') {
            steps {
                sh 'trivy fs --severity HIGH,CRITICAL --exit-code 0 .'
            }
        }

        stage('Build and Push Backend Image') {
            steps {
                container('kaniko') {
                    sh '''
                    /kaniko/executor \
                      --context ${WORKSPACE}/backend \
                      --dockerfile ${WORKSPACE}/backend/Dockerfile \
                      --destination ${BACKEND_IMAGE}:${IMAGE_TAG} \
                      --destination ${BACKEND_IMAGE}:latest
                    '''
                }
            }
        }

        stage('Update Kubernetes Backend Image') {
            steps {
                sh '''
                kubectl set image deployment/backend backend=${BACKEND_IMAGE}:${IMAGE_TAG} -n hotel-booking
                kubectl rollout status deployment/backend -n hotel-booking
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
            echo "Backend CI/CD completed successfully"
        }
        failure {
            echo "Backend CI/CD failed"
        }
    }
}
