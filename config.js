const dotenv = require("dotenv");

// Load environment variables from a .env file
dotenv.config();

module.exports = {
    baseurl: process.env.NEXT_PUBLIC_API_BASE_URL,
};