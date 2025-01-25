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
    res.status(500).json({ error: err.message });
  }
};

exports.getApplication = async (req, res) => {
  const id = req.params.id;
  try {
    const application = await Application.findByPk(id);
    res.status(200).json({
      message: "Application retrieved successfully",
      application: application,
    });
  } catch (err) {
    console.error("Error fetching applications", err);
    res.status(500).json({ error: err.message });
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
    res.status(500).json({ error: err.message });
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

    if (!(application === 1)) {
      throw new Error(`Application with id:${id} not found`);
    }

    const result = await Application.findByPk(application.id);

    res.status(200).json({
      message: "Application updated successfully",
      application: result,
    });
  } catch (err) {
    console.error("Error updating your application", err);
    res.status(500).json({ error: err.message });
  }
};

exports.deleteApplication = async (req, res) => {
  try {
    // validate the email here...
    await Application.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Application deleted successfully" });
  } catch (err) {
    console.error("Error updating your application", err);
    res.status(500).json({ error: err.message });
  }
};
