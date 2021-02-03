## Projects Lab

![Travis Badge](https://api.travis-ci.com/dmitriy-uvin/projects-lab.svg?token=XwsxdNxj9UKebwsDJZgd&branch=master)

That project has microservice architecture, so installation of each service described in each dir.

```
git clone https://github.com/dmitriy-uvin/projects-lab
```
- [API](./api)
```
cd ./api/
```  
- [CLIENT](./client)
```
cd ./client/
```  

Or you can use docker-compose to launch it in docker:

#### Before launching

```
sudo apt-get install docker-compose
```

```
docker-compose up -d
```
- Server will be available at http://localhost:8000
- Adminer for DB managing at http://localhost:8888
- Client at http://localhost:7000
