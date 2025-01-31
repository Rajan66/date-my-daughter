const Application = require("../models/application");
const ValidEmail = require("../models/valid_email");

// NOTE: every controller requires email validation

// Creates an application
exports.createApplication = async (req, res) => {
  try {
    console.log(req.body)
    const application = await Application.create(req.body);

    // sends a 201 created http status code
    res.status(201).json({
      message: "Application created successfully",
      application: application,
    });
  } catch (err) {
    console.error("Error creating your application", err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

// returns one application
exports.getApplication = async (req, res) => {
  const id = req.params.id;
  try {
    const application = await Application.findByPk(id);

    // return 404 bad request if application doesn't exist
    if (!application) {
      const error = new Error(`No application found with ID: ${id}`);
      error.statusCode = 404;
      throw error; // throws an error, for the catch block to handle it
    }

    // returns the response and 200 OK code
    res.status(200).json({
      message: "Application retrieved successfully",
      application: application,
    });
  } catch (err) {
    console.error("Error fetching applications", err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

// returns all the applications in the database
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

// updates the application
exports.updateApplication = async (req, res) => {
  const id = req.params.id;
  try {
    // send the body to update and the where condition
    const application = await Application.update(req.body, {
      where: { id: id },
      returning: true, // returns boolean value, true if update is successfully, else false
    });

    // application contains either 0 or 1 i.e true or false
    if (application[0] !== 1) {
      const error = new Error(`No application found with ID: ${id}`);
      error.statusCode = 404;
      throw error;
    }

    // find the updated application if updation is succesfully
    const result = await Application.findByPk(req.params.id);

    res.status(200).json({
      message: "Application updated successfully",
      application: result,
    });
  } catch (err) {
    console.error("Error updating your application", err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

/// delete an application
exports.deleteApplication = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Application.destroy({ where: { id: id } });

    // result contains 0 or 1, i.e. true or false.
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

// --- middleware ---
exports.validateEmail = async (req, res, next) => {
  // user contains the valid_email
  // const email = req.body.user;
  const email = req.headers["user-email"];
  try {
    console.log(req.body)
    // check if the user exists in the valid_emails table
    const foundEmail = await ValidEmail.findOne({ where: { email: email } });
    
    // if it returns null, then throw a 401 unauthorized error
    if (foundEmail === null) {
      const error = new Error("You dont have the permissions");
      error.statusCode = 401;
      throw error;
    }
    // send the control to the next controller
    next();
  } catch (err) {
    console.error("Error authenticating the email", err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};
