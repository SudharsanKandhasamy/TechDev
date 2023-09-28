pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'Master'
            }
        }

        stage('Build') { 
            steps {
                npm install
                npm run build
            }
        }
    }
}