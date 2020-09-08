const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get("/:id", (req, res) => {
    axios.post(`https://opentdb.com/api.php?amount=10&category=${req.params.id}&difficulty=medium&type=multiple`)
        .then(trivia => res.json(trivia.data))
});

module.exports = router;
