Comment lancer le projet : 

Lancer le backend : 
-> ouvrir un terminal et se placer dans le dossier backend : cd mon-projet-fullstack/backend
-> installer les dependances seulement la premiere fois  : npm install
-> Lancer le serveur : node ace serve --watch

Lancer le Frontend : 
-> ouvrir un terminal et se placer dans le dossier backend : cd mon-projet-fullstack/frontend
-> installer les dependances seulement la premiere fois  : npm install
-> Lancer le serveur : ng serve -o


Backend (AdonisJS v6) : J'ai choisi AdonisJS pour le backend comme vous l'aviez recommandé. Je me suis basé sur la documentation v6 pour organiser le code. J'ai séparé la logique (la gestion de la liste des utilisateurs) dans un "Service" pour que le "Contrôleur" (qui gère les routes) reste simple et lisible.

Frontend (Angular 18+) :  J'ai créé des composants séparés (UserList, UserForm) pour que chaque partie ait son propre rôle. Pour le formulaire, j'ai utilisé les "Formulaires Réactifs" (Reactive Forms) pour gérer la saisie de l'utilisateur avant de l'envoyer au backend.

Stockage en mémoire : J'ai respecté la contrainte du test qui demandait de ne pas utiliser de base de données. Les utilisateurs sont stockés dans un simple tableau en mémoire dans le service du backend.

