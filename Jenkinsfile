pipeline {
    agent any

    satges {
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