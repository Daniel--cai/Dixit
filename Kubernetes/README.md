kubectl create secret generic regcred \
 --from-file=.dockerconfigjson=<path/to/.docker/config.json> \
 --type=kubernetes.io/dockerconfigjson
