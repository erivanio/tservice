

angular.module('starter.controllers', [])


.controller('welcomeCtrl', function($scope, $state) {

  $scope.welcome = function(selectcity) {
    console.log('welcome', selectcity);
    $state.go('select-city');
  };

})



// Controller Listagem de cidades
.controller('CityCtrl', function($scope) {
  $scope.cidades = [
    { id: 1, nome: 'Aracaju', regiao:'Nordeste', estado: 'Sergipe', image: 'img/default_avatar.png' },
    { id: 2, nome: 'Belém', regiao:'Norte', estado: 'Pará', image: 'img/default_avatar.png' },
    { id: 3, nome: 'Belo Horizonte', regiao:'Sudeste', estado: 'Minas Gerais', image:'img/default_avatar.png' },
    { id: 4, nome: 'Boa Vista', regiao:'Norte', estado: 'Roraima', image: 'img/default_avatar.png' },
    { id: 5, nome: 'Brasília', regiao:'Centro-Oeste', estado: 'Distrito Federal', image: 'img/default_avatar.png' },
    { id: 6, nome: 'Campo Grande', regiao:'Centro-Oeste', estado: 'Mato Grosso do Sul', image: 'img/default_avatar.png' },
    { id: 7, nome: 'Cuiabá', regiao:'Centro-Oeste', estado: 'Mato Grosso', image: 'img/default_avatar.png' },
    { id: 9, nome: 'Curitiba', regiao:'Sul', estado: 'Paraná', image: 'img/default_avatar.png' },
    { id: 10, nome: 'Florianópolis', regiao:'Sul', estado: 'Santa Catarina', image: 'img/default_avatar.png' },
    { id: 11, nome: 'Fortaleza', regiao:'Nordeste', estado: 'Ceará', image: 'img/default_avatar.png' },
    { id: 12, nome: 'Goiânia', regiao:'Centro-Oeste', estado: 'Goiás', image: 'img/default_avatar.png' },
    { id: 13, nome: 'João Pessoa', regiao:'Nordeste', estado: 'Paraíba', image: 'img/default_avatar.png' },
    { id: 14, nome: 'Macapá', regiao:'Nordeste', estado: 'Amapá', image: 'img/default_avatar.png' },
    { id: 15, nome: 'Maceió', regiao:'Nordeste', estado: 'Alagoas', image: 'img/default_avatar.png' },
    { id: 16, nome: 'Manaus', regiao:'Norte', estado: 'Amazonas', image: 'img/default_avatar.png' },
    { id: 17, nome: 'Natal', regiao:'Nordeste', estado: 'Rio Grande do Norte', image: 'img/default_avatar.png' },
    { id: 18, nome: 'Palmas', regiao:'Norte', estado: 'Tocantins', image: 'img/default_avatar.png' },
    { id: 19, nome: 'Porto Alegre', regiao:'Sul', estado: 'Rio Grande do Sul', image: 'img/default_avatar.png' },
    { id: 20, nome: 'Porto Velho', regiao:'Norte', estado: 'Rondônia', image: 'img/default_avatar.png' },
    { id: 21, nome: 'Recife', regiao:'Nordeste', estado: 'Pernambuco', image: 'img/default_avatar.png' },
    { id: 22, nome: 'Rio Branco', regiao:'Norte', estado: 'Acre', image: 'img/default_avatar.png' },
    { id: 23, nome: 'Rio de Janeiro', regiao:'Sudeste', estado: 'Rio de Janeiro', image: 'img/default_avatar.png' },
    { id: 24, nome: 'Salvador', regiao:'Nordeste', estado: 'Bahia', image: 'img/default_avatar.png' },
    { id: 25, nome: 'São Luís', regiao:'Nordeste', estado: 'Maranhão', image: 'img/default_avatar.png' },
    { id: 26, nome: 'São Paulo', regiao:'Sudeste', estado: 'São Paulo', image: 'img/default_avatar.png' },
    { id: 27, nome: 'Teresina', regiao:'Nordeste', estado: 'Piauï', image: 'img/default_avatar.png' },
    { id: 28, nome: 'Vitória', regiao:'Sudeste', estado: 'Espirito Santo', image: 'img/default_avatar.png' },
  ];
})

// Controller Pontos turisticos
.controller('pontoTuristicoListCtrl', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'https://api.foursquare.com/v2/venues/search',
        params: {
            client_id: '2N0PWB40UFHJHR241VQLWGDIO2U2YTW25Y5V43RICJNGY0KN',
            client_secret: 'DXCWKFNTHT2VGJZYHNNRF4WYBF4QEAVE3KQVNUPG1EIGGM0R',
            v: '20130815',
            ll: '-5.121055, -42.799063',
            categoryId: '4d4b7104d754a06370d81259,4d4b7105d754a06373d81259'}
    }).success(function (data) {
        $scope.items = data.response.venues;
    }).error(function(){
        console.log('deu erro');
    });





//  $scope.items = [
//    { id: 1,
//      categoria_local:'Teatro',
//      nome_local: 'Teatro 4 de Setembro',
//      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg'
//    },
//    { id: 2,
//      categoria_local:'Museu',
//      nome_local: 'Museu do Piaui',
//      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg'
//    },
//  ];
 })

.controller('pontoTuristicoCtrl', function($scope, $stateParams, $ionicModal, $http) {

    $http({
        method: 'GET',
        url: 'https://api.foursquare.com/v2/venues/'+ $stateParams.itemId,
        params: {
            client_id: '2N0PWB40UFHJHR241VQLWGDIO2U2YTW25Y5V43RICJNGY0KN',
            client_secret: 'DXCWKFNTHT2VGJZYHNNRF4WYBF4QEAVE3KQVNUPG1EIGGM0R',
            v: '20130815'}
    }).success(function (data) {
        $scope.item = data.response.venue;
        console.log(data);
    }).error(function(){
        console.log('deu erro');
    });



//    $scope.items = [
//    { id: 1,
//      categoria_local:'Teatro',
//      nome_local: 'Teatro 4 de Setembro',
//      tel_local:'86 3215-7829',
//      email_local:'email@email.com',
//      site_local:'www.site.com.br',
//      info_local: 'Localizado na Praça Pedro II, o Teatro 4 de Setembro, há mais de 100 anos, recebe em seu palco atrações nacionais e internacionais, entre elas peças teatrais, espetáculos de dança e shows musicais. Sua fachada é inspirada na arquitetura portuguesa com detalhes greco-romanos. O Teatro 4 de Setembro é interligado ao Clube dos Diários, outro espaço que recebe as mais diversas manifestações culturais. Teresina possui, ainda, outras casas de espetáculos, como o Teatro Municipal João Paulo II, no bairro Dirceu Arcoverde, e o Teatro do Boi, no bairro Matadouro e o Palácio da Música na famosa Rua da Pactuba, cantada por Torquato Neto.',
//      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg'
//    },
//    { id: 2,
//      categoria_local:'Museu',
//      nome_local: 'Museu do piaui',
//      tel_local:'86 3215-7829',
//      email_local:'email@email.com',
//      site_local:'www.site.com.br',
//      info_local: 'Localizado na Praça Pedro II, o Teatro 4 de Setembro, há mais de 100 anos, recebe em seu palco atrações nacionais e internacionais, entre elas peças teatrais, espetáculos de dança e shows musicais. Sua fachada é inspirada na arquitetura portuguesa com detalhes greco-romanos. O Teatro 4 de Setembro é interligado ao Clube dos Diários, outro espaço que recebe as mais diversas manifestações culturais. Teresina possui, ainda, outras casas de espetáculos, como o Teatro Municipal João Paulo II, no bairro Dirceu Arcoverde, e o Teatro do Boi, no bairro Matadouro e o Palácio da Música na famosa Rua da Pactuba, cantada por Torquato Neto.',
//      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg'
//    },
//  ];
  
  $ionicModal.fromTemplateUrl('templates/modal-addavaliacao.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.createContact = function(u) {        
      $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
      $scope.modal.hide();
    };
 })



// Controller Galeria de fotos
.controller('galeriaFotosCtrl', function($scope, $ionicModal) {

  $scope.fotos = [
    { id: 1, nome:'Igreja São Benedito', autor: 'Pedro',info:'lugar lindo e bem divertido', image: 'img/teresina.jpg' },
    { id: 2, nome:'Teatro 4 de Setembro', autor: 'Filipe Raiz',info:'Um local otimo de se conhecer', image:'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' },
  ];

  $ionicModal.fromTemplateUrl('templates/modal-addfotos.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.createContact = function(u) {        
    $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
    $scope.modal.hide();
  };

 })


// Controller Bares e Eventos
.controller('barListCtrl', function($scope) {
  $scope.items = [
    { id: 1, 
      nome_local: 'Budega', 
      categoria_local:'Noturno',
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
    { id: 2, 
      nome_local: 'Seu Boteco', 
      categoria_local:'Restaurante',
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
  ];
 })

.controller('barCtrl', function($scope, $stateParams) {
  $scope.items = [
    { id: 1, 
      categoria_local:'Teatro',
      nome_local: 'Teatro 4 de Setembro', 
      tel_local:'86 3215-7829',
      email_local:'email@email.com',
      site_local:'www.site.com.br',
      info_local: 'Localizado na Praça Pedro II, o Teatro 4 de Setembro, há mais de 100 anos, recebe em seu palco atrações nacionais e internacionais, entre elas peças teatrais, espetáculos de dança e shows musicais. Sua fachada é inspirada na arquitetura portuguesa com detalhes greco-romanos. O Teatro 4 de Setembro é interligado ao Clube dos Diários, outro espaço que recebe as mais diversas manifestações culturais. Teresina possui, ainda, outras casas de espetáculos, como o Teatro Municipal João Paulo II, no bairro Dirceu Arcoverde, e o Teatro do Boi, no bairro Matadouro e o Palácio da Música na famosa Rua da Pactuba, cantada por Torquato Neto.', 
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
    { id: 2, 
      categoria_local:'Museu',
      nome_local: 'Museu do piaui', 
      tel_local:'86 3215-7829',
      email_local:'email@email.com',
      site_local:'www.site.com.br',
      info_local: 'Localizado na Praça Pedro II, o Teatro 4 de Setembro, há mais de 100 anos, recebe em seu palco atrações nacionais e internacionais, entre elas peças teatrais, espetáculos de dança e shows musicais. Sua fachada é inspirada na arquitetura portuguesa com detalhes greco-romanos. O Teatro 4 de Setembro é interligado ao Clube dos Diários, outro espaço que recebe as mais diversas manifestações culturais. Teresina possui, ainda, outras casas de espetáculos, como o Teatro Municipal João Paulo II, no bairro Dirceu Arcoverde, e o Teatro do Boi, no bairro Matadouro e o Palácio da Música na famosa Rua da Pactuba, cantada por Torquato Neto.', 
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
  ];
 })


// Controller Onde comer
.controller('restauranteListCtrl', function($scope) {
  $scope.items = [
    { id: 1, 
      nome_local: 'Budega', 
      categoria_local:'Noturno',
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
    { id: 2, 
      nome_local: 'Seu Boteco', 
      categoria_local:'Restaurante',
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
  ];
 })

.controller('restauranteCtrl', function($scope, $stateParams) {
  $scope.items = [
    { id: 1, 
      categoria_local:'Teatro',
      nome_local: 'Teatro 4 de Setembro', 
      tel_local:'86 3215-7829',
      email_local:'email@email.com',
      site_local:'www.site.com.br',
      info_local: 'Localizado na Praça Pedro II, o Teatro 4 de Setembro, há mais de 100 anos, recebe em seu palco atrações nacionais e internacionais, entre elas peças teatrais, espetáculos de dança e shows musicais. Sua fachada é inspirada na arquitetura portuguesa com detalhes greco-romanos. O Teatro 4 de Setembro é interligado ao Clube dos Diários, outro espaço que recebe as mais diversas manifestações culturais. Teresina possui, ainda, outras casas de espetáculos, como o Teatro Municipal João Paulo II, no bairro Dirceu Arcoverde, e o Teatro do Boi, no bairro Matadouro e o Palácio da Música na famosa Rua da Pactuba, cantada por Torquato Neto.', 
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
    { id: 2, 
      categoria_local:'Museu',
      nome_local: 'Museu do piaui', 
      tel_local:'86 3215-7829',
      email_local:'email@email.com',
      site_local:'www.site.com.br',
      info_local: 'Localizado na Praça Pedro II, o Teatro 4 de Setembro, há mais de 100 anos, recebe em seu palco atrações nacionais e internacionais, entre elas peças teatrais, espetáculos de dança e shows musicais. Sua fachada é inspirada na arquitetura portuguesa com detalhes greco-romanos. O Teatro 4 de Setembro é interligado ao Clube dos Diários, outro espaço que recebe as mais diversas manifestações culturais. Teresina possui, ainda, outras casas de espetáculos, como o Teatro Municipal João Paulo II, no bairro Dirceu Arcoverde, e o Teatro do Boi, no bairro Matadouro e o Palácio da Música na famosa Rua da Pactuba, cantada por Torquato Neto.', 
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
  ];
 })


// Controller Onde comer
.controller('comprarListCtrl', function($scope) {
  $scope.items = [
    { id: 1, 
      nome_local: 'Budega', 
      categoria_local:'Noturno',
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
    { id: 2, 
      nome_local: 'Seu Boteco', 
      categoria_local:'Restaurante',
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
  ];
 })

.controller('comprarCtrl', function($scope, $stateParams) {
  $scope.items = [
    { id: 1, 
      categoria_local:'Teatro',
      nome_local: 'Teatro 4 de Setembro', 
      tel_local:'86 3215-7829',
      email_local:'email@email.com',
      site_local:'www.site.com.br',
      info_local: 'Localizado na Praça Pedro II, o Teatro 4 de Setembro, há mais de 100 anos, recebe em seu palco atrações nacionais e internacionais, entre elas peças teatrais, espetáculos de dança e shows musicais. Sua fachada é inspirada na arquitetura portuguesa com detalhes greco-romanos. O Teatro 4 de Setembro é interligado ao Clube dos Diários, outro espaço que recebe as mais diversas manifestações culturais. Teresina possui, ainda, outras casas de espetáculos, como o Teatro Municipal João Paulo II, no bairro Dirceu Arcoverde, e o Teatro do Boi, no bairro Matadouro e o Palácio da Música na famosa Rua da Pactuba, cantada por Torquato Neto.', 
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
    { id: 2, 
      categoria_local:'Museu',
      nome_local: 'Museu do piaui', 
      tel_local:'86 3215-7829',
      email_local:'email@email.com',
      site_local:'www.site.com.br',
      info_local: 'Localizado na Praça Pedro II, o Teatro 4 de Setembro, há mais de 100 anos, recebe em seu palco atrações nacionais e internacionais, entre elas peças teatrais, espetáculos de dança e shows musicais. Sua fachada é inspirada na arquitetura portuguesa com detalhes greco-romanos. O Teatro 4 de Setembro é interligado ao Clube dos Diários, outro espaço que recebe as mais diversas manifestações culturais. Teresina possui, ainda, outras casas de espetáculos, como o Teatro Municipal João Paulo II, no bairro Dirceu Arcoverde, e o Teatro do Boi, no bairro Matadouro e o Palácio da Música na famosa Rua da Pactuba, cantada por Torquato Neto.', 
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
  ];
 })

// Controller Aeroporto
.controller('aeroportoListCtrl', function($scope) {
  $scope.items = [
    { id: 1, 
      nome_local: 'Budega', 
      categoria_local:'Noturno',
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
    { id: 2, 
      nome_local: 'Seu Boteco', 
      categoria_local:'Restaurante',
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
  ];
 })

.controller('aeroportoCtrl', function($scope, $stateParams) {
  $scope.items = [
    { id: 1, 
      categoria_local:'Teatro',
      nome_local: 'Teatro 4 de Setembro', 
      tel_local:'86 3215-7829',
      email_local:'email@email.com',
      site_local:'www.site.com.br',
      info_local: 'Localizado na Praça Pedro II, o Teatro 4 de Setembro, há mais de 100 anos, recebe em seu palco atrações nacionais e internacionais, entre elas peças teatrais, espetáculos de dança e shows musicais. Sua fachada é inspirada na arquitetura portuguesa com detalhes greco-romanos. O Teatro 4 de Setembro é interligado ao Clube dos Diários, outro espaço que recebe as mais diversas manifestações culturais. Teresina possui, ainda, outras casas de espetáculos, como o Teatro Municipal João Paulo II, no bairro Dirceu Arcoverde, e o Teatro do Boi, no bairro Matadouro e o Palácio da Música na famosa Rua da Pactuba, cantada por Torquato Neto.', 
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
    { id: 2, 
      categoria_local:'Museu',
      nome_local: 'Museu do piaui', 
      tel_local:'86 3215-7829',
      email_local:'email@email.com',
      site_local:'www.site.com.br',
      info_local: 'Localizado na Praça Pedro II, o Teatro 4 de Setembro, há mais de 100 anos, recebe em seu palco atrações nacionais e internacionais, entre elas peças teatrais, espetáculos de dança e shows musicais. Sua fachada é inspirada na arquitetura portuguesa com detalhes greco-romanos. O Teatro 4 de Setembro é interligado ao Clube dos Diários, outro espaço que recebe as mais diversas manifestações culturais. Teresina possui, ainda, outras casas de espetáculos, como o Teatro Municipal João Paulo II, no bairro Dirceu Arcoverde, e o Teatro do Boi, no bairro Matadouro e o Palácio da Música na famosa Rua da Pactuba, cantada por Torquato Neto.', 
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
  ];
 })

// Controller hotel
.controller('hotelListCtrl', function($scope) {
  $scope.items = [
    { id: 1, 
      nome_local: 'Budega', 
      categoria_local:'Noturno',
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
    { id: 2, 
      nome_local: 'Seu Boteco', 
      categoria_local:'Restaurante',
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
  ];
 })

.controller('hotelCtrl', function($scope, $stateParams) {
  $scope.items = [
    { id: 1, 
      categoria_local:'Teatro',
      nome_local: 'Teatro 4 de Setembro', 
      tel_local:'86 3215-7829',
      email_local:'email@email.com',
      site_local:'www.site.com.br',
      info_local: 'Localizado na Praça Pedro II, o Teatro 4 de Setembro, há mais de 100 anos, recebe em seu palco atrações nacionais e internacionais, entre elas peças teatrais, espetáculos de dança e shows musicais. Sua fachada é inspirada na arquitetura portuguesa com detalhes greco-romanos. O Teatro 4 de Setembro é interligado ao Clube dos Diários, outro espaço que recebe as mais diversas manifestações culturais. Teresina possui, ainda, outras casas de espetáculos, como o Teatro Municipal João Paulo II, no bairro Dirceu Arcoverde, e o Teatro do Boi, no bairro Matadouro e o Palácio da Música na famosa Rua da Pactuba, cantada por Torquato Neto.', 
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
    { id: 2, 
      categoria_local:'Museu',
      nome_local: 'Museu do piaui', 
      tel_local:'86 3215-7829',
      email_local:'email@email.com',
      site_local:'www.site.com.br',
      info_local: 'Localizado na Praça Pedro II, o Teatro 4 de Setembro, há mais de 100 anos, recebe em seu palco atrações nacionais e internacionais, entre elas peças teatrais, espetáculos de dança e shows musicais. Sua fachada é inspirada na arquitetura portuguesa com detalhes greco-romanos. O Teatro 4 de Setembro é interligado ao Clube dos Diários, outro espaço que recebe as mais diversas manifestações culturais. Teresina possui, ainda, outras casas de espetáculos, como o Teatro Municipal João Paulo II, no bairro Dirceu Arcoverde, e o Teatro do Boi, no bairro Matadouro e o Palácio da Música na famosa Rua da Pactuba, cantada por Torquato Neto.', 
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
  ];
 })





// Controller Hospitais
.controller('hospitalListCtrl', function($scope) {
  $scope.items = [
    { id: 1, 
      nome_local: 'Budega', 
      categoria_local:'Noturno',
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
    { id: 2, 
      nome_local: 'Seu Boteco', 
      categoria_local:'Restaurante',
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
  ];
 })

.controller('hospitalCtrl', function($scope, $stateParams) {
  $scope.items = [
    { id: 1, 
      categoria_local:'Teatro',
      nome_local: 'Teatro 4 de Setembro', 
      tel_local:'86 3215-7829',
      email_local:'email@email.com',
      site_local:'www.site.com.br',
      info_local: 'Localizado na Praça Pedro II, o Teatro 4 de Setembro, há mais de 100 anos, recebe em seu palco atrações nacionais e internacionais, entre elas peças teatrais, espetáculos de dança e shows musicais. Sua fachada é inspirada na arquitetura portuguesa com detalhes greco-romanos. O Teatro 4 de Setembro é interligado ao Clube dos Diários, outro espaço que recebe as mais diversas manifestações culturais. Teresina possui, ainda, outras casas de espetáculos, como o Teatro Municipal João Paulo II, no bairro Dirceu Arcoverde, e o Teatro do Boi, no bairro Matadouro e o Palácio da Música na famosa Rua da Pactuba, cantada por Torquato Neto.', 
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
    { id: 2, 
      categoria_local:'Museu',
      nome_local: 'Museu do piaui', 
      tel_local:'86 3215-7829',
      email_local:'email@email.com',
      site_local:'www.site.com.br',
      info_local: 'Localizado na Praça Pedro II, o Teatro 4 de Setembro, há mais de 100 anos, recebe em seu palco atrações nacionais e internacionais, entre elas peças teatrais, espetáculos de dança e shows musicais. Sua fachada é inspirada na arquitetura portuguesa com detalhes greco-romanos. O Teatro 4 de Setembro é interligado ao Clube dos Diários, outro espaço que recebe as mais diversas manifestações culturais. Teresina possui, ainda, outras casas de espetáculos, como o Teatro Municipal João Paulo II, no bairro Dirceu Arcoverde, e o Teatro do Boi, no bairro Matadouro e o Palácio da Música na famosa Rua da Pactuba, cantada por Torquato Neto.', 
      image: 'http://www.turismoteresina.com/media/uploads/filebrowser/teatro4.jpg' 
    },
  ];
 })













// Controller Slides
.controller('SlideController', function($scope) {
  $scope.myActiveSlide = 0;
});


// .controller('HomeTabCtrl', function($scope) {
//   console.log('HomeTabCtrl');
// })



// Controller Google Maps
// .controller('MapCtrl', function($scope, $ionicLoading) {
//   $scope.mapCreated = function(map) {
//     $scope.map = map;
//   };

//   $scope.centerOnMe = function () {
//     console.log("Centering");
//     if (!$scope.map) {
//       return;
//     }

//     $scope.loading = $ionicLoading.show({
//       content: 'Getting current location...',
//       showBackdrop: false
//     });

//     navigator.geolocation.getCurrentPosition(function (pos) {
//       console.log('Got pos', pos);
//       $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
//       $ionicLoading.hide();
//     }, function (error) {
//       alert('Unable to get location: ' + error.message);
//     });
//   };
// });

