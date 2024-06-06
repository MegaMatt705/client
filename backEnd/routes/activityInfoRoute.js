const { Router } = require('express');

const router = Router();

const activityInfo = [

    {
        Title: "", // Activity
        Description: "",// Activity
    },

]

router.post('/allAct', (req, res) => {

    console.log(req.body);
    activityInfo.push(req.body);
    res.send(201);

})


router.post('/activityInfo', (req, res) => {
    const { Title, Description } = req.body;
    const aboutAct = { Title, Description };
    const { activity } = req.session;
    if (activity) {

        req.session.activity.items.push(aboutAct);

    } else {

        req.session.activity = {

            items: [aboutAct]

        };

    }

    res.send(201);

});

module.exports = router;