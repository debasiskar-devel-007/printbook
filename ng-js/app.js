/**
 * Created by debasis on 18/7/15.
 */


'use strict';

/* App Module */

var printbook = angular.module('printbook', [
    'ui.router',
    'ngAnimate',
    'angularValidator',
    'ngCookies',
    'ngDialog',
    'ngFacebook'
    // 'homeControllers'
]);

printbook.config(function($stateProvider, $urlRouterProvider,$facebookProvider) {
    $facebookProvider.setAppId('130017683726086').setPermissions(['email','user_friends']);
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider
        .otherwise("/index");
    //
    // Now set up the states
    $stateProvider
        .state('index',{
            url:"/index",
            resolve:{
                'MyServiceData':function(MyService){
                    // MyServiceData will also be injectable in your controller, if you don't want this you could create a new promise with the $q service
                    return MyService.promise;
                }
            },
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
                    templateUrl: 'partials/header.html',
                    controller: 'header'
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
                    templateUrl: 'partials/inner-header.html',
                    controller: 'header'
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
            resolve:{
                'MyServiceData':function(MyService){
                    // MyServiceData will also be injectable in your controller, if you don't want this you could create a new promise with the $q service
                    return MyService.promise;
                }
            },
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
                    templateUrl: 'partials/inner-header.html',
                    controller: 'header'
                },
                'header-bottom': {
                    templateUrl: 'partials/header-bottom.html',
                    controller: 'checkstattus'
                },
                'first-clearfix': {
                    templateUrl: 'partials/testimonialbody.html',
                    controller: 'testimonialbody'
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
                    templateUrl: 'partials/inner-header.html',
                    controller: 'header'
                },
                'header-bottom': {
                    templateUrl: 'partials/header-bottom.html',
                    controller: 'checkstattus'
                },
                'first-clearfix': {
                    templateUrl: 'partials/contactbody.html',
                    controller: 'firstclearfix'
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
            url:"/customize/:categoryId",
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
                    templateUrl: 'partials/inner-header.html',
                    controller: 'header'
                },
                'header-bottom': {
                    templateUrl: 'partials/header-bottom.html',
                    controller: 'checkstattus'
                },
                'first-clearfix': {
                    templateUrl: 'partials/customize.html',
                     controller: 'customize'
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
            resolve:{
                'MyServiceData':function(MyService){
                    // MyServiceData will also be injectable in your controller, if you don't want this you could create a new promise with the $q service
                    return MyService.promise;
                }
            },
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
                    templateUrl: 'partials/inner-header.html',
                    controller: 'header'
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


        .state('googlelogin',{
            url:"/googlelogin",

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
                    templateUrl: 'partials/inner-header.html',
                    controller: 'header'
                },
                'header-bottom': {
                    templateUrl: 'partials/header-bottom.html',
                    controller: 'checkstattus'
                },
                'first-clearfix': {
                    templateUrl: 'partials/login.html',
                    controller: 'googlelogin'
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
                    templateUrl: 'partials/inner-header.html',
                    controller: 'header'
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
                    templateUrl: 'partials/inner-header.html',
                    controller: 'header'
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
                    templateUrl: 'partials/inner-header.html',
                    controller: 'header'
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
                    templateUrl: 'partials/inner-header.html',
                    controller: 'header'
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
                    templateUrl: 'partials/inner-header.html',
                    controller: 'header'
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


        .state('ontimepasswordchange',{
            url:"/ontimepasswordchange/:userId",
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
                    templateUrl: 'partials/topbar.html'
                    // controller: 'logout'
                },
                'header': {
                    templateUrl: 'partials/inner-header.html',
                    controller: 'header'
                },
                'header-bottom': {
                    templateUrl: 'partials/header-bottom.html'
                    // controller: 'checkstattus'
                },
                'first-clearfix': {
                    templateUrl: 'partials/disc.html',
                    controller: 'autologin'
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
})

    .run(['$rootScope', '$window', function($rootScope, $window) {
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        $rootScope.$on('fb.load', function() {
            $window.dispatchEvent(new Event('fb.load'));
        });
    }]);



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




printbook.controller('firstclearfix', function($scope,$http,ngDialog,$state,MyService) {




    $scope.submitcontactForm = function(){
        //alert("Form submitted");
        $scope.msgFlag=false;
        var posting=ngDialog.open({
            template: '<p>In Progress .. Please wait ! </p>',
            plain: true
        });

        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.printbook.in/ngmodule/contactcreate',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            posting.close();
            ngDialog.open({
                template: '<p>Thank You! We will get back to you asap !! </p>',
                plain: true
            });

            // ngDialog.closeAll();
            // $scope.form.$setPristine();
            //$scope.contact.$setUntouched();
            $state.reload();

        });

    };



    var data=(MyService.doStuff('banner'));
    //alert(data);

    $scope.friends=(data);


    $scope.init = function () {
        // check if there is query in url
        // and fire search in case its value is not empty

        var x;










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

        //$scope.callhttp();


    };
    setTimeout(function(){
        $scope.init();

    },2000);



});





printbook.controller('header', function($scope,$http,ngDialog,$state,MyService) {







    var data=(MyService.doStuff('category'));
    ///alert(data);

    $scope.categories=(data);





});




printbook.service('MyService', function($http) {
    var myData = null;
    var testimonialjson = null;
    var categoryjson = null;

    var promise = $http.get('http://admin.printbook.in/ngmodule/getbanners').success(function (data) {
        //alert(data);
        myData=data;
    });
    var testimonialdata = $http.get('http://admin.printbook.in/ngmodule/gettestimonials').success(function (testimonials) {
        //alert(testimonials);
        testimonialjson=testimonials;
    });
    var categorydata = $http.get('http://admin.printbook.in/ngmodule/getcategories').success(function (category) {
        //alert(testimonials);
        categoryjson=category;
    });

    return {
        promise:promise,
        setData: function (data) {
            myData = data;
        },
        doStuff: function (t) {
            //alert(myData);
            if(t=='banner')
            //alert(data);
                return myData;//.getSomeData();
            if(t=='testimonial'){
                return testimonialjson;

            }

            if(t=='category'){
                return categoryjson;

            }
        },
        putdata:function(userInfo){

            /*  $scope.userinfo['name']=userInfo['displayName'];
             $scope.userinfo['id']=userInfo['id'];
             $scope.userinfo['email']=userInfo['emails'][0]['value'];*/
            //alert("uin"+userInfo)






        }
    };

});


printbook.controller('googlelogin',function($scope,$http,$state,$cooke){


    $http({
        method  : 'POST',
        async:   false,
        url     : 'http://admin.printbook.in/ngmodule/facebooklogin',
        data    : {name:userInfo['displayName'],email:userInfo['emails'][0]['value'],id:userInfo['id']},  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        //alert(data);
        if(data>0){

            $cookieStore.put('useremail',userInfo['emails'][0]['value']);
            $cookieStore.put('userid',data);
            //var t=$cookieStore.get('userid');
            //alert($cookieStore.get('userid'));

            $state.go('index');
            //loginprocess.close();

        }
        else{
            alert(8);
            //$scope.msgFlag=true;
            $cookieStore.put('useremail','');
            $cookieStore.put('userid',data);

        }

    });

});




printbook.controller('testimonialbody', function($scope,$http,ngDialog,$state,MyService) {








    var data=(MyService.doStuff('testimonial'));
    //alert(data);

    $scope.testimonial=(data);


    $scope.curPage = 0;
    $scope.pageSize = 6;

    $scope.numberOfPages = function()
    {
        return Math.ceil($scope.testimonial.length / $scope.pageSize);
    };







});

printbook.filter('pagination', function()
{
    return function(input, start)
    {
        start = +start;
        return input.slice(start);
    };
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

printbook.controller('login', function($scope,$http,$state,$cookieStore,$cookies,$facebook,MyService) {
    $scope.triggeredLogin=0;
    //var loginprocess
    $scope.userinfo;


    $scope.signedIn = false;

    // Here we do the authentication processing and error handling.
    // Note that authResult is a JSON object.
    $scope.processAuth = function(authResult) {
        // Do a check if authentication has been successful.
        if(authResult['access_token']) {
            // Successful sign in.
            $scope.signedIn = true;
            gapi.client.request(
                {
                    'path':'/plus/v1/people/me',
                    'method':'GET',
                    'callback': $scope.userInfoCallback
                }
            );

            //     ...
            // Do some work [1].
            //     ...
        } else {
            // Error while signing in.
            $scope.signedIn = false;
            $scope.renderSignInButton();

            // Report error.
        }
    };
    $scope.processUserInfo=function(userInfo){
        //alert(userInfo);
        $cookieStore.put('googledata',userInfo);
        //state.go('googlelogin');
        $scope.loginToggle2(userInfo);


    };
    $scope.userInfoCallback = function(userInfo) {
        //alert((userInfo));
        var useri;
        var useremail;
        //alert(userInfo['displayName']);
        /*$scope.userinfo['name']=userInfo['displayName'];
         $scope.userinfo['id']=userInfo['id'];
         $scope.userinfo['email']=userInfo['emails'][0]['value'];
         alert($scope.userinfo);*/



        /*for(useri in userInfo){
         //alert(userInfo[useri]+"=="+useri);
         }
         for(useremail in userInfo['emails'][0]){
         alert(userInfo['emails'][0][useremail]+"=="+useremail);
         }*/
        $scope.$apply(function() {
            //alert(34);
            $scope.processUserInfo(userInfo);

        });
    };

    // When callback is received, we need to process authentication.
    $scope.signInCallback = function(authResult) {
        $scope.$apply(function() {
            //alert(authResult);

            $scope.processAuth(authResult);
        });
    };



    $scope.renderSignInButton = function() {
        gapi.signin.render('signInButton',
            {
                'callback': $scope.signInCallback, // Function handling the callback.
                'clientid': '1096579005756-57c2soasher3bbs6e6neetcbmduitc9f.apps.googleusercontent.com', // CLIENT_ID from developer console which has been explained earlier.
                'requestvisibleactions': 'http://schemas.google.com/AddActivity', // Visible actions, scope and cookie policy wont be described now,
                                                                                  // as their explanation is available in Google+ API Documentation.
                'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email',
                'cookiepolicy': 'single_host_origin'
            }
        );
    }


    $scope.$on('fb.auth.authResponseChange', function() {
        $scope.status = $facebook.isConnected();
        if($scope.status) {
            $facebook.api('/me').then(function(user) {
                //alert(user);
                //var x;
                //for(x in user) alert(user[x]+"=="+x);
                $scope.user = user;
            });
            if($scope.triggeredLogin==1) {
                $scope.loginToggle();
                //$scope.loginToggle();

                $scope.triggeredLogin=0;


            }
        }
    });
    var loginproces=

        $scope.loginToggle = function() {


            setTimeout(function(){
                $scope.loginToggle1();
            },3000);
            $scope.loginToggle1();
            //alert($scope.status);
            if($scope.status) {


                $http({
                    method  : 'POST',
                    async:   false,
                    url     : 'http://admin.printbook.in/ngmodule/facebooklogin',
                    data    : $.param($scope.user),  // pass in data as strings
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
                }) .success(function(data) {
                    //alert(data);
                    if(data>0){

                        $cookieStore.put('useremail',$scope.user.email);
                        $cookieStore.put('userid',data);
                        //var t=$cookieStore.get('userid');
                        //alert($cookieStore.get('userid'));

                        $state.go('index');
                        loginprocess.close();

                    }
                    else{
                        $scope.msgFlag=true;
                        $cookieStore.put('useremail','');
                        $cookieStore.put('userid',data);

                    }

                });

                // $facebook.logout();
            } else {
                $facebook.login();
                $scope.triggeredLogin=1;
            }

        };






    $scope.loginToggle = function() {


        setTimeout(function(){
            $scope.loginToggle1();
        },3000);
        $scope.loginToggle2();
        //alert($scope.status);
        if($scope.status) {


            $http({
                method  : 'POST',
                async:   false,
                url     : 'http://admin.printbook.in/ngmodule/googlelogin',
                data    : $.param($scope.user),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }) .success(function(data) {
                //alert(data);
                if(data>0){

                    $cookieStore.put('useremail',$scope.user.email);
                    $cookieStore.put('userid',data);
                    //var t=$cookieStore.get('userid');
                    //alert($cookieStore.get('userid'));

                    $state.go('index');
                    loginprocess.close();

                }
                else{
                    $scope.msgFlag=true;
                    $cookieStore.put('useremail','');
                    $cookieStore.put('userid',data);

                }

            });

            // $facebook.logout();
        } else {
            $facebook.login();
            $scope.triggeredLogin=1;
        }

    };






    $scope.loginToggle1 = function() {
        //alert($scope.status);
        if($scope.status) {


            $http({
                method  : 'POST',
                async:   false,
                url     : 'http://admin.printbook.in/ngmodule/facebooklogin',
                data    : $.param($scope.user),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }) .success(function(data) {
                //alert(data);
                if(data>0){

                    $cookieStore.put('useremail',$scope.user.email);
                    $cookieStore.put('userid',data);
                    //var t=$cookieStore.get('userid');
                    //alert($cookieStore.get('userid'));

                    $state.go('index');
                    //loginprocess.close();

                }
                else{
                    $scope.msgFlag=true;
                    $cookieStore.put('useremail','');
                    $cookieStore.put('userid',data);

                }

            });

            // $facebook.logout();
        } else {
            //$facebook.login();
            $scope.triggeredLogin=1;
            //$scope.loginToggle();
        }

    };

    $scope.loginToggle2 = function(userInfo) {
        //alert($scope.status);
        if($scope.status) {


            $http({
                method  : 'POST',
                async:   false,
                url     : 'http://admin.printbook.in/ngmodule/googlelogin',
                data    : $.param(userInfo),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }) .success(function(data) {
                //alert(data);
                if(data>0){

                    $cookieStore.put('useremail',userInfo['emails'][0]['value']);
                    $cookieStore.put('userid',data);
                    //var t=$cookieStore.get('userid');
                    //alert($cookieStore.get('userid'));

                    $state.go('index');
                    //loginprocess.close();

                }
                else{
                    $scope.msgFlag=true;
                    $cookieStore.put('useremail','');
                    $cookieStore.put('userid',data);

                }

            });

            // $facebook.logout();
        } else {
            //$facebook.login();
            $scope.triggeredLogin=1;
            //$scope.loginToggle();
        }

    };

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

                $state.go('index');
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





printbook.controller('register', function($scope,$http,$state,$cookieStore,$cookies,ngDialog) {


    $scope.passwordValidator = function(password) {

        if(!password){return;}

        if (password.length < 6) {
            return "Password must be at least " + 6 + " characters long";
        }

        if (!password.match(/[A-Z]/)) {
            return "Password must have at least one capital letter";
        }

        if (!password.match(/[0-9]/)) {
            return "Password must have at least one number";
        }

        return true;
    };

    $scope.usernamevalidator = function(username,$http) {



        if(!username){return;}
        if (username.length < 6) {
            return "User name must be at least " + 6 + " characters long";
        }


        /*if($scope.usernamecheckserver(username)!=true)
         return 'User name already exists';*/





        return true;
    };


    $scope.usernamecheckserver = function(username) {







        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.printbook.in/ngmodule/checkusername',
            data    : {username: username},  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            //alert(data);
            if(data==false){
                return true;


                //$state.go('login')
            }
            else{
                // $scope.msgFlag=true;
                return "This User Name Already Exists  ";


            }

        });




    };





    $scope.submitregisterForm = function(){
        //alert("Form submitted");
        //$scope.msgFlag=false;
        var regpost=ngDialog.open({
            template: '<p>Processing ...Please wait !  </p>',
            plain: true
        });

        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.printbook.in/ngmodule/register',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $scope.emailmsgFlag=false;
            $scope.usermsgFlag=false;
            if(data=='username'){




                //$state.go('login')
                $scope.usermsgFlag=true;

            }
            if(data=='email'){
                // $scope.msgFlag=true;
                $scope.emailmsgFlag=true;


            }

            if(data=="true"){
                $state.go('login');
                regpost.close();
                ngDialog.open({
                    template: '<p>You Registration is Successful .. You can Check your email and continue to use our website by <a ui-sref="login">login</a> here by closing this ! </p>',
                    plain: true
                });
                // $scope.msgFlag=true;
                //$scope.emailmsgFlag=true;


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

printbook.controller('customize', function($scope,$cookieStore,$cookies,$stateParams,$http,$state) {

    //alert($stateParams.categoryId);

    $scope.init = function () {
        // check if there is query in url
        // and fire search in case its value is not empty

        /*if($cookieStore.get('userid')>0){
         //alert(45);
         $scope.loginFlag=false;
         $scope.logoutFlag=true;

         }
         else{
         $scope.loginFlag=true;
         $scope.logoutFlag=false;
         }*/

        $http({
            method  : 'GET',
            async:   false,
            url     : 'http://admin.printbook.in/ngmodule/getproductlist?category_id='+$stateParams.categoryId,
            data    : {category_id: $stateParams.categoryId},  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
           alert(data);
            if(data!=0){
                $scope.products=data;
                alert(7);



                //$state.go('index');
            }
            else{
                /*$scope.msgFlag=true;
                 $cookieStore.put('useremail','');
                 $cookieStore.put('userid',data);*/
                $scope.showval=true;
                alert(8);
                $scope.products=false;


            }

        });




        //alert($stateParams.userId);


    };

    $scope.init();

});



printbook.controller('autologin', function($scope,$cookieStore,$cookies,$stateParams,$http,$state) {

    //$scope.loginFlag=true;

    $scope.init = function () {
        // check if there is query in url
        // and fire search in case its value is not empty

        /*if($cookieStore.get('userid')>0){
         //alert(45);
         $scope.loginFlag=false;
         $scope.logoutFlag=true;

         }
         else{
         $scope.loginFlag=true;
         $scope.logoutFlag=false;
         }*/

        $http({
            method  : 'POST',
            async:   false,
            url     : 'http://admin.printbook.in/ngmodule/autologin',
            data    : {username: $stateParams.userId},  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            if(data!=0){

                //alert(data['mail']);
                //alert(data['uid']);
                $cookieStore.put('useremail',data['mail']);
                $cookieStore.put('userid',data['uid']);
                //var t=$cookieStore.get('userid');
                //alert($cookieStore.get('userid'));

                $state.go('index');
            }
            else{
                /*$scope.msgFlag=true;
                 $cookieStore.put('useremail','');
                 $cookieStore.put('userid',data);*/
                ngDialog.open({
                    template: '<p>Your Email verification was unsuccessful , try again!! </p>',
                    plain: true
                });

            }

        });




        //alert($stateParams.userId);


    };

    $scope.init();



});