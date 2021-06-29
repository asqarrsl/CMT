const User = require("../models/user");

module.exports.index = async (req, res) => {
  const Users = await User.find({
    isActive: "1",
  });
  res.status(202).send({
    Users,
  });
};

module.exports.show = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(503).send({
      message: "No Data Available",
    });
  }
  res.status(200).send({
    user,
  });
};

module.exports.register = async (req, res) => {
  const {
    name,
    mobile,
    role,
    email,
    specialization,
    participant,
    designation,
    affiliation,
    isPaid,
    username,
    password,
  } = req.body;

  let newUser = new User({
    name,
    email,
    username,
    role,
    mobile,
    participants: {
      specialization: specialization,
      participant: participant,
      designation: designation,
      affiliation: affiliation,
    },
    isPaid: isPaid,
    reviewer: {
      specialization: specialization,
      participant: participant,
    },
  });

  const registeredUser = await User.register(newUser, password);
  res.status(202).send(registeredUser);
};

module.exports.update = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const users = await User.findByIdAndUpdate(id, { ...req.body });
  await users.save();
  res.status(202).send({
    message: "Successfully Updated the users!",
    users,
  });
};

module.exports.login = async (req, res) => {
  // req.flash('success', 'welcome back!');
  // console.log(req.session);
  // const redirectUrl = req.session.returnTo || '/campgrounds'
  // delete req.session.returnTo;
  // res.send("redirectUrl");
};

module.exports.logout = (req, res) => {
  req.logOut();
  res.status(202).send({
    message: "Successfully Updated the events!",
  });
};
