(function () {
    var app = angular.module('blogApp', []);

    app.controller('BlogController', ['$http', function ($http) {
        var blog = this;
        blog.title = "Diário de Ada Lovelace";
        blog.posts = [];

        // Buscar posts fictícios como se fossem escritos por Ada Lovelace
        blog.posts = [
            {
                title: "A Máquina Analítica",
                body: ["Hoje conversei com Charles Babbage sobre como poderíamos desenvolver um motor de cálculo capaz de processar sequências numéricas complexas."],
                image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/AnalyticalMachine_Babbage_LondonScienceMuseum.jpg",
                author: "Ada Lovelace",
                createdOn: new Date('1843-09-12'),
                comments: [],
                likes: 15
            },
            {
                title: "Os Primeiros Algoritmos",
                body: ["Refleti sobre como um sistema mecânico pode processar instruções matemáticas passo a passo. Um novo conceito de programação está surgindo em minha mente."],
                image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Lovelace_notes.png",
                author: "Ada Lovelace",
                createdOn: new Date('1844-06-07'),
                comments: [],
                likes: 22
            }
        ];

        blog.tab = 'blog';

        blog.selectTab = function (setTab) {
            blog.tab = setTab;
        };

        blog.isSelected = function (checkTab) {
            return blog.tab === checkTab;
        };

        blog.post = {};

        blog.addPost = function () {
            if (!blog.post.title || !blog.post.body) {
                alert("Preencha todos os campos obrigatórios!");
                return;
            }

            blog.post.createdOn = new Date();
            blog.post.comments = [];
            blog.post.likes = 0;
            blog.posts.unshift(blog.post);
            blog.tab = 'blog';
            blog.post = {};
        };
    }]);
})();
