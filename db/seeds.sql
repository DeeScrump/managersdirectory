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
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Mike', 'Chan', 2, 1),
    ('Ashley', 'Rodriguez', 3, NULL),
    ('Kevin', 'Tupik', 4, 3),
    ('Kunal', 'Singh', 5, NULL),
    ('Malia', 'Brown', 6, 5),
    ('Sarah', 'Lourd', 7, NULL),
    ('Tom', 'Allen', 8, 7);


-- INSERT INTO department (name)
-- VALUES ('HR'),
--        ('IT'),
--        ('Engineering'),
--        ('Training'),
--        ('Operations');

-- INSERT INTO role (title, salary, department_id)
-- VALUES ('Manager', 150000, 1),
--        ('Intern', 30000, 2),
--        ('Associate Engineer', 75000, 3),
--        ('Training Leader', 50000, 4),
--        ('Hiring Manager', 125000, 4),
--        ('Senior Engineer', 90000, 3),
--        ('Production Leader', 100000, 5);
    
-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ('Ash', "Asher", 1, null),
--        ('Barb', "Bailey, 2, 5),
--        ('Cat', 'Casey', 3, 4,
--        ('Don', 'Dudley', 4, 1),
--        ('Erica', 'Evers', 4, 1),
--        ('Fanny', 'Foxtrot', 5, 2);