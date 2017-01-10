<!DOCTYPE html>
<html lang="en">

<head>
    <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
    <!-- 1. Load libraries -->
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta property="csrf-token" name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="es6-shim/es6-shim.min.js"></script>
    <script src="systemjs/dist/system-polyfills.js"></script>
    <link rel="stylesheet" type="text/css" href="/php_project2/management/node_modules/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="/php_project2/management/resources/assets/font-awesome-4.6.3/css/font-awesome.min.css" />
    <script type="text/javascript" src="/php_project2/management/node_modules/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="/php_project2/management/node_modules/bootstrap/dist/js/bootstrap.min.js" ></script>

    <script type="text/javascript" src="/php_project2/management/node_modules/bootstrap/js/transition.js"></script>
    <script type="text/javascript" src="/php_project2/management/node_modules/bootstrap/js/collapse.js"></script>
    <script src="angular2/bundles/angular2-polyfills.js"></script>


    <script src="systemjs/dist/system.src.js"></script>
    <script src="rxjs/bundles/Rx.js"></script>
    <script src="angular2/bundles/angular2.dev.js"></script>


    <script>
        System.config({
            "defaultJSExtensions": true,
            map: {
                'ng2-bs3-modal': 'ng2-bs3-modal',
                'angular-2-local-storage': 'angular-2-local-storage/dist'
            },
            packages: {
                typescript: {
                    format: 'register',
                    defaultExtension: 'js'
                }
            },
            path:{
                'angular-2-local-storage': { defaultExtension: 'js' }
            }

        });

        System.import('typescript/bheader')
                .then(null, console.error.bind(console));
        System.import('typescript/bfooter')
                .then(null, console.error.bind(console));
        System.import('typescript/boot1')
                .then(null, console.error.bind(console));
    </script>




</head>
<base href="/"/>
<body>
<header></header>
<admin>loading...</admin>
<footer></footer>

</body>

</html>