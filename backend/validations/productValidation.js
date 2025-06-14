import {body} from 'express-validator'

export const productValidationRules = [
  body('name')
    .notEmpty().withMessage('Name is required'),

  body('price')
    .notEmpty().withMessage('Price is required')
    .isInt({ gt: 0 }).withMessage('Price must be a positive integer'),

  body('quantity')
    .notEmpty().withMessage('Quantity is required')
    .isInt({ gt: 0 }).withMessage('Quantity must be a positive integer'),
];