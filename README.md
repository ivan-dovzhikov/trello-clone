a# Trello clone
> <a href="https://einegeist.github.io/trello-clone/" target="_blank">Demo</a>

## About

A simple SPA <a href="https://trello.com/" target="_blank">Trello</a> clone written in Typescript, SASS using React, Redux and Local storage.

### Features:

* Russian and English localization;
* Ability to change language;
* Routing;
* Drag'n'Drop;
* Board pages;
* Lists with cards on each board page.

### Main technologies used:

* Typescript;
* SASS;
* React;
* React-router-dom;
* React-beautiful-dnd;
* React-intl;
* Redux.

### Issues:

* Horizontal auto scroll on card dragging doesn't work since React beautiful dnd doesn't support it at the moment;
* Custom horizontal scroll on wheel is in lack of smoothing, and it might scroll slowly on some browsers (in Firefox for sure);
* Custom scrollbar and backdrop-filter might not work on some browsers (Firefox), but site still should be useable;
* Mobile version wasn't in priority so its design might be wonky;
* Native select styling in menu isn't any good. It needs to be replaced by custom select.

## Credits:

* Thanks to <a href="https://www.pexels.com/" target="_blank">Pexels.com</a> and <a href="https://www.pexels.com/@splitshire" target="_blank">SplitShire</a> for <a href="https://www.pexels.com/photo/aerial-alpine-ceresole-reale-desktop-backgrounds-1562/" target="_blank"> beautiful photo</a> used as the background image.
* Thanks to all package creators for their fantastic job.
