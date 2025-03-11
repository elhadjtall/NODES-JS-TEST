pipeline {
    agent any

    stages {
        stage('Setup Node.js') {
            steps {
                script {
                    def nodeHome = tool name: "nodejs-20", type: "jenkins.plugins.nodejs.tools.NodeJSInstallation"
                    env.PATH = "${nodeHome}/bin:${env.PATH}"
                }
            }
        } // <-- Fermeture correcte du stage 'Setup Node.js'

        stage('Install dependencies') {
            steps {
                echo 'Installation des dépendances...'
                sh 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                echo 'Exécution des tests...'
                sh 'npm test'
            }
        }
    }

    post {
        always {
            echo 'Nettoyage post-build...'
            sh 'rm -rf node_modules'
        }
    }
}
