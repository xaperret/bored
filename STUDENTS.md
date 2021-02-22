# Marche à suivre

Voici les démarches obligatoires à entreprendre :

1. Vous abonner aux notifications (watch) du repo original (celui-ci), pour ne pas manquer des éventuels changements dans l'énoncé ou des annonces.
2. "Forker" ce repository dans votre namespace, le passer en **privé**.
3. Ajouter **les droits de Maintainer** à l'autre membre de votre équipe.
4. Cloner le repository forké en local (la configuration local va automatiquement définir votre repository comme remote par défaut nommé `origin`)
5. Ajouter ce repository comme deuxième remote (différent de `origin`, nommé `base`)
`git remote add base ssh://git@ssh.hesge.ch:10572/jeremy.gobet/lecture-applications-web-tp.git`).
6. vérifiez que les deux repositories sont enregistré dans le configuration local:
`git remote -v`
7. Ajouter Michael Minelli (@michael.minelli), Stephane Malandain (@Stephane.malandain) et Jeremy Gobet (@jeremy.gobet) en tant que **Reporter** de votre repository.

**En cas de non-respect de ces consignes, des pénalités seront encourues !**

Pensez bien à effectuez des commits réguliers de votre projet.


## Si vous avez déjà un projet existant

Plutot que de clone le projet vous pouvez initialiser git en local et pousser votre projet sur le repository forké:

```
cd dossier_de_mon_projet
git init
git remote add origin ssh://git@ssh.hesge.ch:chemin-vers-votre-repository-forked.git
git add .
git commit -m "Premier commit"
git pull origin master
git push -u origin master
```
