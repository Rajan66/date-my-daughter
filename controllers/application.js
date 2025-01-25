const Application = require("../models/application");

exports.createApplication = async (req, res) => {
  try {
    // validate the email here...
    const application = await Application.create(req.body);
    res.status(201).json({
      message: "Application created successfully",
      application: application,
    });
  } catch (err) {
    console.error("Error creating your application", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getApplication = async (req, res) => {
  const id = req.params.id;
  try {
    const application = await Application.findByPk(id);

    if (!application) {
      const error = new Error(`No application found with ID: ${id}`);
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: "Application retrieved successfully",
      application: application,
    });
  } catch (err) {
    console.error("Error fetching applications", err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

exports.getAllApplication = async (req, res) => {
  try {
    const applications = await Application.findAll();
    res.status(200).json({
      message: "Applications retrieved successfully",
      applications: applications,
    });
  } catch (err) {
    console.error("Error fetching applications", err);
    res.status(500).json({ message: err.message });
  }
};

exports.updateApplication = async (req, res) => {
  const id = req.params.id;
  try {
    // validate the email here...
    const application = await Application.update(req.body, {
      where: { id: id },
      returning: true,
    });

    if (application !== 1) {
      const error = new Error(`No application found with ID: ${id}`);
      error.statusCode = 404;
      throw error;
    }

    const result = await Application.findByPk(application.id);

    res.status(200).json({
      message: "Application updated successfully",
      application: result,
    });
  } catch (err) {
    console.error("Error updating your application", err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

exports.deleteApplication = async (req, res) => {
  const id = req.params.id;
  try {
    // validate the email here...
    const result = await Application.destroy({ where: { id: id } });

    if (result !== 1) {
      const error = new Error(`No application found with ID: ${id}`);
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ message: "Application deleted successfully" });
  } catch (err) {
    console.error("Error updating your application", err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

// --- middlewares ---
exports.validateEmail = (req, res, email) => {};

