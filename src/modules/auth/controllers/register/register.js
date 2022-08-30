import catchAsyncError from "../../../../helpers/catchAsyncError.js";
import ErrorHandler from "../../../../helpers/errorHandler.js";
import models from "../../../../models/index.js";
import utility from "../../../../utils/utility.js";
import validators from "../../../../utils/validators.js";
import ResponseMessages from "../../../../contants/responseMessages.js";

/// REGISTER USER ///

const register = catchAsyncError(async (req, res, next) => {
  let { fname, lname, email, uname, password, confirmPassword } = req.body;

  if (!fname) {
    return next(new ErrorHandler(ResponseMessages.FIRST_NAME_REQUIRED, 400));
  }

  if (String(fname).length < 3) {
    return next(
      new ErrorHandler(ResponseMessages.INVALID_FIRST_NAME_LENGTH, 400)
    );
  }

  if (!lname) {
    return next(new ErrorHandler(ResponseMessages.LAST_NAME_REQUIRED, 400));
  }

  if (!email) {
    return next(new ErrorHandler(ResponseMessages.EMAIL_REQUIRED, 400));
  }

  if (email && !validators.validateEmail(email)) {
    return next(new ErrorHandler(ResponseMessages.INVALID_EMAIL, 400));
  }

  if (!uname) {
    return next(new ErrorHandler(ResponseMessages.USERAME_REQUIRED, 400));
  }

  if (String(uname).length < 3) {
    return next(
      new ErrorHandler(ResponseMessages.INVALID_USERNAME_LENGTH, 400)
    );
  }

  if (String(uname).length > 15) {
    return next(
      new ErrorHandler(ResponseMessages.INVALID_USERNAME_LENGTH, 400)
    );
  }

  if (uname && !validators.validateUsername(uname)) {
    return next(new ErrorHandler(ResponseMessages.INVALID_USERNAME, 400));
  }

  if (!password) {
    return next(new ErrorHandler(ResponseMessages.PASSWORD_REQUIRED, 400));
  }

  if (!confirmPassword) {
    return next(new ErrorHandler(ResponseMessages.CONFIRM_PASSWORD_REQUIRED, 400));
  }

  if (uname) {
    const isUsernameAvailable = await utility.checkUsernameAvailable(uname);

    if (!isUsernameAvailable) {
      return next(new ErrorHandler(ResponseMessages.USERAME_NOT_AVAILABLE, 400));
    }

    uname = uname.toLowerCase();
  }

  if (password !== confirmPassword) {
    return next(new ErrorHandler(ResponseMessages.PASSWORDS_DO_NOT_MATCH, 400));
  }

  let user = await models.User.findOne({ email });

  if (user) {
    return next(new ErrorHandler(ResponseMessages.ACCOUNT_ALREADY_EXISTS, 400));
  }

  user = await models.User.create({
    fname,
    lname,
    email,
    uname,
    password,
  });

  const htmlMessage = `<p>Hi ${user.fname},</p>
  <p>
    Thank you so much for creating an account with us. We're glad you're here!
  </p>
  <p>
    To learn more about our product and services, visit our website
    <a href="https://www.nixlab.co.in" target="_blank">here</a>.
  </p>
  <p>
    For any queries, feel free to contact us at
    <a href="mailto:nixlab.in@gmail.com" target="_blank">nixlab.in@gmail.com</a>.
  </p>
  <p>This is a auto-generated email. Please do not reply to this email.</p>
  <p>
    Regards, <br />
    NixLab Technologies Team
  </p>`;

  try {
    await utility.sendEmail({
      email: user.email,
      subject: `Welcome to NixLab Technologies`,
      htmlMessage: htmlMessage,
    });
  } catch (err) {
    console.log(err.message);
  }

  res.status(201).json({
    success: true,
    message: ResponseMessages.SIGNUP_SUCCESS,
  });
});

export default register;
