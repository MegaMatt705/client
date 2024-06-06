const { Router } = require('express');

const router = Router();

const historyInfo = [];

router.post('/addHistory', (req, res) => {
    const { Title, Description } = req.body;
    const historyItem = { Title, Description };
    historyInfo.push(historyItem);
    res.status(201).send();
});

module.exports = router;