
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*loops through the objects in allFeeds to check the url property is defined
        and not empty*/
         it('url defined', function(){
           for(let u of allFeeds){
             expect(u.url).toBeDefined();
             expect(u.url).not.toBe('');
           }
         });


         /*loops through the objects in allFeeds to check the name property is defined
         and not empty*/
         it('name defined', function(){
           for(let n of allFeeds){
             expect(n.name).toBeDefined();
             expect(n.name).not.toBe('');
           }
         })
    });


    describe('The menu', function(){
      /* checks that the menu-hidden class exists which is the class responsible
      for moving the menu off screen
       */
       it('menu hidden', function(){
         expect($('body').hasClass('menu-hidden')).toBe(true);
       })

       /* uses the click() jQuery function which simulates a click to check that
       when the menu icon is clicked the menu-hidden class is toggled to be removed
       and that it is replaced when the menu icon is clicked again
        */
        it('menu changes visibility', function(){
          let hamburgerMenu = document.querySelector('.menu-icon-link');
          hamburgerMenu.click();
          expect($('body').hasClass('menu-hidden')).toBe(false);
          hamburgerMenu.click();
          expect($('body').hasClass('menu-hidden')).toBe(true);
        })
    });

    describe('Initial Entries', function(){
      /* Uses beforeEach and done to ensure that the loadFeed function completes
      before the spec is run
       */
       beforeEach(function(done){
         loadFeed(0, function(){
           done();
         });
       });
       /* First grabs the element with the feed class from the document using
       query selector and stores it in feedCheck, then grabs the element with
       the entry class from feedCheck and tests that it is defined
        */
       it('At least one entry', function(){
         let feedCheck = document.querySelector('.feed');
         let entryCheck = feedCheck.querySelector('.entry');
         expect(entryCheck).toBeDefined();
       });
    });

    describe('New Feed Selection', function(){
      /* Stores the first feed in feedOne and the second Feed in feedTwo*/
       let feedOne;
       let feedTwo;
       beforeEach(function(done){
         loadFeed(0, function(){
           feedOne = document.querySelector('.feed').innerHTML;
           done();
         });
         loadFeed(1, function() {
           feedTwo = document.querySelector('.feed').innerHTML;
           done();
         })
       });
       /*Checks to make sure that feedOne does not equal feedTwo*/
       it('Content changes', function(){
         expect(feedOne).not.toEqual(feedTwo);
       })

    });

}());
