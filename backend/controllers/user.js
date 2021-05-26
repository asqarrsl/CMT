const User = require('../models/user');

module.exports.register = async (req,res)=>{
    try{
        const {email,username,password,name,role,mobile,bio} = req.body;
        if(role == 'editor'){
            const newUser = new User({name,email,username,role,bio,mobile});
        }else if(role == 'reviewer'){
            const {specialization} = req.body;
            const newUser = new User({name,email,username,role,bio,mobile,specialization});
        }else if(role == 'participant'){
            const {type,qualification,designation,affiliation} = req.body;
            const newUser = new User({name,email,username,role,bio,mobile,type,qualification,designation,affiliation});
        }
        const registeredUser = await User.register(newUser,password);
        
        req.login(registeredUser, err => {
            if (err) return next(err);
            res
            .status(202)
            .send({
                message:"Successfully Updated the events!",
                });
        })
    }catch(e){
        res
            .status(202)
            .send({
                message:"Successfully Updated the events!",
                });
    }   
    
}

module.exports.login = (req, res) => {
    req.flash('success', 'welcome back!');
    console.log(req.session);
    const redirectUrl = req.session.returnTo || '/campgrounds'
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.logout = (req,res)=>{
    req.logOut();
    res
      .status(202)
      .send({
          message:"Successfully Updated the events!",
        });
}