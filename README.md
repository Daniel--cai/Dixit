# Dixit

## How to play
https://boardgamegeek.com/boardgame/39856/dixit

One player is the storyteller for the turn and looks at the images on the 6 cards in her hand. From one of these, they makes up a sentence and says it out loud (without showing the card to the other players).

Each other player selects the card in their hands which best matches the sentence and gives the selected card to the storyteller, without showing it to the others.

The storyteller shuffles her card with all the received cards. All pictures are shown face up and every player has to bet upon which picture was the storyteller's.

If nobody or everybody finds the correct card, the storyteller scores 0, and each of the other players scores 2. Otherwise the storyteller and whoever found the correct answer score 3. Players score 1 point for every vote for their own card.

The game ends when the deck is empty or if a player scores 30 points. In either case, the player with the most points wins the game.

## Tech
- Kubernetes: Nginx Ingress via NodePort
- Terraform: Google Cloud Platform
- .Net Core: SignalR, FaunaDB, GraphQL, MediatR
- React: Theme UI styled components, based off [Shopify's Polaris design system](https://polaris.shopify.com/) 
- JAMStack: Netlify for static site hosting
- CircleCI for docker image builds and deployments

## Running this locally
1. Generate auth token and create a secret using dockerhub credentials  
`
kubectl create secret generic regcred --from-file=.dockerconfigjson=<path/to/.docker config.json> --type=kubernetes.io/dockerconfigjson
`
2. Install Ingress-Nginx using your flavour of choice (this project uses Docker for Mac + NodePort). https://kubernetes.github.io/ingress-nginx/deploy/ 
3. Build docker containers in Client and Server 
4. `kubectl apply -f Kubernetes`
5. (If exposing ingress through NodePort) Get the NodePort allocated to the ingress service  
`kubectl -n ingress-nginx get svc`
