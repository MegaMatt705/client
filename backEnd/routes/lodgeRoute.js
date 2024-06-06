const { Router } = require('express');

const router = Router();

const lodgingInfo = [];

router.post('/addLodging', (req, res) => {
    const { Title, Description } = req.body;
    const lodgingItem = { Title, Description };
    lodgingInfo.push(lodgingItem);
    res.status(201).send();
});

module.exports = router;