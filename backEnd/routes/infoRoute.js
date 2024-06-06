const { Router } = require('express');

const router = Router();

const infoItems = [];

router.post('/addInfo', (req, res) => {
    const { Title, Description } = req.body;
    const infoItem = { Title, Description };
    infoItems.push(infoItem);
    res.status(201).send();
});

module.exports = router;