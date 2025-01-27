require("dotenv").config();
const ValidEmail = require("../models/valid_email");

exports.addEmail = async (req, res) => {
  const user = req.body.user;
  try {
    // wait for the check, if it returns true, proceed, else catch and display the error
    await checkAdmin(user);

    console.log(req.body.email)
    const email = await ValidEmail.create(req.body);
    console.log(email)

    res.status(201).json({
      message: "Email created successfully",
      validEmail: email,
    });
  } catch (err) {
    console.error("Error creating your email", err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

exports.getEmail = async (req, res) => {
  const id = req.params.id;
  try {
    const validEmail = await ValidEmail.findOne({ where: { id: id } });

    if (!validEmail) {
      const error = new Error(`${id} not found`);
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: "Email retrieved successfully",
      email: validEmail,
    });
  } catch (err) {
    console.error("Error fetching email", err);
    res.status(err.statusCode || 500).json({ message: err.message });
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
    const email = await ValidEmail.update(req.body, {
      where: { id: id },
      returning: true,
    });

    if (email !== 1) {
      throw new Error(`Email with id:${id} not found`);
    }

    const result = await ValidEmail.findByPk(email.id);

    res.status(200).json({
      message: "Email updated successfully",
      application: result,
    });
  } catch (err) {
    console.error("Error updating your email", err);
    res.status(500).json({ message: err.message });
  }
};

exports.deleteEmail = async (req, res) => {
  try {
    await ValidEmail.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Email deleted successfully" });
  } catch (err) {
    console.error("Error updating your email", err);
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
