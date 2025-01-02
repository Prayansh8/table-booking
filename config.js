const dotenv = require("dotenv");

// Load environment variables from a .env file
dotenv.config();

module.exports = {
    baseurl: process.env.NEXT_PUBLIC_API_BASE_URL || "https://restaurant-booking-system-dsd6abhvf3f9f9gu.southeastasia-01.azurewebsites.net/",
};