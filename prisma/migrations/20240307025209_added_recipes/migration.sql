-- CreateTable
CREATE TABLE "Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "servings" INTEGER NOT NULL,
    CONSTRAINT "Recipe_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Instruction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "recipeID" INTEGER NOT NULL,
    "refID" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    CONSTRAINT "Instruction_recipeID_fkey" FOREIGN KEY ("recipeID") REFERENCES "Recipe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "recipeID" INTEGER NOT NULL,
    "refID" TEXT NOT NULL,
    "instructionRefID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    CONSTRAINT "Ingredient_recipeID_fkey" FOREIGN KEY ("recipeID") REFERENCES "Recipe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
