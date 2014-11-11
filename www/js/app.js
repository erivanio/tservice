// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.directives'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    // Tela de bem vindo
    .state('welcome', {
        url: '/welcome',
        templateUrl: 'templates/welcome.html',
        controller: 'welcomeCtrl'
    })

    // Selecionar guia da cidade
    .state('select-city', {
        url: '/select-city',
        templateUrl: 'templates/select-city.html',
        controller: 'CityCtrl'
    })

    // Menu abas
    .state('tabs', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })


    // Pagina inicial da cidade
    .state('tabs.home', {
        url: '/home',
        views: {
            'home-tab': {
                templateUrl: 'templates/home.html',
            }
        }
    })




    // Cidades
    .state('tabs.cidade-info', {
        url: '/cidade-info',
        views: {
            'home-tab': {
                templateUrl: 'templates/cidade-info.html',
            }
        }

    })


    // Pontos Turisticos
    .state('tabs.ponto-turistico-listagem', {
        url: '/ponto-turistico-listagem',
        views: {
            'home-tab': {
                templateUrl: 'templates/ponto-turistico-listagem.html',
                controller: 'pontoTuristicoListCtrl'
            }
        }
    })

    .state('tabs.ponto-turistico', {
        url: "/ponto-turistico-listagem/:itemId",
        views: {
            'home-tab': {
                templateUrl: "templates/ponto-turistico.html",
                controller: 'pontoTuristicoCtrl'
            }
        }
    })


    // Galeria de fotos
    .state('tabs.galeria-fotos', {
        url: '/galeria-fotos',
        views: {
            'home-tab': {
                templateUrl: 'templates/galeria-fotos.html',
            }
        }

    })

    // Bares e Eventos
    .state('tabs.bar-listagem', {
        url: '/bar-listagem',
        views: {
            'home-tab': {
                templateUrl: 'templates/bar-listagem.html',
                controller: 'barListCtrl'
            }
        }
    })

    .state('tabs.bar-eventos', {
        url: "/bar-listagem/:itemId",
        views: {
            'home-tab': {
                templateUrl: "templates/bar.html",
                controller: 'barCtrl'
            }
        }
    })


    // Onde comer
    .state('tabs.restaurante-listagem', {
        url: '/restaurante-listagem',
        views: {
            'home-tab': {
                templateUrl: 'templates/restaurante-listagem.html',
                controller: 'restauranteListCtrl'
            }
        }
    })

    .state('tabs.restaurante', {
        url: "/restaurante-listagem/:itemId",
        views: {
            'home-tab': {
                templateUrl: "templates/restaurante.html",
                controller: 'restauranteCtrl'
            }
        }
    })

     // Onde comprar
    .state('tabs.comprar-listagem', {
        url: '/comprar-listagem',
        views: {
            'home-tab': {
                templateUrl: 'templates/comprar-listagem.html',
                controller: 'comprarListCtrl'
            }
        }
    })

    .state('tabs.comprar', {
        url: "/comprar-listagem/:itemId",
        views: {
            'home-tab': {
                templateUrl: "templates/comprar.html",
                controller: 'comprarCtrl'
            }
        }
    })

     // Aeroporto
    .state('tabs.aeroporto-listagem', {
        url: '/aeroporto-listagem',
        views: {
            'home-tab': {
                templateUrl: 'templates/aeroporto-listagem.html',
                controller: 'aeroportoListCtrl'
            }
        }
    })

    .state('tabs.aeroporto', {
        url: "/aeroporto-listagem/:itemId",
        views: {
            'home-tab': {
                templateUrl: "templates/aeroporto.html",
                controller: 'aeroportoCtrl'
            }
        }
    })


    // hotel
    .state('tabs.hotel-listagem', {
        url: '/hotel-listagem',
        views: {
            'home-tab': {
                templateUrl: 'templates/hotel-listagem.html',
                controller: 'hotelListCtrl'
            }
        }
    })

    .state('tabs.hotel', {
        url: "/hotel-listagem/:itemId",
        views: {
            'home-tab': {
                templateUrl: "templates/hotel.html",
                controller: 'hotelCtrl'
            }
        }
    })


    // hospital
    .state('tabs.hospital-listagem', {
        url: '/hospital-listagem',
        views: {
            'home-tab': {
                templateUrl: 'templates/hospital-listagem.html',
                controller: 'hospitalListCtrl'
            }
        }
    })

    .state('tabs.hospital', {
        url: "/hospital-listagem/:itemId",
        views: {
            'home-tab': {
                templateUrl: "templates/hospital.html",
                controller: 'hospitalCtrl'
            }
        }
    })










    // .state('tabs.facts', {
    //   url: '/facts',
    //   views: {
    //     'home-tab': {
    //       templateUrl: 'templates/facts.html',
    //     }
    //   }
    // })


    .state('tabs.about', {
        url: '/about',
        views: {
            'about-tab': {
                templateUrl: 'templates/about.html',
            }
        }

    });

    $urlRouterProvider.otherwise('/welcome');

})
