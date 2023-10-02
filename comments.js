// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const { randomBytes } = require('crypto');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Comment storage
const commentsByPostId = {}