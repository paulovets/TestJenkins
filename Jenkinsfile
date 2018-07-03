node {
    stage('Build') {
        dir('project') {
            checkout scm
        }
        sh 'cd ./project'
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