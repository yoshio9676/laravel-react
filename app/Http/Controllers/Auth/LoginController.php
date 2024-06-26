<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\AuthManager;
use Illuminate\Http\JsonResponse;

class LoginController extends Controller
{
    /**
     * constructor
     * 
     * @param AuthManager $auth
     */
    public function __construct(
        private readonly AuthManager $auth
    )
    {
        //
    }

    /**
     * login
     *
     * @param LoginRequest $request
     * @return JsonResponse
     */
    public function __invoke(LoginRequest $request): JsonResponse
    {
        $credentials = $request->only(['email', 'password']);

        if ($this->auth->guard()->attempt($credentials)) {
            $request->session()->regenerate();

            return new JsonResponse([
                'message' => 'Authenticated.',
                'data' => $this->auth->guard()->user(),
            ]);
        }

        throw new AuthenticationException();
    }
}
