# Welcome!
This is my test repo, and also m y portfolio. I want to make this repo as clean as i can possibly make it, as easy to understand, yet also i'll use it as my testing grounds for anything i may want to try out as far as frontend goes. For now its pretty barren, so yeah, i'll make it prettier as time goes on don't worry!

# COMMANDS!
to run a new container with the name portfolio:
in bash
docker run -it -p 3000:3000 -v "$(pwd)"/src:/portfolio/src --name portfolio santiagoesmeral/portfolio:1.1

in powershell: 
docker run -it -p 3000:3000 -v ${pwd}/src:/portfolio/src --name portfolio santiagoesmeral/portfolio:1.1


(change 1.1 to whichever current version, or change the -it to -d if you dont want to see the console)
(info for the "live reload" -v thingy: https://docs.docker.com/get-started/06_bind_mounts/)

to start the portfolio container:
docker start portfolio
if you want to see the container's console:
docker start -i portfolio
(portfolio being the container name)

to rename a container:
docker rename original_name new_name

to remove an old container:
docker rm container_name

to list ALL containers (including the ones not running right now)
docker ps -a

to build the image:
docker build -t santiagoesmeral/portfolio:1.X .

(of course change the X for versioning)

note for docker build: the npm install in the dockerfile will install the modules from package.json *inside the virtual machine*. NOT in the host! so that can cause fuckery with linters

to see all current containers:

docker ps

to stop the container:
docker container stop portfolio
(portfolio being the docker container name, you can see it with docker ps)

to set the node env (production or development): 
unix: export NODE_ENV=production
powershell: set NODE_ENV=production
