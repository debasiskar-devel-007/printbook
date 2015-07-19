/**
 * Created by debasis on 18/7/15.
 */


'use strict';

/* App Module */

var printbook = angular.module('printbook', [
    'ui.router',
    'ngAnimate',
   // 'homeControllers'
]);

printbook.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider
        .otherwise("/index");
    //
    // Now set up the states
    $stateProvider
        .state('index',{
            url:"/index",
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'index.html' },

                // the child views will be defined here (absolutely named)
                'loader': { templateUrl: 'partials/loader.html' ,
                    controller:'loader'

                },

                // for column two, we'll define a separate controller
                'modal': {
                    templateUrl: 'partials/modal.html'
                    //controller: 'scotchController'
                },
                'topbar': {
                    templateUrl: 'partials/topbar.html'
                    //controller: 'scotchController'
                },
                'header': {
                    templateUrl: 'partials/header.html'
                    //controller: 'scotchController'
                },
                'header-bottom': {
                    templateUrl: 'partials/header-bottom.html'
                    //controller: 'scotchController'
                },
                'first-clearfix': {
                    templateUrl: 'partials/first-clearfix.html',
                    controller: 'firstclearfix'
                },
                'second-clearfix': {
                    templateUrl: 'partials/second-clearfix.html',
                    controller: 'secondclearfix'
                },
                'thired-clearfix': {
                    templateUrl: 'partials/thired-clearfix.html',
                    controller: 'thirdclearfix'
                },
                'svgs': {
                    templateUrl: 'partials/svgs.html'
                    //controller: 'scotchController'
                },
                'footer': {
                    templateUrl: 'partials/footer.html'
                    //controller: 'scotchController'
                }
            }
        }

    )
        .state('about',{
            url:"/about",
            templateUrl: 'about.html',
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'about.html' },

                // the child views will be defined here (absolutely named)
                'loader': { templateUrl: 'partials/loader.html' ,
                    controller:'loader'

                },

                // for column two, we'll define a separate controller
                'modal': {
                    templateUrl: 'partials/modal.html'
                    //controller: 'scotchController'
                },
                'topbar': {
                    templateUrl: 'partials/topbar.html'
                    //controller: 'scotchController'
                },
                'header': {
                    templateUrl: 'partials/inner-header.html'
                    //controller: 'scotchController'
                },
                'header-bottom': {
                    templateUrl: 'partials/header-bottom.html'
                    //controller: 'scotchController'
                },
                'first-clearfix': {
                    templateUrl: 'partials/aboutbody.html',
                    controller: 'aboutbody'
                },
                'svgs': {
                    templateUrl: 'partials/svgs.html'
                    //controller: 'scotchController'
                },
                'footer': {
                    templateUrl: 'partials/footer.html'
                    //controller: 'scotchController'
                }
            }
        }

    )
        .state('testimonial',{
            url:"/testimonial",
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'about.html' },

                // the child views will be defined here (absolutely named)
                'loader': { templateUrl: 'partials/loader.html' ,
                            controller:'loader'

                },

                // for column two, we'll define a separate controller
                'modal': {
                    templateUrl: 'partials/modal.html'
                    //controller: 'scotchController'
                },
                'topbar': {
                    templateUrl: 'partials/topbar.html'
                    //controller: 'scotchController'
                },
                'header': {
                    templateUrl: 'partials/inner-header.html'
                    //controller: 'scotchController'
                },
                'header-bottom': {
                    templateUrl: 'partials/header-bottom.html'
                    //controller: 'scotchController'
                },
                'first-clearfix': {
                    templateUrl: 'partials/testimonialbody.html'
                   // controller: 'testimonialbody'
                },

                'svgs': {
                    templateUrl: 'partials/svgs.html'
                    //controller: 'scotchController'
                },
                'footer': {
                    templateUrl: 'partials/footer.html'
                    //controller: 'scotchController'
                }
            }
        }

    )


        .state('contact',{
            url:"/contact",
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'about.html' },

                // the child views will be defined here (absolutely named)
                'loader': { templateUrl: 'partials/loader.html' ,
                    controller:'loader'

                },

                // for column two, we'll define a separate controller
                'modal': {
                    templateUrl: 'partials/modal.html'
                    //controller: 'scotchController'
                },
                'topbar': {
                    templateUrl: 'partials/topbar.html'
                    //controller: 'scotchController'
                },
                'header': {
                    templateUrl: 'partials/inner-header.html'
                    //controller: 'scotchController'
                },
                'header-bottom': {
                    templateUrl: 'partials/header-bottom.html'
                    //controller: 'scotchController'
                },
                'first-clearfix': {
                    templateUrl: 'partials/contactbody.html'
                    // controller: 'testimonialbody'
                },

                'svgs': {
                    templateUrl: 'partials/svgs.html'
                    //controller: 'scotchController'
                },
                'footer': {
                    templateUrl: 'partials/footer.html'
                    //controller: 'scotchController'
                }
            }
        }

    )


        .state('customize',{
            url:"/customize",
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'about.html' },

                // the child views will be defined here (absolutely named)
                'loader': { templateUrl: 'partials/loader.html' ,
                    controller:'loader'

                },

                // for column two, we'll define a separate controller
                'modal': {
                    templateUrl: 'partials/modal.html'
                    //controller: 'scotchController'
                },
                'topbar': {
                    templateUrl: 'partials/topbar.html'
                    //controller: 'scotchController'
                },
                'header': {
                    templateUrl: 'partials/inner-header.html'
                    //controller: 'scotchController'
                },
                'header-bottom': {
                    templateUrl: 'partials/header-bottom.html'
                    //controller: 'scotchController'
                },
                'first-clearfix': {
                    templateUrl: 'partials/customize.html'
                    // controller: 'testimonialbody'
                },

                'svgs': {
                    templateUrl: 'partials/svgs.html'
                    //controller: 'scotchController'
                },
                'footer': {
                    templateUrl: 'partials/footer.html'
                    //controller: 'scotchController'
                }
            }
        }

    )



        .state('login',{
            url:"/login",
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'about.html' },

                // the child views will be defined here (absolutely named)
                'loader': { templateUrl: 'partials/loader.html' ,
                    controller:'loader'

                },

                // for column two, we'll define a separate controller
                'modal': {
                    templateUrl: 'partials/modal.html'
                    //controller: 'scotchController'
                },
                'topbar': {
                    templateUrl: 'partials/topbar.html'
                    //controller: 'scotchController'
                },
                'header': {
                    templateUrl: 'partials/inner-header.html'
                    //controller: 'scotchController'
                },
                'header-bottom': {
                    templateUrl: 'partials/header-bottom.html'
                    //controller: 'scotchController'
                },
                'first-clearfix': {
                    templateUrl: 'partials/login.html'
                    // controller: 'testimonialbody'
                },

                'svgs': {
                    templateUrl: 'partials/svgs.html'
                    //controller: 'scotchController'
                },
                'footer': {
                    templateUrl: 'partials/footer.html'
                    //controller: 'scotchController'
                }
            }
        }

    )

        .state('resgister',{
            url:"/resgister",
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'about.html' },

                // the child views will be defined here (absolutely named)
                'loader': { templateUrl: 'partials/loader.html' ,
                    controller:'loader'

                },

                // for column two, we'll define a separate controller
                'modal': {
                    templateUrl: 'partials/modal.html'
                    //controller: 'scotchController'
                },
                'topbar': {
                    templateUrl: 'partials/topbar.html'
                    //controller: 'scotchController'
                },
                'header': {
                    templateUrl: 'partials/inner-header.html'
                    //controller: 'scotchController'
                },
                'header-bottom': {
                    templateUrl: 'partials/header-bottom.html'
                    //controller: 'scotchController'
                },
                'first-clearfix': {
                    templateUrl: 'partials/register.html'
                    // controller: 'testimonialbody'
                },

                'svgs': {
                    templateUrl: 'partials/svgs.html'
                    //controller: 'scotchController'
                },
                'footer': {
                    templateUrl: 'partials/footer.html'
                    //controller: 'scotchController'
                }
            }
        }

    )




        .state('loader', {
            url: "/loader",
            templateUrl: "partials/loader.html"
        })
        .state('state1', {
            url: "/state1",
            templateUrl: "partials/state1.html"
        })
        .state('state1.list', {
            url: "/list",
            templateUrl: "partials/state1.list.html",
            controller: function($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
            }
        })
        .state('state2', {
            url: "/state2",
            templateUrl: "partials/state2.html"
        })
        .state('state2.list', {
            url: "/list",
            templateUrl: "partials/state2.list.html",
            controller: function($scope) {
                $scope.things = ["A", "Set", "Of", "Things"];
            }
        });
});



printbook.controller('loader', function($scope) {



    $scope.init = function () {
        // check if there is query in url
        // and fire search in case its value is not empty
        //alert(99);
        $('#loader').delay(300).fadeOut('slow');
        $('#loader-container').delay(200).fadeOut('slow');
        $('body').delay(300).css({'overflow':'visible'});




    };
    $scope.init();

});




printbook.controller('firstclearfix', function($scope) {



    $scope.init = function () {
        // check if there is query in url
        // and fire search in case its value is not empty





        $('#owl-home').owlCarousel({
            loop:true,
            margin:30,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });


    };
    $scope.init();

});



printbook.controller('secondclearfix', function($scope) {



    $scope.init = function () {
        // check if there is query in url
        // and fire search in case its value is not empty





        $('#owl-featured').owlCarousel({
            loop:true,
            margin:15,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        })


    };
    setTimeout(function() {
        $scope.init();
    },1000);


});


printbook.controller('thirdclearfix', function($scope) {



    $scope.init = function () {
        // check if there is query in url
        // and fire search in case its value is not empty





        $('#owl-recent').owlCarousel({
            loop:true,
            margin:15,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        })


    };
    setTimeout(function() {
        $scope.init();
    },1000);


});



printbook.controller('aboutbody', function($scope) {



    $scope.init = function () {
        // check if there is query in url
        // and fire search in case its value is not empty





        //alert(87);


    };
    setTimeout(function() {
        $scope.init();
    },1000);


});