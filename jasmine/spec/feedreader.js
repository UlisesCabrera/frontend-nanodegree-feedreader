/* global loadFeed */
/* global allFeeds */
$(function () {
    'use strict';

    describe('RSS Feeds', function () {
        // in order for this test to pass the allFeeds array should be defined, be an array and have content on it.
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
            expect(allFeeds instanceof Array).toBeTruthy();
        });
        
        // in order for this test to pass URL should be defined, be an actual URL and have content on it.
        it('have url defined', function () {
            var feedsURL;
            for (var i = 0; i < allFeeds.length; i++) {
                feedsURL = allFeeds[i].url;
                expect(feedsURL).toBeDefined();
                expect(feedsURL.length).not.toBe(0);
                expect(allFeeds[i].url).toMatch(/^http(s?)\:\/\//);
            }
        });
        
        // in order for this test to pass name should be defined, be a string and have content on it.
        it('have name defined', function () {
            var feedsName;
            for (var i = 0; i < allFeeds.length; i++) {
                feedsName = allFeeds[i].name;
                expect(feedsName).toBeDefined();
                expect(typeof feedsName).toBe('string');
                expect(feedsName.length).toBeGreaterThan(0);
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
            });
            
            // since the body has the class 'menu-hidden' by default, when the menu icon is clicked it should remove it.
            it('it should make the menu visibile', function () {
                expect(body.hasClass('menu-hidden')).toBeFalsy();
            });
            
            //the second time the beforeEach runs, the click event will add the "menu-hidden" class to the body and hide the menu.
            it('if the menu is visible, it should hide it', function () {
                expect(body.hasClass('menu-hidden')).toBeTruthy();
            });
        });
    });

    describe('Initial Entries', function () {
        // passing the done function as the callback function of loadFeed to make sure it is completed before going to the next step.
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('After the loadFeed is completed, it should have at least a single entry', function (done) {
            var entries = $('.feed article.entry');
            expect(entries.length).toBeGreaterThan(0);
            done()
        });
    });

    describe('New Feed Selection', function () {
        // declaring the variables that will be used on the comparation.
        var newContent,
            oldContent;
        beforeEach(function (done) {
            
            loadFeed(0, function () {
                // get the content from the entry container after calling the loadFeed function the first time.
                oldContent = $('.feed article.entry').html();
                loadFeed(1, function () {
                    // get the content from the entry container after calling the loadFeed function the second time.
                    newContent = $('.feed article.entry').html();
                    done();
                })
            });      
        });

        it('the content updates when the loadFeed completes', function (done) {      
            // compares the content from the first and second time the loadFeed function was called.
            expect(newContent).not.toEqual(oldContent);
            done();
        });
    });
});