// import bcryptjs from "bcryptjs";
// import { errorHandler } from "../utils/error.js";
// import User from "../models/ueser.model.js";

// export const test = (req, res) => {
//   res.json({
//     message: "Api route is working!",
//   });
// };

// export const updateUser = async (req, res, next) => {
//   console.log(req.user);
//   if (req.user.id !== req.params.userId) {
//     return next(
//       errorHandler(403, "You are not allowed to update this account ")
//     );
//   }
//   if (req.body.password) {
//     if (req.body.password.length < 6) {
//       return next(errorHandler(400, "password must be least 6 chars "));
//     }
//     req.body.password = bcryptjs.hashSync(req.body.password, 10);
//   }

//   if (req.body.username) {
//     if (req.body.username.length < 7 || req.body.username.length > 20) {
//       return next(errorHandler(400, "username must be in 7 and 20 characters"));
//     }
//     if (req.body.username.includes(" ")) {
//       return next(errorHandler(400, "username contains spaces"));
//     }
//     if (req.body.username !== req.body.username.toLowerCase()) {
//       return next(errorHandler(400, "username must be lowecase"));
//     }
//     if (req.body.username.match(/^[a-zA-Z0-9]+$/)) {
//       return next(
//         errorHandler(400, "username can contain only letters and numbers")
//       );
//     }
//     try {
//       const updatedUser = await User.findByIdAndUpadate(
//         req.params.userId,
//         {
//           $set: {
//             username: req.body.username,
//             email: req.body.email,
//             profilePicture: req.body.profilePicture,
//             password: req.body.password,
//           },
//         },
//         { new: true }
//       );
//       const { password, ...rest } = updatedUser._doc;
//       res.status(200).json(rest);
//     } catch (error) {
//       next(error);
//     }
//   }
// };

import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import User from "../models/ueser.model.js";

export const test = (req, res) => {
  res.json({
    message: "Api route is working!",
  });
};

export const updateUser = async (req, res, next) => {
  console.log(req.user);
  if (!req.user || req.user.id !== req.params.userId) {
    return next(
      errorHandler(403, "You are not allowed to update this account ")
    );
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(errorHandler(400, "password must be least 6 chars "));
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }

  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.length > 20) {
      return next(errorHandler(400, "username must be in 7 and 20 characters"));
    }
    if (req.body.username.includes(" ")) {
      return next(errorHandler(400, "username contains spaces"));
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(errorHandler(400, "username must be lowecase"));
    }
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(400, "username can contain only letters and numbers")
      );
    }
  }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            profilePicture: req.body.profilePicture,
            password: req.body.password,
          },
        },
        { new: true }
      );
      const { password, ...rest } = updatedUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
};

//   try {
//     if (req.body.password) {
//       req.body.password = bcryptjs.hashSync(req.body.password, 10);
//     }

//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           username: req.body.username,
//           email: req.body.email,
//           password: req.body.password,
//           avatar: req.body.avatar,
//         },
//       },
//       { new: true }
//     );

//     const { password, ...rest } = updatedUser._doc;

//     res.status(200).json(rest);
//   } catch (error) {
//     next(error);
//   }
// };

// export const deleteUser = async (req, res, next) => {
//   if (req.user.id !== req.params.id)
//     return next(errorHandler(401, 'You can only delete your own account!'));
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.clearCookie('access_token');
//     res.status(200).json('User has been deleted!');
//   } catch (error) {
//     next(error);
//   }
// };

// export const getUserListings = async (req, res, next) => {
//   if (req.user.id === req.params.id) {
//     try {
//       const listings = await Listing.find({ userRef: req.params.id });
//       res.status(200).json(listings);
//     } catch (error) {
//       next(error);
//     }
//   } else {
//     return next(errorHandler(401, 'You can only view your own listings!'));
//   }
// };

// export const getUser = async (req, res, next) => {
//   try {

//     const user = await User.findById(req.params.id);

//     if (!user) return next(errorHandler(404, 'User not found!'));

//     const { password: pass, ...rest } = user._doc;

//     res.status(200).json(rest);
//   } catch (error) {
//     next(error);
//   }
// };
