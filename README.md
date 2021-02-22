# Travail Pratique

**Ceci est le projet exemple** pour la réalisation du travail partique (TP) et le repository de référence pour les étudiants. Il sera développé au fur et à mesure des notions enseignées pendant le cours

## Informations pour les étudiants

**Le fork de ce repository devra contenir le projet du cours qui sera évalué à la fin du semestre. Pour la marche à suivre et les critère d'évaluations veuillez vour référer au document nommé STUDENTS.md**

La suite contient la documentation du projet exemple tel qu'il devrait l'être pour le votre.

---

## Description du projet

Ce projet est une application Web permettant à l'utilisateur de consulter les meilleures blagues de Chuck Norris.

### Réccupérer le projet

Le projet est disponible sur l'hébergement Git (gitedu.hesge.ch):

`git clone ssh://git@ssh.hesge.ch:10572/jeremy.gobet/app-et-archi-web-tp-2020.git`

### Structure

Le projet contiens deux dossiers:

- **frontend**: Contient le site public
- **backend**: Contient le serveur NodeJS

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

- Réccupération des blagues sur l'API [api.icndb.com]
- Réccupération des dernières blagues publiées
- Like/Unlike des blagues
- Réccupération des blagues les plus appréciées par la communautée
- Réccupération des blagues appréciées par un utilisateur

L'application ne dispose actuellement pas d'une persistance de données. Une fois le serveur stoppé, toutes les données sont perdues.

Une authentification sans mot de passe a été mise en place par l'identification de l'e-mail spécifiée par l'utilisateur.

### Contact

Auteur: Jeremy Gobet
Identifiant: @jeremy.gobet
Mail: jeremy.gobet@hesge.ch
