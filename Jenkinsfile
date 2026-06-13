pipeline {
    agent any

    environment {
        BACKEND_IMAGE = "atultele/hotel-backend"
        IMAGE_TAG = "${BUILD_NUMBER}"
        KANIKO_JOB = "kaniko-backend-build-${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
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

        stage('Create Kaniko Build Job') {
            steps {
                sh '''
cat <<EOF | kubectl apply -n jenkins -f -
apiVersion: batch/v1
kind: Job
metadata:
  name: ${KANIKO_JOB}
spec:
  backoffLimit: 0
  template:
    spec:
      restartPolicy: Never
      containers:
        - name: kaniko
          image: gcr.io/kaniko-project/executor:debug
          args:
            - "--context=git://github.com/AtulTele/hotel-booking-devops-project.git#refs/heads/main"
            - "--context-sub-path=backend"
            - "--dockerfile=Dockerfile"
            - "--destination=${BACKEND_IMAGE}:${IMAGE_TAG}"
            - "--destination=${BACKEND_IMAGE}:latest"
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
EOF
                '''
            }
        }

        stage('Wait for Kaniko Build') {
            steps {
                sh '''
                kubectl wait --for=condition=complete job/${KANIKO_JOB} -n jenkins --timeout=600s
                kubectl logs job/${KANIKO_JOB} -n jenkins
                '''
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
        always {
            sh '''
            kubectl delete job ${KANIKO_JOB} -n jenkins --ignore-not-found=true
            '''
        }

        success {
            echo "Backend image built, pushed, and deployed successfully"
        }

        failure {
            echo "Backend CI/CD failed"
        }
    }
}
