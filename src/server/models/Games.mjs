export default (sequelize, DataTypes) => {
  const Games = sequelize.define(
      "games",
      {
          

      },
      { freezeTableName: true, timestamps: false }
  )
  return Games
}