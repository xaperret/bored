# Travail Pratique - Fabien Lometti et Xavier Perret
## Description du projet
### Le concept en une phrase
Un site qui permet de rechercher des activités lorsque l'on a du temps et subséquemment de les noter et commenter.

### Le service offert
Le site permet d'obtenir une activité à effectuer à l'aide de l'api bored. Il sera un recueil d'activités à faire lorsque l'on a du temps libre et dispose d'un certain nombre de fonctionnalités :
- Rechercher une activité à effectuer (à l'aide de l'API [bored](https://www.boredapi.com/))
  - aléatoire
  - par prix
  - par nombre de personne
  - par accessibilité
  - par type
Pour le moment indisponible :
- Noter l'activité choisie
- Commenter une activité
- Enregistrer le choix d'une activité choisie par l'utilisateur
- S'inscrire
- Se connecter
 
### Récupérer le projet

Le projet est disponible sur [gitlab](https://gitedu.hesge.ch/xavier.perret/app-et-archi-web-tp-2020/)

Pour cloner le projet localement avec la commande git suivante:

`git clone ssh://git@ssh.hesge.ch:10572/xavier.perret/app-et-archi-web-tp-2020.git`

### Structure

Le projet contient deux dossiers:

- **frontend**: Contient le site public
  - res
    - css
    - font
    - img
    - js
        - api => fonction relatif aux appels de l'api externes
        - script => fonction relatif à l'aspect frontend divers et varié
- **backend**: Contient le serveur Node

### Démarrer le serveur

La partie publique est servie par le serveur sur Node. Vous devez avoir Node installé sur votre machine pour démarrer cette application Web.

Accédez au dossier contenant le serveur Node

`cd backend/`

Installez les dépendances

`npm install`

Démarrez le serveur Node

`node server.js`

Vous pouvez ensuite visualiser le site en local sur un navigateur: **localhost:8080**

### Stopper le server

Pour stopper le serveur Node, utilisez la commande **CTRL + C**

### Architecture du projet

              +------------+
              |            |
              |            |
           +--+  Frontend  +--+
           |  |            |  |
           |  |            |  |
           |  +------------+  |
           |                  |
           |                  |
           |                  |
           |                  |
           v                  v
    +-------------+    +-------------+
    |     API     |    |     API     |
    +-------------+    +-------------+
    |  (pas dispo)|    |             |
    |   Backend   |    |    bored    |
    |   NODE.JS   |    |  API public |
    |             |    |             |
    +-------------+    +-------------+

- Frontend: Projet HTML5, CSS3, JS
- Backend: Exposition d'une API REST sur NODE.JS pour la gestion des notations

### Fonctionnalités

Voici la liste des fonctionnalités de l'Application Web:

- Rechercher une activité à effectuer (à l'aide de l'API [bored](https://www.boredapi.com/))
  - aléatoire
  - par prix
  - par nombre de personne
  - par accessibilité
  - par type
Pour le moment indisponible :
- Noter l'activité choisie
- Commenter une activité
- Enregistrer le choix d'une activité choisie par l'utilisateur
- S'inscrire
- Se connecter

### Interface REST API


## Contact

### Groupe
- Fabien Lometti
- Identifiant: @fabien.lometti
- Mail: fabien.lometti@etu.hesge.ch

- Xavier Perret
- Identifiant: @xavier.perret
- Mail: xavier.perret@etu.hesge.ch
