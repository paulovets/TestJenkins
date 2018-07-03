node {
    try {
        stage('Build') {
            checkout scm
            sh 'npm install'
            sh 'grunt build'
        }
    } catch (e) {
        echo 'Build failed failed'
    } finally {
        def currentResult = currentBuild.result ?: 'SUCCESS'
        if (currentResult == 'SUCCESS') {
            echo 'Build successful'
        }
        archiveArtifacts 'dist/*'
    }
}