

# connect to the container
docker-compose exec mysql bash


mysql -u root -p


CREATE USER 'sammy'@'%' IDENTIFIED BY 'PassWord@123';

GRANT ALL ON *.* TO 'sammy'@'%';

FLUSH PRIVILEGES;



