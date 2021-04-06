export default (sequelize, DataTypes) => {
  const Players = sequelize.define(
    "players",
    {
      player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      player_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      height_feet: {
        type: DataTypes.INTEGER
      },
      height_inch: {
        type: DataTypes.INTEGER
      },
      weight: {
        type: DataTypes.INTEGER
      },
      hometown_city: {
        type: DataTypes.STRING
      },
      hometown_state: {
        type: DataTypes.STRING
      },
      major: {
        type: DataTypes.STRING
      },
      high_school: {
        type: DataTypes.STRING
      },
      season: {
        type: DataTypes.INTEGER
      }, 
      games: {
        type: DataTypes.INTEGER
      },
      games_started: {
        type: DataTypes.INTEGER
      },
      minutes: {
        type: DataTypes.INTEGER
      },
      off_reb: {
        type: DataTypes.INTEGER
      },
      def_reb: {
        type: DataTypes.INTEGER
      },
      assists: {
        type: DataTypes.INTEGER
      },
      steals: {
        type: DataTypes.INTEGER
      },
      blocks: {
        type: DataTypes.INTEGER
      },
      turnovers: {
        type: DataTypes.INTEGER
      },
      points: {
        type: DataTypes.INTEGER
      },
      fg_made: {
        type: DataTypes.INTEGER
      },
      fg_attempted: {
        type: DataTypes.INTEGER
      },
      three_point_made: {
        type: DataTypes.INTEGER
      },
      ft_made: {
        type: DataTypes.INTEGER
      },
      ft_attempted: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Players;
};