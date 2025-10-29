import sequelize from "../config/db.mjs";
import UserModel from "./User.model.mjs";
import CategoryModel from "./Category.model.mjs";
import ExpenseModel from "./Expense.model.mjs";
import BudgetModel from "./Budget.model.mjs";

// Initialize models
const User = UserModel(sequelize);
const Category = CategoryModel(sequelize);
const Expense = ExpenseModel(sequelize);
const Budget = BudgetModel(sequelize);

// Associations
User.hasMany(Category, { foreignKey: "user_id" });
Category.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Expense, { foreignKey: "user_id" });
Expense.belongsTo(User, { foreignKey: "user_id" });

Category.hasMany(Expense, { foreignKey: "category_id" });
Expense.belongsTo(Category, { foreignKey: "category_id" });

User.hasMany(Budget, { foreignKey: "user_id" });
Budget.belongsTo(User, { foreignKey: "user_id" });

export { sequelize, User, Category, Expense, Budget };
