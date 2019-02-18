# Limite de Crédito - Frontend
00. Para a execução do projeto creditlimit-ui (frontend) é necessário ter o "docker" instalador na máquina
01. Após ter feito download do repositório é necessário entrar no diretório do projeto;
cd ~/Download/creditlimit-ui
00. Construir a imagem do  creditlimit-ui (frontend)
docker build -t creditlimit-ui . --network=bridge
00. Para conferir se o mesmo foi criado executar o comando abaixo:
$ docker image ls
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
creditlimit-ui      latest              3832eb76234e        37 seconds ago      29.2MB
creditlimit         latest              aee86de03c4d        6 minutes ago       143MB
openjdk             8-jdk-alpine        792ff45a2a17        12 days ago         105MB
nginx               alpine              b411e34b4606        2 weeks ago         16.1MB
00. É possivel notar que foi feito o download da imagem do nginx e também criado o imagem do creditlimit-ui (frontend);
00. Após os passos anteriores terem rodado com sucesso, é necessário rodar imagem do creditlimit-ui (frontend);
docker run -p 80:80 --rm creditlimit-ui