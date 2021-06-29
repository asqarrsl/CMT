const User = require("../models/user");

module.exports.index = async (req, res) => {
  const Users = await User.find({ isActive: "1" });
  res.status(202).send({ Users });
};

module.exports.register = async (req, res) => {
  const { email, username, password, name, role, mobile, bio } = req.body;
  let newUser = "";
  console.log(req.body);
  if (role == "Editor") {
    newUser = new User({ name, email, username, role, bio, mobile });
  } else if (role == "Reviewer") {
    const { specialization } = req.body;
    newUser = new User({
      name,
      email,
      username,
      role,
      bio,
      mobile,
      specialization,
    });
  } else if (role == "Participants") {
    const { type, qualification, designation, affiliation } = req.body;
    newUser = new User({
      name,
      email,
      username,
      role,
      bio,
      mobile,
      type,
      qualification,
      designation,
      affiliation,
    });
  }
  const registeredUser = await User.register(newUser, password);
  // res.status(202).send(registeredUser);
  req.login(registeredUser, (err) => {
    if (err) return next(err);
    res.status(202).send({
      message: "Successfully Registerd and logged in",
    });
  });
};

module.exports.login = async (req, res) => {
  // req.flash('success', 'welcome back!');

  // console.log(req.session);
  // const redirectUrl = req.session.returnTo || '/campgrounds'
  // delete req.session.returnTo;
  // res.send("redirectUrl");

  res.status(202).send({
    message: "Successfully Logged In!",
    sessionID: req.sessionID,
    user: req.user,
  });
};

module.exports.logout = (req, res) => {
  req.logOut();
  res.status(202).send({
    message: "Successfully Updated the events!",
  });
};
