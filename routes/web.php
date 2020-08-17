<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/vegetable_list', 'VegetableListController@index')->name('vegetableList');
Route::get('/meal_list', 'MealListController@index')->name('mealList');
Route::get('/fish_list', 'FishListController@index')->name('fishList');
Route::get('/other_list', 'OtherListController@index')->name('otherList');



Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
