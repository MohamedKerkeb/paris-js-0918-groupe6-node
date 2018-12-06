'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Trainees', [
      {
        lastname: 'Luca',
        firstname: 'Bianchi',
        email: 'luca.bianchi@gmail.com',
        pictures: 'http://www.affaritaliani.it/static/upl2018/luca/luca-bianchi10.jpg',
        phone: '0652407389',
        address: '11 rue poissy',
        town: 'Paris',
        postalCode: 75005,
        password: '1234',
        isClosed: false,
        isActived: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        lastname: 'Vincenzo',
        firstname: 'Verdi',
        email: 'vincenzo.verdi@gmail.com',
        pictures: 'http://www.affaritaliani.it/static/upl2018/luca/luca-bianchi10.jpg',
        phone: '0652407389',
        address: '11 rue de rome',
        town: 'Paris',
        postalCode: 75012,
        password: '1234',
        isClosed: false,
        isActived: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};