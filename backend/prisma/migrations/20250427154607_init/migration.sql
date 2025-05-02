-- AlterTable
ALTER TABLE `User` ADD COLUMN `exp` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `genre` ENUM('tous', 'pop', 'rock', 'classique', 'hip_hop', 'rap') NOT NULL DEFAULT 'tous',
    ADD COLUMN `niveau` INTEGER NOT NULL DEFAULT 1;
