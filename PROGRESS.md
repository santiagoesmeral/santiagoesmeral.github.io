# TODO:

- **re-do the typewriter to allow for responsive design**
  - https://dev.to/afif/a-scalable-css-only-typewriter-effect-2opn
- **add a small popup cheatsheet with all the !commands for ddg when user has the searchbar focused**
- **add socials (linkedin, github)**
- **add keyboard shortcuts to external links (i.e.: pressing 1 redirects to youtube)**
  -add keyboard icons to the links
- **disable animations if the user's settings request it**
- **add translation into spanish, french, portuguese and italian**
  -see if there is any good api's for translating all this stuff
- **add link to downloadable CV**
  - update CV
  - find somewhere to host it
- **make external links expand when hovered or focused** -https://css-tricks.com/expandable-sections-within-a-css-grid/ something like that
- **add link to icon providers in the bottom of the screen or something**
  -change icons so we only depend on one library
- **update all libraries**

-possible things that may need doing:

- **change flexbox into grid using auto-fit** -https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/
  -so far, with the given style of card, unnecesary

# TO DESIGN

- **make a cool background**
- **make the webpage responsive**
- **make the webpage mobile friendly**
- **make the webpage ARIA compatible**
- **make the webpage SSO optimized**
- **make the webpage downloadable like twitter**

# personal FAQ for when i forget stuff:

1? WHY DO I HAVE TO TYPE SUDO ALL THE TIME JESUS CHRIST
1- https://askubuntu.com/questions/477551/how-can-i-use-docker-without-sudo

2? WHY DOES STICKY NOT WORK AAAAAAA
2- sticky needs to have A- all parentS (plural) to have overflow visible, and needs a top/right/left/bottom property defined, usually top: 0;

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

- 11/2/22
  rather than doing the useful part, i added the title that changes! currently need to figure out how to make the priority text work
  so that when the user types i love you, the animation stops and restarts, and the I love you Zvet <3 appears.
  And once the user stops typing, the I love you Zvet <3 gets deleted and the animation resumes

- 24/2/22
  finally got around finishing the title bit, gave it a fixed height.
  Decided to also rework the priority message title to a priority queue title. Also added some nice hover 3d translation on the buttons!

- 1/5/22
  long time no see! basically i've been focusing a lot on my gf. I'll probably need to have this app working, at least a very basic prototype, minimum viable product, whatever you wanna call it. So i've decided to just focus on getting some basic URL links in the page, imma try to add icons later or something. I've also decided to just add an about me page, use the other 2 links in the header for my github and linkedin, and c'est tout. I can add more stuff later

- 4/6/22
  deja vu, long time no see again. I need to finish this ASAP.
  I've updated the goals for the page, and i reworked the links. Now they work, and there's even some nice icons!
