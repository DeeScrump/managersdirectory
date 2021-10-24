INSERT INTO department (name)
VALUES ("HR"),
       ("IT"),
       ("Engineering"),
       ("Training"),
       ("Operations");

INSERT INTO roles (department_id, title, salary)
VALUES (1, "Manager", 150000),
       (2, "Intern", 30000),
       (3, "Engineer", 75000),
       (4, "Associate", 50000),
       (5, "Leader", 100000);
    
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ash", "Asher", 1, 1),
       ("Barb", "Bailey", 2, 2),
       ("Cat", "Casey", 3, 3),
       ("Don", "Dudley", 4, 4),
       ("Erica", "Evers", 4, 4),
       ("Fanny", "Foxtrot", 5, 5);