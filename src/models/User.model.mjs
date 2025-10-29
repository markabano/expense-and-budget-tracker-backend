import { DataTypes } from "sequelize";

export default (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING(255),
        comment: "Hashed Password",
      },
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );

  return User;
};
