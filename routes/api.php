<?php

use App\Http\Controllers\Api\MeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;

Route::post('/login', LoginController::class)->name('login');
Route::post('/logout', LogoutController::class)->name('logout');
Route::get('/user', function (Request $request) {
    return new JsonResponse(['user' => $request->user()]);
});

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/me', MeController::class);
});