<!DOCTYPE html>
<html>
<head>
    <title>Laravel</title>

    <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
    <!-- 1. Load libraries -->
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="es6-shim/es6-shim.min.js"></script>
    <script src="systemjs/dist/system-polyfills.js"></script>
   <link rel="stylesheet" type="text/css" href="/php_project2/management/node_modules/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="/php_project2/management/public/css/index.css" />
    <script type="text/javascript" src="/php_project2/management/node_modules/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="/php_project2/management/node_modules/bootstrap/dist/js/bootstrap.min.js" ></script>

    <script type="text/javascript" src="/php_project2/management/node_modules/bootstrap/js/transition.js"></script>
    <script type="text/javascript" src="/php_project2/management/node_modules/bootstrap/js/collapse.js"></script>
    <script src="angular2/bundles/angular2-polyfills.js"></script>
    <script src="systemjs/dist/system.src.js"></script>
    <script src="rxjs/bundles/Rx.js"></script>
    <script src="angular2/bundles/angular2.dev.js"></script>

    <!-- 2. Configure SystemJS -->
    <script>
        System.config({
            "defaultJSExtensions": true,
            packages: {
                typescript: {
                    format: 'register',
                    defaultExtension: 'js'
                }
            }
        });

        System.import('typescript/boot')
                .then(null, console.error.bind(console));
        System.import('typescript/bfooter')
                .then(null, console.error.bind(console));
        System.import('typescript/bheader')
                .then(null, console.error.bind(console));
    </script>



</head>
<body>
<header></header>
<div class="container">
    <div class="page-header"> <h1>Employee Management</h1></div>
    <my-app><i class="fa fa-spinner fa-pulse fa-3x fa-lg"></i>
        <span class="sr-only">Loading...</span></my-app>
</div>

<footer></footer>
</body>
</html>