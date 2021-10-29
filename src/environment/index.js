const dotenv = require('dotenv');

dotenv.config();

const APPLICATION = {
    omdbApiToken: process.env.OMDB_API_TOKEN,
};

module.exports = { APPLICATION };
