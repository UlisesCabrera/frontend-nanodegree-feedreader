/* global allFeeds */

$(function () {

    describe('RSS Feeds', function () {
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have url defined', function () {
            var feedsURL;
            for (var i = 0; i < allFeeds.length; i++) {
                feedsURL = allFeeds[i].url;
                expect(feedsURL).toBeDefined();
                expect(feedsURL.length).not.toBe(0);
            }
        });

        it('have name defined', function () {
            var feedsName;
            for (var i = 0; i < allFeeds.length; i++) {
                feedsName = allFeeds[i].name;
                expect(feedsName).toBeDefined();
                expect(feedsName.length).not.toBe(0);
            }
        });
    });

    describe('The menu', function () {
        var body = $('body');

        it('is hidden by default', function () {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        describe('when the menu icon is clicked', function () {
            beforeEach(function () {
                $('.menu-icon-link').click();
            })

            it('it should make the menu visibile', function () {
                expect(body.hasClass('menu-hidden')).not.toBe(true);
            });

            it('if the menu is visible it should hide it', function () {
                expect(body.hasClass('menu-hidden')).toBe(true);
            });
        })
    });

    describe('Initail Entries', function(){
        beforeEach(function(done){
            loadFeed(0);
            setTimeout(function() {
              done()  
            }, 2000)       
        });
        
        it ('after the loadFeed is completed, it should have at least a single entry', function(done){
            var entries = $('.feed article.entry');
            expect(entries.length).toBeGreaterThan(0);
            done()
        })
        
    });


    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
      */
});
