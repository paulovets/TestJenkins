node {
    stage('Build') {
        sh 'npm install'
        sh 'grunt build'
    }
    post {
        success {
            echo 'Build successful'
        }
        failure {
            echo 'Build failed failed'
        }
    }
}