USE orgcharts;

INSERT INTO department (name)
VALUES ("HR"),
       ("IT"),
       ("Engineering"),
       ("Training"),
       ("Operations");

INSERT INTO roles (title, salary, department_id)
VALUES ("Manager", 150000, 1),
       ("Intern", 30000, 2),
       ("Associate Engineer", 75000, 3),
       ("Training Leader", 50000, 4),
       ("Hiring Manager", 125000, 4),
       ("Senior Engineer", 90000, 3)
       ("Production Leader", 100000, 5);
    
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ash", "Asher", 1, null),
       ("Barb", "Bailey", 2, 5),
       ("Cat", "Casey", 3, 4,
       ("Don", "Dudley", 4, 1),
       ("Erica", "Evers", 4, 1),
       ("Fanny", "Foxtrot", 5, 2);