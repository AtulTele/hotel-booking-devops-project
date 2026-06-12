/**
 * @name Hotel Room Booking System
 * @author Md. Samiur Rahman (Mukul)
 * @description Hotel Room Booking and Management System Software ~ Developed By Md. Samiur Rahman (Mukul)
 * @copyright ©2023 ― Md. Samiur Rahman (Mukul). All rights reserved.
 * @version v0.0.1
 *
 */

const jwt = require('jsonwebtoken');
const { errorResponse } = require('../configs/app.response');
const User = require('../models/user.model');
const readSecret = require('../utils/readSecret');

// TODO: Middleware for detect authenticated logging user
exports.isAuthenticatedUser = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(403).json(errorResponse(
        3,
        'ACCESS FORBIDDEN',
        'Authorization headers is required'
      ));
    }

    const token = authorization.split(' ')[1];

    jwt.verify(
      token,
      readSecret('jwt_secret_key', 'JWT_SECRET_KEY'),
      async (err, dec) => {
        if (err) {
          return res.status(404).json(errorResponse(
            11,
            'JWT TOKEN INVALID',
            'JWT token is expired/invalid. Please logout and login again'
          ));
        }

        const user = await User.findById(dec.id);

        if (!user) {
          return res.status(404).json(errorResponse(
            4,
            'UNKNOWN ACCESS',
            'Authorization headers is missing/invalid'
          ));
        }

        if (user.status === 'login') {
          req.user = user;
          next();
        } else {
          return res.status(401).json(errorResponse(
            1,
            'FAILED',
            'Unauthorized access. Please login to continue'
          ));
        }
      }
    );
  } catch (error) {
    res.status(500).json(errorResponse(
      2,
      'SERVER SIDE ERROR',
      error
    ));
  }
};

// TODO: Middleware for login user JWT refresh-token validate
exports.isRefreshTokenValid = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(403).json(errorResponse(
        3,
        'ACCESS FORBIDDEN',
        'Authorization headers is required'
      ));
    }

    const token = authorization.split(' ')[1];

    jwt.verify(
      token,
      readSecret(
        'jwt_refresh_token_secret_key',
        'JWT_REFRESH_TOKEN_SECRET_KEY'
      ),
      async (err, dec) => {
        if (err) {
          return res.status(404).json(errorResponse(
            11,
            'JWT TOKEN INVALID',
            'JWT token is expired/invalid. Please logout and login again'
          ));
        }

        const user = await User.findById(dec.id);

        if (!user) {
          return res.status(404).json(errorResponse(
            4,
            'UNKNOWN ACCESS',
            'Authorization headers is missing/invalid'
          ));
        }

        if (user.status === 'login') {
          req.user = user;
          next();
        } else {
          return res.status(401).json(errorResponse(
            1,
            'FAILED',
            'Unauthorized access. Please login to continue'
          ));
        }
      }
    );
  } catch (error) {
    res.status(500).json(errorResponse(
      2,
      'SERVER SIDE ERROR',
      error
    ));
  }
};

// TODO: Middleware for check user is admin
exports.isAdmin = async (req, res, next) => {
  try {
    const { user } = req;

    if (!user) {
      return res.status(404).json(errorResponse(
        4,
        'UNKNOWN ACCESS',
        'Sorry, User does not exist'
      ));
    }

    if (user.role === 'admin') {
      next();
    } else {
      return res.status(406).json(errorResponse(
        6,
        'UNABLE TO ACCESS',
        'Accessing the page or resource you were trying to reach is forbidden'
      ));
    }
  } catch (error) {
    res.status(500).json(errorResponse(
      2,
      'SERVER SIDE ERROR',
      error
    ));
  }
};

// TODO: Middleware for check user is blocked
exports.isBlocked = async (req, res, next) => {
  try {
    const { user } = req;

    if (!user) {
      return res.status(404).json(errorResponse(
        4,
        'UNKNOWN ACCESS',
        'Sorry, User does not exist'
      ));
    }

    if (user.role !== 'blocked') {
      next();
    } else {
      return res.status(406).json(errorResponse(
        6,
        'UNABLE TO ACCESS',
        'Accessing the page or resource you were trying to reach is forbidden'
      ));
    }
  } catch (error) {
    res.status(500).json(errorResponse(
      2,
      'SERVER SIDE ERROR',
      error
    ));
  }
};
