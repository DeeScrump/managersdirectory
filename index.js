const db = require('./db');
const mysql = require('mysql2');
const { prompt } = require('inquirer');
// const { getEmployees, getRoles, createDepartment, createRole, createEmployee, updateEmployeeRole, updateEmployeeManager, removeDepartment, removeRole, removeEmployee } = require('./db');
require('console.table');

init();

function init () {
  console.log(`WELCOME TO THE MANAGER'S ORGANIZATION DATABASE!`);
  defaultQuestions();
}

function defaultQuestions() {
  console.log(`MANAGER'S ORGANIZATION DATABASE!`);

  prompt
  ([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices:
      [
        {
          name: "View All Departments",
          value: "VAD"
        },
        {
          name: "View All Employee Roles",
          value: "VAR"
        },   
        {
          name: "View All Employees",
          value: "VAE"
        },
        {
          name: "Add a Department",
          value: "AAD"
        },
        {
          name: "Add A Role",
          value: "AAR"
        },        
        {
          name: "Add an Employee",
          value: "AAE"
        },
        {
          name: "Update an Employee's Manager",
          value: "UEM"
        },
        {
          name: "Update an Employee's Role",
          value: "UER"
        },
        {
          name: "Delete a Department",
          value: "DAD"
        },        
        {
          name: "Delete a Role",
          value: "DAR"
        },        
        {
          name: "Delete an Employee",
          value: "DAE"
        },        
        {
          name: "Quit",
          value: "QUIT"
        }
      ]
    }
  ]).
  then(res => {
    let option = res.choice;

    switch (option) {
      case "VAD":
        viewDepartments();
        break;
      case "VAR":
        viewRoles();
        break;
      case "VAE":
        viewEmployees();
        break;
      case "AAD":
        addDepartment();
        break;
      case "AAR":
        addRole();
        break;
      case "AAE":
        addEmployee();
        break;
      case "UEM":
        updatesEmployeeManager();
        break;
      case "UER":
        updatesEmployeeRole;
        break;
      case "DAD":
        removesDepartment();
        break;
      case "DAR":
        removesRole();
        break;
      case "DAE":
        removesEmployee();
        break;
      default:
        quit();
    }
  }
  )
}

// View all departments
function viewDepartments() {
  db.getDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => defaultQuestions());
}

// Add a department
function addDepartment() {
  prompt([
    {
      name: "name",
      message: "What is the name of the department?"
    }
  ])
    .then(res => {
      let name = res;
      db.createDepartment(name)
        .then(() => console.log(`Added ${name.name} to the database`))
        .then(() => defaultQuestions())
    })
}

// Delete a department
function removesDepartment() {
  db.getDepartments()
    .then(([rows]) => {
      let departments = rows;
      const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id
      }));

      prompt({
        type: "list",
        name: "departmentId",
        message:
          "Which department would you like to remove?",
        choices: departmentChoices
      })
        .then(res => db.removeDepartment(res.departmentId))
        .then(() => console.log(`Removed department from the database`))
        .then(() => defaultQuestions())
    })
}

// View all roles
function viewRoles() {
  db.getRoles()
    .then(([rows]) => {
      let roles = rows;
      console.log("\n");
      console.table(roles);
    })
    .then(() => defaultQuestions());
}

// Add a role
function addRole() {
  db.getDepartments()
    .then(([rows]) => {
      let departments = rows;
      const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id
      }));

      prompt([
        {
          name: "title",
          message: "What is the name of the role?"
        },
        {
          name: "salary",
          message: "What is the salary of the role?"
        },
        {
          type: "list",
          name: "department_id",
          message: "Which department does the role belong to?",
          choices: departmentChoices
        }
      ])
        .then(role => {
          db.createRole(role)
            .then(() => console.log(`Added ${role.title} to the database`))
            .then(() => defaultQuestions())
        })
    })
}

// Delete a role
function removesRole() {
  db.getRoles()
    .then(([rows]) => {
      let roles = rows;
      const roleChoices = roles.map(({ id, title }) => ({
        name: title,
        value: id
      }));

      prompt([
        {
          type: "list",
          name: "roleId",
          message:
            "Which role do you want to remove?",
          choices: roleChoices
        }
      ])
        .then(res => db.removeRole(res.roleId))
        .then(() => console.log("Removed role from the database"))
        .then(() => defaultQuestions())
    })
}

// Update an employee's role
function updatesEmployeeRole() {
  db.getEmployees()
    .then(([rows]) => {
      let employees = rows;
      const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id
      }));

      prompt([
        {
          type: "list",
          name: "employeeId",
          message: "Which employee's role do you want to update?",
          choices: employeeChoices
        }
      ])
        .then(res => {
          let employeeId = res.employeeId;
          db.getRoles()
            .then(([rows]) => {
              let roles = rows;
              const roleChoices = roles.map(({ id, title }) => ({
                name: title,
                value: id
              }));

              prompt([
                {
                  type: "list",
                  name: "roleId",
                  message: "Which role do you want to assign the selected employee?",
                  choices: roleChoices
                }
              ])
                .then(res => db.updateEmployeeRole(employeeId, res.roleId))
                .then(() => console.log("Updated employee's role"))
                .then(() => defaultQuestions())
            });
        });
    })
}


// View all employees
function viewEmployees() {
  db.getEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.log("\n");
      console.table(employees);
    })
    .then(() => defaultQuestions());
}


// Add an employee
function addEmployee() {
  prompt([
    {
      name: "first_name",
      message: "What is the employee's first name?"
    },
    {
      name: "last_name",
      message: "What is the employee's last name?"
    }
  ])
    .then(res => {
      let firstName = res.first_name;
      let lastName = res.last_name;

      db.getRoles()
        .then(([rows]) => {
          let roles = rows;
          const roleChoices = roles.map(({ id, title }) => ({
            name: title,
            value: id
          }));

          prompt({
            type: "list",
            name: "roleId",
            message: "What is the employee's role?",
            choices: roleChoices
          })
            .then(res => {
              let roleId = res.roleId;

              db.getEmployees()
                .then(([rows]) => {
                  let employees = rows;
                  const managerChoices = employees.map(({ id, first_name, last_name }) => ({
                    name: `${first_name} ${last_name}`,
                    value: id
                  }));

                  managerChoices.unshift({ name: "None", value: null });

                  prompt({
                    type: "list",
                    name: "managerId",
                    message: "Who is the employee's manager?",
                    choices: managerChoices
                  })
                    .then(res => {
                      let employee = {
                        manager_id: res.managerId,
                        role_id: roleId,
                        first_name: firstName,
                        last_name: lastName
                      }

                      db.createEmployee(employee);
                    })
                    .then(() => console.log(
                      `Added ${firstName} ${lastName} to the database`
                    ))
                    .then(() => defaultQuestions())
                })
            })
        })
    })
}

// Delete an employee
function removesEmployee() {
  db.getEmployees()
    .then(([rows]) => {
      let employees = rows;
      const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id
      }));

      prompt([
        {
          type: "list",
          name: "employeeId",
          message: "Which employee do you want to remove?",
          choices: employeeChoices
        }
      ])
        .then(res => db.removeEmployee(res.employeeId))
        .then(() => console.log("Removed employee from the database"))
        .then(() => defaultQuestions())
    })
}

// Update an employee's manager
function updatesEmployeeManager() {
  db.getEmployees()
    .then(([rows]) => {
      let employees = rows;
      const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id
      }));

      prompt([
        {
          type: "list",
          name: "employeeId",
          message: "Which employee's manager do you want to update?",
          choices: employeeChoices
        }
      ])
        .then(res => {
          let employeeId = res.employeeId
          db.getManagers(employeeId)
            .then(([rows]) => {
              let managers = rows;
              const managerChoices = managers.map(({ id, first_name, last_name }) => ({
                name: `${first_name} ${last_name}`,
                value: id
              }));

              prompt([
                {
                  type: "list",
                  name: "managerId",
                  message:
                    "Which employee do you want to set as manager for the selected employee?",
                  choices: managerChoices
                }
              ])
                .then(res => db.updateEmployeeManager(employeeId, res.managerId))
                .then(() => console.log("Updated employee's manager"))
                .then(() => defaultQuestions())
            })
        })
    })
}

// Exit the application
function quit() {
  console.log("Goodbye!");
  process.exit();
}



// // Update review name
// app.put('/api/review/:id', (req, res) => {
//   const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
//   const params = [req.body.review, req.params.id];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//     } else if (!result.affectedRows) {
//       res.json({
//         message: 'Movie not found'
//       });
//     } else {
//       res.json({
//         message: 'success',
//         data: req.body,
//         changes: result.affectedRows
//       });
//     }
//   });
// });

// // Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });


