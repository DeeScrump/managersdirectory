USE orgcharts;

INSERT INTO department
    (name)
VALUES
    ('HR'),
    ('IT'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 80000, 4),
    ('Salesperson', 60000, 4),
    ('Recruiter', 75000, 1),
    ('Lead Engineer', 150000, 3),
    ('Software Engineer', 120000, 3),
    ('Account Manager', 160000, 2),
    ('Accountant', 125000, 4),
    ('Legal Team Lead', 250000, 5),
    ('Lawyer', 200000, 5);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Ash', 'Asher', 1, NULL),
    ('Barb', 'Bailey', 2, 1),
    ('Cat', 'Casey', 3, NULL),
    ('Don', 'Dudley', 4, 3),
    ('Erica', 'Evers', 5, NULL),
    ('Fanny', 'Foxtrot', 6, 5),
    ('Gar', 'Garrett', 7, NULL),
    ('Hanna', 'Hensley', 8, 7);