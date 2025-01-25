require("dotenv").config();
const ValidEmail = require("../models/valid_email");

exports.addEmail = async (req, res) => {
  const adminEmail = req.body.adminEmail;
  try {
    // wait for the check, if it returns true, proceed, else catch and display the error
    await checkAdmin(adminEmail);

    console.log(req.body.email)
    const email = await ValidEmail.create(req.body);
    console.log(email)

    res.status(201).json({
      message: "Email created successfully",
      validEmail: email,
    });
  } catch (err) {
    console.error("Error creating your email", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getEmail = async (req, res) => {
  const email = req.body.email;
  try {
    const validEmail = await Email.findOne({ where: { email: email } });

    if (!validEmail) {
      const error = new Error(`${email} not found`);
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: "Email retrieved successfully",
      email: validEmail,
    });
  } catch (err) {
    console.error("Error fetching applications", err);
    res.status(error.statusCode || 500).json({ message: err.message });
  }
};

exports.getAllEmail = async (req, res) => {
  try {
    const emails = await ValidEmail.findAll();
    res.status(200).json({
      message: "Emails retrieved successfully",
      emails: emails,
    });
  } catch (err) {
    console.error("Error fetching emails", err);
    res.status(500).json({ message: err.message });
  }
};

exports.updateEmail = async (req, res) => {
  const id = req.params.id;
  try {
    // validate the email here...
    const application = await Email.update(req.body, {
      where: { id: id },
      returning: true,
    });

    if (!(application === 1)) {
      throw new Error(`Email with id:${id} not found`);
    }

    const result = await Email.findByPk(application.id);

    res.status(200).json({
      message: "Email updated successfully",
      application: result,
    });
  } catch (err) {
    console.error("Error updating your application", err);
    res.status(500).json({ message: err.message });
  }
};

exports.deleteEmail = async (req, res) => {
  try {
    // validate the email here...
    await Email.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Email deleted successfully" });
  } catch (err) {
    console.error("Error updating your application", err);
    res.status(500).json({ message: err.message });
  }
};

// --- helper functions ---
const checkAdmin = async (email) => {
  if (email !== process.env.ADMIN_EMAIL) {
    const err = new Error("You don't have the permissions");
    err.statusCode = 401;
    throw err;
  }
  return true;
};
