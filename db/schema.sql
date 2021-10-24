DROP DATABASE IF EXISTS orgcharts;
CREATE DATABASE orgcharts;

USE orgcharts;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT UNIQUE AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL,
    manager_id INT,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
);