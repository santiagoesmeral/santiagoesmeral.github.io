COMMANDS!
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

CURRENT STATUS:
-- prior to 25/8/21
I created a create-react-app project with the typescript template.
Then i created a dockerfile following ben awad and fireship tutorials.
I noticed that doing that created some audit problem things when running the docker build, so i added the command npm audit fix, and that seems to make things go booboo.

-- 25/8/21
managed to stop having to type the stupid sudo thing, now we can get to work! I also added live reload, and managed to understand docker a bit. I even added sass!

--28/8/21
added scroll snap type... idk if i like it, but it'll be useful for the jump-to links. Also added a header and the jump links

--30/8/21
added a signature svg animation. looks neat! i want to make the text wrap around it

--3/9/21
re-doing the main page, added a white box below the text. Said box is intended to hover from offscreen, creating an illusion of revealing the black text.

--8/9/21
made the hover box inherit width from parent, added some animations and grid layout. WIP!

--14/10/21
installed the repo in my windows laptop. currently working on setting up env variables to check on an fix for my current job

--30/11/21
yes, massive gap. TL-DR i've been busy with other stuff, including trying to move this repo into both github and my new laptop, because my old linux partition got bworked. I've tried moving it into windows but live reload doesn't work inside docker on windows without doing some extra steps, steps which i was not willing to learn since i wanted to move to linux anyways

TODO:
0- finish moving the repo into the linux VM to avoid having to put up with windows VM thingy, all because live reload doesn't work :D
1- make the white boxes slide into the intro page, revealing the text and the signature
2- apply clip-paths on those white boxes to make em look wack

DONE:
1? WHY DO I HAVE TO TYPE SUDO ALL THE TIME JESUS CHRIST
1- https://askubuntu.com/questions/477551/how-can-i-use-docker-without-sudo
# portfolio
# portfolio
