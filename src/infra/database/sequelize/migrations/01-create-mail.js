const MailStatusRoles = {
    Processing: 'PROCESSING',
    Sent: 'SENT',
    Error: 'ERROR',
  };
  
  module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Mail', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      mailFrom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mailTo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mailSubject: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mailText: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mailStatus: {
        type: Sequelize.ENUM(...Object.values(MailStatusRoles)),
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
    }),
    down: (queryInterface) => queryInterface.dropTable('Mail'),
  };
  