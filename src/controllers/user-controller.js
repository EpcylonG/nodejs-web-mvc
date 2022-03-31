const db = require("../models");

async function getUsers(req, res, next) {
  try {
    const users = await db.User.find({})
      .select({
        firstName: 1,
        lastName: 1,
        email:1
      })
      .lean()
      .exec();

    res.status(200).send({
      data: users,
    });
  } catch (error) {
    next(error);
  }
}

async function getUserDetails(req, res, next) {
  const { userId } = req.params;

  try {
    const user = await db.User.findOne({
      _id: userId,
    })
      .lean()
      .exec();

    res.status(200).send({
      data: user,
    });
  } catch (error) {
    next(error);
  }
}

async function createUser(req, res, next) {
  const { _id, firstName, lastName, email } = req.body;

  try {
    const user = await db.User.create({
      _id,
      firstName,
      lastName,
      email,
    });

    res.status(200).send({
      data: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  const { userId } = req.params;
  const { firstName, lastName, email } = req.body;

  try {
    const updatedUser = await db.User.findOneAndUpdate(
      {
        _id: userId,
      },
      {
        $set: {
          firstName: firstName,
          lastName: lastName,
          email:email,
        },
      },
      {
        new: true,
      },
    ).select({
      firstName: 1,
      lastName: 1,
      email:1,
    });

    res.status(200).send({
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  const { userId } = req.params;

  try {
    const result = await db.User.deleteOne({
      _id: userId,
    }).lean();

    if (result.deletedCount === 1) {
      res.status(200).send({
        data: "User removed",
      });
    } else {
      res.status(500).send({
        data: "User not removed",
      });
    }
  } catch (error) {
    next(error);
  }
}

async function signUp(req, res, next) {
    const { uid, email } = req.user;
  console.log(uid)
    try {
      const user = await db.User.findOne({ email: email });
  
      if (user) {
        return res.sendStatus(200);
      }
  
      const newUser = await db.User.create({
        _id: uid,
        email: email,
      });
  
      logger.debug(newUser);
  
      res.sendStatus(201);
    } catch (error) {
      next(error);
    }
  }

module.exports = {
  getUsers: getUsers,
  getUserDetails: getUserDetails,
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  signUp:signUp,
};
