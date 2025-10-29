import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Budget = sequelize.define(
    "Budget",
    {
      budget_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      month: {
        type: DataTypes.INTEGER,
        comment: "1 = January, 2 = February ...12 = December",
      },
      year: {
        type: DataTypes.INTEGER,
      },
      limit_amount: {
        type: DataTypes.DECIMAL(10, 2),
        comment: "monthly budget limit",
      },
    },
    {
      tableName: "budgets",
      timestamps: false,
    }
  );

  return Budget;
};
