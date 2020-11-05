# Install Minikube
https://github.com/kubernetes/minikube/releases/latest/download/minikube-installer.exe

# Install Kubectl
1. Download file: https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-windows
2. Create a Folder and add the PATH to the executable

# Build Docker Images
docker build -t username/client-example -f ./client/Dockerfile ./client

# Push Images to Dockerhub
docker push username/client-example
