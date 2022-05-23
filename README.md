# Login-template

## *Dicas*

## Um modo de manter a infraestrutura que implementada no projeto em seu pc, é através do docker. 
### *MySQL Docker* 
<h4> Aqui você estará adicionando o container do mysql </h4>

```
docker run --name mysql -e MYSQL_ROOT_PASSWORD=admin -p 3306:3306 -d mysql:8.0
```
### *Adminer (interface para MySQL) Docker*

<h4> Aqui você estará adicionando (acesso em localhost:8080) uma interface para gerenciar o MySQL de maneira visual </h4>

```
docker run --name adminer --link mysql:db -p 8080:8080 -d adminer
```
