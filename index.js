const db = require('./db');
const mysql = require('mysql2');
const { prompt } = require('inquirer');
const { getEmployees, getRoles, createDepartment, createRole, createEmployee, updateEmployeeRole, updateEmployeeManager, removeDepartment, removeRole, removeEmployee } = require('./db');
require('console.table');


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
  ]).then(res => {
      let option = res.option;

      switch (option) {
        case "VAD":
          getEmployees();
          break;
        case "VAR":
          getRoles();
          break;
        case "VAE":
          getEmployees();
          break;
        case "AAD":
          createDepartment();
          break;
        case "AAR":
          createRole();
          break;
        case "AAE":
          createEmployee();
          break;
        case "UEM":
          updateEmployeeManager();
          break;
        case "UER":
          updateEmployeeRole;
          break;
        case "DAD":
          removeDepartment();
          break;
        case "DAR":
          removeRole();
          break;
        case "DAE":
          removeEmployee();
          break;
        default:
          quit();
      }
    }
  )

}




// // Delete a movie
// app.delete('/api/movie/:id', (req, res) => {
//   const sql = `DELETE FROM movies WHERE id = ?`;
//   const params = [req.params.id];
  
//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.statusMessage(400).json({ error: res.message });
//     } else if (!result.affectedRows) {
//       res.json({
//       message: 'Movie not found'
//       });
//     } else {
//       res.json({
//         message: 'deleted',
//         changes: result.affectedRows,
//         id: req.params.id
//       });
//     }
//   });
// });

// // Read list of all reviews and associated movie name using LEFT JOIN
// app.get('/api/movie-reviews', (req, res) => {
//   const sql = `SELECT movies.movie_name AS movie, reviews.review FROM reviews LEFT JOIN movies ON reviews.movie_id = movies.id ORDER BY movies.movie_name;`;
//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: rows
//     });
//   });
// });

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


