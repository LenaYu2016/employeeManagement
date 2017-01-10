<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/angular', function () {
    return view('admin');
});
Route::get('/register', function () {
    return view('register');
});

Route::get('/test', function () {
    return response()->json(['task1'=>'test1','task2'=>'test2']);
});
Route::post('/add','UserController@addUser');
Route::get('/getall','UserController@getAll');
Route::get('/getbyid/{id}','UserController@getById');
Route::post('/editname','UserController@updateName');
Route::post('/editposition','UserController@updatePosition');
Route::post('/editdepartment','UserController@updateDepartment');
Route::post('/editrole','UserController@updateRole');
Route::get('/deletebyid/{id}','UserController@deleteById');
Route::post('/send','UserController@Send');
Route::post('/sendAll','UserController@sendAll');