import { body } from "express-validator";

export const registerValidator = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Минимальная длина пароля 5 символов').isLength({ min: 5 }),
    body('fullName', 'Укажите имя').isLength({ min: 2 }),
    body('avatarUrl', 'Некорректная ссылка на аватарку').optional().isURL(),
]