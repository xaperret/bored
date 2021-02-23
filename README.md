# Travail Pratique

**Ceci est le projet exemple** pour la réalisation du travail pratique (TP) et le dépôt Git de référence pour les étudiants. Il sera complété au fur et à mesure des notions enseignées pendant le cours.

## Informations pour les étudiants

**Le fork de ce repository doit contenir votre projet pour les cours qui sera évalué sur la partie frontend pour le cours Applications Web et la partie backend pour le cours Architectures Web. Pour la marche à suivre veuillez vour référer au document nommé STUDENTS.md**

les critère d'évaluations sont explicités ici: https://gitedu.hesge.ch/jeremy.gobet/app-et-archi-web

La suite contient la documentation du projet exemple que vous devez adapter et compléter pour le votre.

---

## Description du projet

Ce projet est une application Web permettant à l'utilisateur de consulter les blagues de Chuck Norris, de voter pour ses blagues préférées et de consulter les blagues les plus appréciées par la communauté.

### Réccupérer le projet

Le projet est disponible sur l'hébergement Git (gitedu.hesge.ch).

Cloner le projet localement avec la commande git suivante:

`git clone ssh://git@ssh.hesge.ch:10572/jeremy.gobet/app-et-archi-web-tp-2020.git`

### Structure

Le projet contiens deux dossiers:

- **frontend**: Contient le site public
- **backend**: Contient le serveur Node

### Démarrer le serveur

La partie public est servie par le serveur sur Node. Vous devez avoir Node installé sur votre machine pour démarrer cette application Web.

Accédez au dossier contenant le serveur Node

`cd backend/`

Installez les dépendances

`npm install`

Lancer le serveur Node

`node server.js`

Vous pouvez ensuite visualisez le site en local sur un navigateur: **localhost:8080**

### Architecture du projet

(à définir)

### Fonctionnalités

Voici la liste des fonctionnalités de l'Application Web:

- Réccupération des blagues sur l'API [api.icndb.com] (non-implémenté)
- Réccupération des dernières blagues publiées (non-implémenté)
- Like/Unlike des blagues (non-implémenté)
- Réccupération des blagues les plus appréciées par la communautée (non-implémenté)
- Réccupération des blagues appréciées par un utilisateur (non-implémenté)

L'application ne dispose pas d'une persistance de données. Une fois le serveur stoppé, toutes les données sont perdues.

Une authentification sans mot de passe permet l'identification de l'utilisateur via l'utilisation de son adresse e-mail.

### Contact

#### Assistant

- Identifiant: @michael.minelli
- Mail: michael.minelli@hesge.ch

#### Applications Web

- Identifiant: @jeremy.gobet
- Mail: jeremy.gobet@hesge.ch

#### Architectures Web

- Identifiant: @stephane.malandai
- Mail: stephane.malandain@hesge.ch
