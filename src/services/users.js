const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// check data from the connection form (index.ejs)
const User = require('../models/user');

exports.checkUserConnection = async (req, res, next) => {
    try {
        // pick posted data in req.body
        const {email, password} = req.body;

        // check email in the db
        const userCheck = await User.findOne({email : email});

        if (!userCheck) {
            console.log(userCheck);
            return res.render('index', { 
                title : 'Gestion du Port - Accueil',
                error: 'Email ou mot de passe incorrect'
            });
        };
        
        // check password in the db
        const passwordCheck = await bcrypt.compare(password, userCheck.password);

        if (!passwordCheck) {
            return res.render('index', { 
                title : 'Gestion du Port - Accueil',
                error: 'Email ou mot de passe incorrect' 
            });
        };

        // create a cookie to stay connected (24h)
        const expiresIn = 24*60*60;
        const token = jwt.sign({
            email : userCheck.email,
            name : userCheck.name
        },
        process.env.SECRET_KEY,
        {
            expiresIn : expiresIn
        });

        res.cookie('token', token, {httpOnly : true, secure : false});

        req.user = userCheck;
        next();
    } catch(e) {
        next(e);
    }
};