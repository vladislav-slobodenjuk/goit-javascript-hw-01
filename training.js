const Joi = require('joi');

const shortid = require('shortid');

// const passwordSchema = Joi.string().min(3).max(5).alphanum();
// console.log(passwordSchema.validate('sdfs'));

console.log(shortid.generate());

const express = require('express');
const app = express();
