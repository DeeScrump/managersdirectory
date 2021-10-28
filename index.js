const db = require('./db');
const mysql = require('mysql2');
const { prompt } = require('inquirer');
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
          name: "Update an Employee's Role",
          value: "UPDATE_EMPLOYEE_ROLE"
        },
     
        {
          name: "",
          value: ""
        },        
        {
          name: "",
          value: ""
        },        
        {
          name: "",
          value: ""
        },        
        {
          name: "",
          value: ""
        },        
        {
          name: "",
          value: ""
        },
        {
          name: "",
          value: ""
        },       
      ]
    }
  ])

}


// // Read all movies
// app.get('/api/movies', (req, res) => {
//   const sql = `SELECT id, movie_name AS title FROM movies`;
  
//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//        return;
//     }
//     res.json({
//       message: 'success',
//       data: rows
//     });
//   });
// });

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


