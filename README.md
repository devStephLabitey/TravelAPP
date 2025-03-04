---------------FRONTEND

-----pour commencer et avoir toute la configuration
     npm install

-----pour demarrer 
     npm run dev

     apres l'inscription et la connexion vous aurez acces au dashboard
      1) vous pouvez creer une destination
      2) puis creer des logements
      NB: nous n'avons pas pu integrer toutes les autres fonctionnalites

-----------------BACKEND

       Avoir une base de données configurée (MySQL ou autre compatible avec Sequelize).
       Assurez-vous d'avoir Node.js et npm installés sur votre machine.


-----pour commencer et avoir toute la configuration
     npm install

-----Demarrer le serveur et creer automatiquement la base de donnee
     npm run dev
     
     Si la base de données travellap existe déjà mais sans tables, celles-ci seront créées automatiquement.

     Si la base de données travellap n'existe pas, elle sera créée automatiquement. Toutefois, pour créer les tables, vous devrez redémarrer le serveur une seconde fois.

------Vérification des données

     Rafraîchir phpMyAdmin pour voir les modifications et le rendu des tables.


     
------------------TEST

------Tester l'application pour vérifier son bon fonctionnement.

    Données de test

    Le dossier migration contient des données de test qui permettent de vérifier si elles sont bien insérées dans les tables.

     Pour appliquer les migrations et insérer les données de test, exécutez la commande suivante :

npx sequelize-cli db:migrate

    Des données tests seront automatiquement ajoutées aux tables.


--------Documentation des apis avec swagger

     documentation accessible sur:

  http://localhost:5000/api-docs
