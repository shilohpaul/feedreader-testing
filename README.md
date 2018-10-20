## Table of Contents

* [Contributing](#contributing)
* [About](#about)
* [Tests](#tests)

## Contributing
The .git, css, fonts, jasmine lib, js, and index.html files were provided by Udacity as was a test in the feedreader.js file.

For the remainder of the feedreader.js file:
Author: Shiloh Paul
Date: 10/20/18

## About
The feedreader loads a feed with a variety of articles links and display their names.

## Load Game
To load feedreader, navigate to https://github.com/shilohpaul/feedreader-testing and
either clone or download the files from the repository. Then, simply open
the index.html file in your preferred browser.

## Testing
The feedreader has 7 specs to test the functionality of the feed.

are defined: the are defined test checks that the allFeeds array, which stores all
of the article names and urls, is defined.

url defined: the url defined test checks that the url is defined and not empty for
each of the feeds in the allFeeds array.

name defined: the name defined test checks that the name is defined and not empty for
each of the feeds in the allFeeds array.

menu hidden: the menu hidden test checks that the menu-hidden class exists by default which is responsible for moving the menu off screen

menu changes visibility: the menu changes visibility test checks that the menu-hidden class is removed once the menu icon is clicked and that the menu-hidden class is added again once the icon is clicked again.

at least one entry: the at least one entry test checks that the feed has at least one entry after the loadFeed function has completed.

content changes: the content changes test checks that one feed is not equal to another feed after the loadFeed function has completed.
