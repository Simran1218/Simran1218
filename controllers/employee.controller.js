const Employee = require("../models/employee.model.js");

// Create and Save a new employee
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      // Create a employee
      const employee = new Employee({
        email: req.body.email,
        name: req.body.name,
      });
    
      // Save Customer in the database
      Employee.create(employee, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Employee."
          });
        else res.send(data);
      });
};

// Retrieve all employees from the database.
exports.findAll = (req, res) => {
    Employee.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving employee."
          });
        else res.send(data);
      });
};

// Find a single employee with a employeeId
exports.findOne = (req, res) => {
    Employee.findById(req.params.emp_id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Employee with id ${req.params.emp_id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Employee with id " + req.params.emp_id
            });
          }
        } else res.send(data);
      });
  
};

// Update a employee identified by the employeeId in the request
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      Employee.updateById(
        req.params.emp_id,
        new Employee(req.body),
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Employee with id ${req.params.emp_id}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating Employee with id " + req.params.emp_id
              });
            }
          } else res.send(data);
        }
      );
  
};

// Delete a employee with the specified employeeId in the request
exports.delete = (req, res) => {
    Employee.remove(req.params.emp_id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Employee with id ${req.params.emp_id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Employee with id " + req.params.emp_id
            });
          }
        } else res.send({ message: `employee was deleted successfully!` });
      });
};

// Delete all employees from the database.
exports.deleteAll = (req, res) => {
    Employee.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all employee."
          });
        else res.send({ message: `All Employee were deleted successfully!` });
      });
  
};




// index => routes => controller => method => model =>communicate db