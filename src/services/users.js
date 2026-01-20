const bcrypt = require('bcrypt');

// check data from the connection form (index.ejs)
const User = require('../models/user');

exports.checkUserConnection = async (req, res, next) => {
    try {
        // pick posted data in req.body
        const { email, password } = req.body;

        // check email in the db
        const emailCheck = await User.findOne({email : email});

        if (!emailCheck) {
            console.log(emailCheck);
            return res.render('index', { 
                title : 'Gestion du Port - Accueil',
                error: 'Email incorrect'
            });
        };
        
        // check password in the db
        const passwordCheck = await bcrypt.compare(password, emailCheck.password);

        if (!passwordCheck) {
            return res.render('index', { 
                title : 'Gestion du Port - Accueil',
                error: 'mot de passe incorrect' 
            });
        };

        req.email = emailCheck;
        next();
    } catch(e) {
        next(e);
    }
};