/*
  Warnings:

  - You are about to drop the `BestProduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `best_seller` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BestProduct" DROP CONSTRAINT "BestProduct_productId_fkey";

-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_productId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "best_seller" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "BestProduct";

-- DropTable
DROP TABLE "Cart";
