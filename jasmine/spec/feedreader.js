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
        it('is hidden by default', function () {
            var body = $('body');
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });
    });

    /* TODO: Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */

    /* TODO: Write a new test suite named "Initial Entries" */

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test wil require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
      */
});
