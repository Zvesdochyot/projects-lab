const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - email
 *         - nickname
 *         - password
 *         - createdAt
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the user.
 *         name:
 *           type: string
 *           description: The user name.
 *         account_id:
 *           type: string
 *           description: Unique account id.
 *         access_token:
 *           type: string
 *           description: The user access token.
 *         refresh_token:
 *           type: string
 *           description: The user refresh token.
 *         provider:
 *           type: string
 *           description: The social media registration provider (if used during registration).
 *         email:
 *           type: string
 *           description: The user's email address.
 *         nickname:
 *           type: string
 *           description: Unique user nickname.
 *         avatar:
 *           type: string
 *           description: The user avatar.
 *         password:
 *           type: string
 *           description: The user password in encrypted format.
 *         emailVerifiedAt:
 *           type: string
 *           format: date-time
 *           description: The date of confirmation of email by the user.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The user account creation date.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date of the last change of the account by the user.
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   responses:
 *     UnauthorizedError:
 *       description: Access token is missing or invalid.
 * tags:
 *   name: Users
 *   description: The user management API.
 */

/**
 * @swagger
 * /api/v1/users/:
 *   get:
 *     summary: Returns an array of all registered users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: An array of all registered users was successfully retrieved.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               description: An array of the users.
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       '401':
 *         $ref: '#/components/responses/UnauthorizedError'
 */
router.get('/', userController.getAllUsers);

/**
 * @swagger
 * /api/v1/users/me:
 *   get:
 *     summary: Returns information of the registered user about himself
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: The registered user information about himself was successfully retrieved.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '401':
 *         $ref: '#/components/responses/UnauthorizedError'
 */
router.get('/me', userController.getLoggedUser);

module.exports = router;