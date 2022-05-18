module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('vehicles', [
      {
        id: 1,
        make: 'Renault',
        model: 'Clio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        make: 'Skoda',
        model: 'Octavia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        make: 'Alfa Romeo',
        model: 'Giulia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        make: 'Tesla',
        model: 'S',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
