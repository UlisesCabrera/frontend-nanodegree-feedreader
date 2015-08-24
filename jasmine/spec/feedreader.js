/* global allFeeds */
/* strict */
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
            // before each expectation the menu icon will be clicked and the toggle class on the app.js will run
            beforeEach(function () {
                $('.menu-icon-link').click();
            })
            
            // since the body has the class 'menu-hidden' by default, when the menu icon is clicked it should remove it.
            it('it should make the menu visibile', function () {
                expect(body.hasClass('menu-hidden')).not.toBe(true);
            });
            
            //the second time the beforeEach runs, the click event will add the "menu-hidden" class to the body and hide the menu.
            it('if the menu is visible, it should hide it', function () {
                expect(body.hasClass('menu-hidden')).toBe(true);
            });
        })
    });

    describe('Initial Entries', function () {
        // using the setTimeout function to give time to the loadFeed function to finish
        beforeEach(function (done) {
            loadFeed(0);
            setTimeout(function () {
                done()
            }, 1000)
        });

        it('After the loadFeed is completed, it should have at least a single entry', function (done) {
            var entries = $('.feed article.entry');
            expect(entries.length).toBeGreaterThan(0);
            done()
        })

    });

    describe('New Feed Selection', function () {
        var newContent,
            oldContent;

        beforeEach(function (done) {
            // get the content from the entry container before calling the loadFeed function with the click event.
            oldContent = $('.feed article.entry').html();
            $('.feed-list a').click();

            // using the setTimeout function to give time to the loadFeed function to finish
            setTimeout(function () {
                done();
            }, 1000)

        });

        it('the content updates when the loadFeed completes', function (done) {
            // get the content from the entry container after calling the loadFeed function with the click event.
            newContent = $('.feed article.entry').html();
            
            // compares the content before and after the loadFeed function is called.
            expect(newContent).not.toEqual(oldContent);
            done();
        });
    })
});