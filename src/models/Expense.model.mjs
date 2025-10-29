import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Expense = sequelize.define(
    "Expense",
    {
      expense_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
      },
      description: {
        type: DataTypes.TEXT,
      },
      date: {
        type: DataTypes.DATEONLY,
        comment: "when the expense occurred",
      },
    },
    {
      tableName: "expenses",
      timestamps: false,
    }
  );

  return Expense;
};
