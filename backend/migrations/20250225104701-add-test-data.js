'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insertion dans la table users
    await queryInterface.bulkInsert('users', [{
      nom_user: 'John',
      prenom_user: 'Doe',
      email: 'johndoe@example.com',
      pass_word: 'password123', // Assurez-vous de hacher les mots de passe dans un vrai cas d'utilisation
      type_user: 'user',
      date_creation: new Date(),
    }], {});

    // Insertion dans la table comptes_utilisateurs
    await queryInterface.bulkInsert('comptes_utilisateurs', [{
      id_user: 1, // ID de l'utilisateur que vous venez de créer
      solde: 100.00,
      date_creation: new Date(),
    }], {});

    // Insertion dans la table destination
    await queryInterface.bulkInsert('destination', [{
      nom_destination: 'Paris',
      pays: 'France',
      description_destination: 'La capitale de la France, connue pour ses monuments et musées célèbres.',
    }, {
      nom_destination: 'New York',
      pays: 'USA',
      description_destination: 'Une grande ville moderne avec une culture dynamique et des attractions mondialement connues.',
    }], {});

    // Insertion dans la table logement
    await queryInterface.bulkInsert('logement', [{
      id_destination: 1, // ID de Paris
      nom_logement: 'Hôtel de Paris',
      type_logement: 'hotel',
      logement_dispo: 1,
      description: 'Un hôtel 5 étoiles au cœur de Paris avec vue sur la Tour Eiffel.',
      prix_logement: 200.00,
      img_logement: 'hotel_de_paris.jpg',
    }, {
      id_destination: 2, // ID de New York
      nom_logement: 'Central Park Hotel',
      type_logement: 'hotel',
      logement_dispo: 1,
      description: 'Un hôtel moderne à proximité de Central Park.',
      prix_logement: 180.00,
      img_logement: 'central_park_hotel.jpg',
    }], {});

    // Insertion dans la table moyens_paiement
    await queryInterface.bulkInsert('moyens_paiement', [{
      nom_moyen: 'Carte de Crédit',
    }, {
      nom_moyen: 'PayPal',
    }], {});

    // Insertion dans la table vehicule
    await queryInterface.bulkInsert('vehicule', [{
      id_destination: 1, // ID de Paris
      marque: 'Renault',
      modele: 'Clio',
      couleur: 'Noir',
      plaque_imm: 'ABC1234',
      img_vehicule: 'clio_paris.jpg',
      prix_vehicule: 50.00,
      vehicule_dispo: 1,
    }, {
      id_destination: 2, // ID de New York
      marque: 'Toyota',
      modele: 'Corolla',
      couleur: 'Blanc',
      plaque_imm: 'XYZ5678',
      img_vehicule: 'corolla_ny.jpg',
      prix_vehicule: 60.00,
      vehicule_dispo: 1,
    }], {});

    // Insertion dans la table reservations
    await queryInterface.bulkInsert('reservations', [{
      id_user: 1, // ID de John Doe
      id_logement: 1, // ID de Hôtel de Paris
      date_debut: '2025-03-01',
      date_fin: '2025-03-07',
      statut: 'confirmée',
      prix_total: 1400.00,
      date_reservation: new Date(),
    }, {
      id_user: 1, // ID de John Doe
      id_vehicule: 1, // ID de Renault Clio
      date_debut: '2025-03-01',
      date_fin: '2025-03-07',
      statut: 'confirmée',
      prix_total: 350.00,
      date_reservation: new Date(),
    }], {});

    // Insertion dans la table paiements
    await queryInterface.bulkInsert('paiements', [{
      id_reservation: 1, // ID de la première réservation
      id_transaction: 1, // ID d'une transaction fictive à créer
      montant: 1400.00,
      statut: 'effectué',
      date_paiement: new Date(),
    }, {
      id_reservation: 2, // ID de la deuxième réservation
      id_transaction: 2, // ID d'une transaction fictive à créer
      montant: 350.00,
      statut: 'effectué',
      date_paiement: new Date(),
    }], {});

    // Insertion dans la table transactions
    await queryInterface.bulkInsert('transactions', [{
      id_user: 1, // ID de John Doe
      type_transaction: 'paiement',
      montant: 1400.00,
      id_moyen_paiement: 1, // Carte de Crédit
      statut: 'effectuée',
      date_transaction: new Date(),
    }, {
      id_user: 1, // ID de John Doe
      type_transaction: 'paiement',
      montant: 350.00,
      id_moyen_paiement: 2, // PayPal
      statut: 'effectuée',
      date_transaction: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Suppression des données de paiements
    await queryInterface.bulkDelete('paiements', null, {});

    // Suppression des données de transactions
    await queryInterface.bulkDelete('transactions', null, {});

    // Suppression des données de réservations
    await queryInterface.bulkDelete('reservations', null, {});

    // Suppression des données de véhicules
    await queryInterface.bulkDelete('vehicule', null, {});

    // Suppression des données de moyens_paiement
    await queryInterface.bulkDelete('moyens_paiement', null, {});

    // Suppression des données de logements
    await queryInterface.bulkDelete('logement', null, {});

    // Suppression des données de destinations
    await queryInterface.bulkDelete('destination', null, {});

    // Suppression des données de comptes_utilisateurs
    await queryInterface.bulkDelete('comptes_utilisateurs', null, {});

    // Suppression des données d'utilisateurs
    await queryInterface.bulkDelete('users', null, {});
  }
};
