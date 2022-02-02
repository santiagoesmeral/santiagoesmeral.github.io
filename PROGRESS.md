# CURRENT STATUS:

- prior to 25/8/21
  I created a create-react-app project with the typescript template.
  Then i created a dockerfile following ben awad and fireship tutorials.
  I noticed that doing that created some audit problem things when running the docker build, so i added the command npm audit fix, and that seems to make things go booboo.

- 25/8/21
  managed to stop having to type the stupid sudo thing, now we can get to work! I also added live reload, and managed to understand docker a bit. I even added sass!

- 28/8/21
  added scroll snap type... idk if i like it, but it'll be useful for the jump-to links. Also added a header and the jump links

- 30/8/21
  added a signature svg animation. looks neat! i want to make the text wrap around it

- 3/9/21
  re-doing the main page, added a white box below the text. Said box is intended to hover from offscreen, creating an illusion of revealing the black text.

- 8/9/21
  made the hover box inherit width from parent, added some animations and grid layout. WIP!

- 14/10/21
  installed the repo in my windows laptop. currently working on setting up env variables to check on an fix for my current job

- 30/11/21
  yes, massive gap. TL-DR i've been busy with other stuff, including trying to move this repo into both github and my new laptop, because my old linux partition got bworked. I've tried moving it into windows but live reload doesn't work inside docker on windows without doing some extra steps, steps which i was not willing to learn since i wanted to move to linux anyways

- first week of 2022
  Heyo wassup with the massive gaps!
  i installed a lubuntu distro on my new and shiny laptop, and i'm trying to get it to work in this distro so far. Everything seems to be going just fine, so i'll take the rest of the week to get the repo working and then next week i'll get to actually working on it. :D
  NOTE: there seems to be a bit of fuckery involving node_modules/svgo. It requests to be updated to 2.0.0, but it appears to be fine for now so fuck it

- second week of 2022:
  well, you got the header to not look like total ass. Good job! but there's still work to do on the navigation eh.

- 20/1/22
  trying to make a background grid, WIP

- 27/1/22
  fuck the grid, doing a homepage like the firefox homepage.
  Also, take a look at Extension: Remote - Containers

- 28/1/22
  webpage looks like something that can work! now, look in TODO for stuff to do

- 31/1/22
  added a searchbar to duckduckgo, though no autocomplete.
  gotta add a search icon later on

- 1/2/22
  tried adding the search icon. Things i've learned:
  1- font-awesome is a pain in the ass to install, and near impossible to import it on css
  2- you CANNOT use pseudoelements on inputs
  todo: move this part into react. Maybe make the button interactive while you're at it, have it be the search button. Why not!, and change the icon between a search icon while its empty, and an arrow while you can search

# TODO:

- **change the link cards into actual <a> tags, add urls to youtube.**

  - see if its possible to get an icon somewhere
  - later on, save this on a database somewhere and pull them dynamically.

- **make the searchbar work**

  - see if duckduckgo has a searchbar plugin
  - see if browsers have a way of redirecting the input into the searchbar
  - add a submit button, and prob a form
  - find a way of triggering the submit button onEnter if the input is selected
  - find a way to make a search from url parameters into duckduckgo

- **make the title have some typewriter effect text, and add some easter eggs into it while making it rotate text periodically**

- **add an about-me bio page**

- **add a sudoku somewhere (good luck with that chief lmao)**

- **add todo (locally hosted in cache if possible?)**

  - if you add a database and users, make it per-user

- **add a translation dropdown**

  - see if deepl or some other service offers a dynamic translation API
  - check that it works with right-to-left scripts like arabic
  - remember to change the search locale for the searchbar

- **add mobile responsive design**

- check manifest.json and robots.txt in public

- **create backend and database, store links n stuff there**

  - add a way for me to log in and change things around
    - maybe add the ability for multiple users and store their sets of links around

- **add "add, delete and modify" links**

- **add a service worker? at least look into it**
- **try to make this a progressive web app (PWA)**

- **maybe look into react-native**

# DONE:

1? WHY DO I HAVE TO TYPE SUDO ALL THE TIME JESUS CHRIST
1- https://askubuntu.com/questions/477551/how-can-i-use-docker-without-sudo

2? WHY DOES STICKY NOT WORK AAAAAAA
2- sticky needs to have A- all parentS (plural) to have overflow visible, and needs a top/right/left/bottom property defined, usually top: 0;

```

```
