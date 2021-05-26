const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth/authController');

/**
 * @swagger
 * tags:
 *   name: Authorization
 *   description: The authorization management API.
 */

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Returns an authorization token after a user successfully logs in
 *     tags: [Authorization]
 *     requestBody:
 *       description: User email and password for authorization.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email.
 *               password:
 *                 type: string
 *                 description: The user password.
 *     responses:
 *       '200':
 *         description: User authorization token was successfully retrieved.
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               description: The authorization token.
 *       '400':
 *         description: The user entered a wrong password.
 *       '404':
 *         description: The user with the given email was not found.
 */
router.post('/login', authController.login);

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Registers a new user in the system
 *     tags: [Authorization]
 *     requestBody:
 *       description: User registration data.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email.
 *               name:
 *                 type: string
 *                 description: The user name.
 *               nickname:
 *                 type: string
 *                 description: The user nickname.
 *               password:
 *                 type: string
 *                 description: The user password.
 *               password_confirmation:
 *                 type: string
 *                 description: The user confirmation password.
 *     responses:
 *       '200':
 *         description: The user was successfully registered.
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               description: Successful registration message.
 *       '400':
 *         description: The user with the same email / nickname already exists or the entered passwords did not match.
 */
router.post('/register', authController.register);

/**
 * @swagger
 * /api/v1/auth/logout:
 *   post:
 *     summary: Logs the user out
 *     tags: [Authorization]
 *     responses:
 *       '204':
 *         description: The user successfully logs out.
 */
router.post('/logout', authController.logout);

module.exports = router;