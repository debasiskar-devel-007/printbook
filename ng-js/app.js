/**
 * Created by debasis on 18/7/15.
 */


'use strict';

/* App Module */

var printbook = angular.module('printbook', [
    'ui.router',
    'ngAnimate',
    'angularValidator',
    'ngCookies'
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
                    templateUrl: 'partials/header-bottom.html',
                    controller: 'checkstattus'
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
                    templateUrl: 'partials/header-bottom.html',
                    controller: 'checkstattus'
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
                    templateUrl: 'partials/header-bottom.html',
                    controller: 'checkstattus'
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
                    templateUrl: 'partials/header-bottom.html',
                    controller: 'checkstattus'
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
                    templateUrl: 'partials/header-bottom.html',
                    controller: 'checkstattus'
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
                    templateUrl: 'partials/header-bottom.html',
                    controller: 'checkstattus'
                },
                'first-clearfix': {
                    templateUrl: 'partials/login.html',
                     controller: 'login'
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

        .state('register',{
            url:"/register",
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
                    templateUrl: 'partials/header-bottom.html',
                    controller: 'checkstattus'
                },
                'first-clearfix': {
                    templateUrl: 'partials/register.html',
                    controller: 'register'
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


        .state('terms',{
            url:"/terms",
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
                    templateUrl: 'partials/header-bottom.html',
                    controller: 'checkstattus'
                },
                'first-clearfix': {
                    templateUrl: 'partials/terms.html'
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



        .state('privacy',{
            url:"/privacy",
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
                    templateUrl: 'partials/header-bottom.html',
                    controller: 'checkstattus'
                },
                'first-clearfix': {
                    templateUrl: 'partials/privacy.html'
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

        .state('disc',{
            url:"/disc",
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
                    templateUrl: 'partials/header-bottom.html',
                    controller: 'checkstattus'
                },
                'first-clearfix': {
                    templateUrl: 'partials/disc.html'
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



        .state('logout',{
            url:"/logout",
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
                    //controller: 'logout'
                },
                'topbar': {
                    templateUrl: 'partials/topbar.html',
                    controller: 'logout'
                },
                'header': {
                    templateUrl: 'partials/inner-header.html'
                    //controller: 'scotchController'
                },
                'header-bottom': {
                    templateUrl: 'partials/header-bottom.html',
                    controller: 'checkstattus'
                },
                'first-clearfix': {
                    templateUrl: 'partials/disc.html'
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

printbook.controller('login', function($scope,$http,$state,$cookieStore,$cookies) {



    $scope.submitloginForm = function(){
        //alert("Form submitted");
        $scope.msgFlag=false;

        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.printbook.in/ngmodule/login',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            if(data>0){

                $cookieStore.put('useremail',$scope.form.email);
                $cookieStore.put('userid',data);
                //var t=$cookieStore.get('userid');
                //alert($cookieStore.get('userid'));

                $state.go('index')
            }
            else{
                $scope.msgFlag=true;
                $cookieStore.put('useremail','');
                $cookieStore.put('userid',data);

            }

        });

    };


});


printbook.controller('logout', function($scope,$http,$state,$cookieStore,$cookies) {


    $scope.init = function () {
        $cookieStore.remove('useremail');
        $cookieStore.remove('userid');
        $state.go('index');
        //alert($cookieStore.get('userid'));
    };

    $scope.init();

});





printbook.controller('register', function($scope,$http,$state,$cookieStore,$cookies) {



    $scope.submitregisterForm = function(){
        //alert("Form submitted");
        $scope.msgFlag=false;

        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.printbook.in/ngmodule/register',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            if(data){



                $state.go('login')
            }
            else{
                $scope.msgFlag=true;


            }

        });

    };


});




printbook.controller('checkstattus', function($scope,$cookieStore,$cookies) {

    //$scope.loginFlag=true;

    $scope.init = function () {
        // check if there is query in url
        // and fire search in case its value is not empty

        if($cookieStore.get('userid')>0){
            //alert(45);
            $scope.loginFlag=false;
            $scope.logoutFlag=true;

        }
        else{
            $scope.loginFlag=true;
            $scope.logoutFlag=false;
        }



        //alert(87);


    };

        $scope.init();



});