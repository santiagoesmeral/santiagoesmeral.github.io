# personal FAQ for when i forget stuff:

1? WHY DO I HAVE TO TYPE SUDO ALL THE TIME JESUS CHRIST
1- https://askubuntu.com/questions/477551/how-can-i-use-docker-without-sudo

2? WHY DOES STICKY NOT WORK AAAAAAA
2- sticky needs to have A- all parentS (plural) to have overflow visible, and needs a top/right/left/bottom property defined, usually top: 0;

3? WHY SO MANY GIT CORRUPT FILES
3- idk but it seems like separating the npm start from the code . in 2 separate terminals (Aka not using the start_project command i had) fixed it.

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
  webpage looks like something that can work! now, look in TO DO for stuff to do

- 31/1/22
  added a searchbar to duckduckgo, though no autocomplete.
  gotta add a search icon later on

- 1/2/22
  tried adding the search icon. Things i've learned:
  1- font-awesome is a pain in the ass to install, and near impossible to import it on css
  2- you CANNOT use pseudoelements on inputs
  to do: move this part into react. Maybe make the button interactive while you're at it, have it be the search button. Why not!, and change the icon between a search icon while its empty, and an arrow while you can search

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

- 22/6/22
  i am sure i worked at some point in between the last update and this. But i dont remember.
  In any case: the title works! kinda. No emojis. but it works! and i am now using a font which i find really cool: Unifont
  I may change the page to have an 8bit vibe in the future.
  For now though, big problem: given the fact that we dont know the height of the typewriter title (by design), it will be impossible to put it at the top without it screwing up the layout of the page with long texts... or so i think.
  I need to research if its possible to have font size scale with container width. If it is possible, then we should be able to fit the text neatly into a Xvw by Xvh box and call it a day.
  Besides that, we only have 4 options: on the side like a decor, at the bottom, weirdly floating around with position absolute (think minecraft homepage text), or no text at all.
  I tried the weirdly floating one, but this particular type of typewriter is very much not happy with changes in parent display status

  So, for the next few days: research into scaling font size with container width. If you can, then go back to what you had. If you cant, then re-design the page
  Alternative option: calculate the width of the text before its gonna be displayed, and if its longer than the width of the parent (Aka causes overflow and a second paragraph), skip it. ← this might be the most sensible option
  https://stackoverflow.com/questions/16056591/font-scaling-based-on-width-of-container
  https://css-tricks.com/fitting-text-to-a-container/
  https://css-tricks.com/viewport-sized-typography/

- 2/8/22
  yes, 2 months since the last update. C'est la vie
  In any case: i re-did for the nth time the layout of the page, and changed it to look more retro.
  I am actually quite happy with how it looks like on this first iteration, and unlike previous designs, i know exactly what to do with the typewriter text for mobiles (either move it down or remove it)

  there are multiple nice-to-haves that i could try having here, but for now i'll leave it be. I'll instead start making the new page for my CV-esque page

- 30/8/22
  Hey, unlike last time, i've been working a lot and i just forgot to write it here.
  I've been adding all the features i wanted to add. The redirect to links on numpad presses, the fun box minigame thing, and i am now working on making a new menu with links (so i can add even more liks, like a direct CV download and links to codepens), as well as the about me page.

  I am close to done!
  just to recap, the to do to MVP:
  -about me page
  -dropdown menu with multiple links
  -open search in new page if you use the numpad enter (optional)
  -links to icon providers
  -404 page
  -and host it!

- 1/9/22
  listen, i had a couple of rough 2 days. In any case, i just sat down and got the menu working as well as the redirect on new page.

  Current to do list:
  -about me page
  -links to icon providers
  -404 page
  -test on other browsers
  -check css not loading correctly on first load warning
  -and host!

  sidenote: there's some CSS loading bugs going on. Gotta test that.

- 7/9/22
  Guess what, we got the hire me page working! and now its called hire me, no longer about me. I am done with all the main features!
  now just gotta go through the TO DOs and get it up and rocking.

- 4/10/22
  I haven't been afk, i just forgot to add progress here.
  Basically, i've been massively polishing the page ever since last time. I've also had a long period of pause due to "life" reasons. Wont go into detail.
  Mobile fully works! and the page is also fully deployed and usable from https://santiagoesmeral.github.io/
  Currently i'm just polishing it up. Changing things which dont make too much sense and all, you know?

- 22/10/22
  For the most part, the project is done. I find a few things to change here and there though. 
  On my list of "i should get this fixed" stuff: 
  1- current keymappings do not follow WCAG standards. I must provide a way to turn off the feature.
  2- probably a good idea to add a way to stop the animation in the button of the fun box
  1 and 2- a small options menu looks like a good choice here
  3- a skip links button for tab-navigation on the list of links?
