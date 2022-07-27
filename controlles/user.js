const user = require("../model/user");

exports.Adduser = async (req, res) => {
  try {
    const newUser = new user(req.body);
    await newUser.save();
    res.status(200).send({ msg: "user is added", newUser });
  } catch (error) {
    res.status(500).send("user was not added");
  }
};
exports.Getusers = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).send({ msg: "list of users", users });
  } catch (error) {
    res.status(500).send("couldn't get users");
  }
};
exports.Deleteuser = async (req, res) => {
  try {
    const deleted = await user.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "user deleted", deleted });
  } catch (error) {
    res.status(500).send("couldn't delete user");
  }
};
exports.Updateuser = async (req, res) => {
  try {
    const edited = await user.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).send({ msg: "user updated", edited });
  } catch (error) {
    res.status(500).send("couldn't delete user");
  }
};
