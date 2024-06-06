const { Router } = require('express');

const router = Router();

const foodInfo = [];

router.post('/addFood', (req, res) => {
    const { Title, Description } = req.body;
    const foodItem = { Title, Description };
    foodInfo.push(foodItem);
    res.status(201).send();
});

module.exports = router;