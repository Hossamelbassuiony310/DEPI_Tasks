pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh "docker build -t hossam136/task_ii:${env.BUILD_NUMBER} ."
                withCredentials([usernamePassword(credentialsId: 'DockerHub', passwordVariable: 'pass', usernameVariable: 'user')]) {
                    sh "docker login -u $user -p $pass"
                    sh "docker push hossam136/task_ii:${env.BUILD_NUMBER}"
                }
            }
        }
        stage('Deploy') {
            steps {
                sh "docker run -d -p 500${env.BUILD_NUMBER}:8080 hossam136/task_ii:${env.BUILD_NUMBER}"
            }
        }
    }
}
