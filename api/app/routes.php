<?php
declare(strict_types=1);

use App\Application\Actions\Auth\LoginCraftsmanAction;
use App\Application\Actions\Auth\LoginUserAction;
use App\Application\Actions\Auth\RegisterCraftsmanAction;
use App\Application\Actions\Auth\RegisterUserAction;
use App\Application\Actions\Review\CreateReviewAction;
use App\Application\Actions\Review\DeleteReviewAction;
use App\Application\Actions\Review\ListReviewsAction;
use App\Application\Actions\Review\ViewReviewAction;
use App\Application\Actions\User\EditCraftsmanAction;
use App\Application\Actions\User\EditUserAction;
use App\Application\Actions\User\ListCraftsmenAction;
use App\Application\Actions\User\ListUsersAction;
use App\Application\Actions\User\ViewCraftsmanAction;
use App\Application\Actions\User\ViewUserAction;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;
use Tuupola\Middleware\JwtAuthentication;

return function (App $app) {
    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        // CORS Pre-Flight OPTIONS Request Handler
        return $response;
    });

    $app->group('/users', function (Group $group) {
        $group->get('', ListUsersAction::class);
        $group->patch('', EditUserAction::class)
            ->add(new JwtAuthentication([
                'secret' => $_ENV['JWT_SECRET'],
                'secure' => false
            ]));
        $group->post('/login', LoginUserAction::class);
        $group->post('/register', RegisterUserAction::class);
        $group->get('/{id}', ViewUserAction::class);
    });

    $app->group('/craftsmen', function (Group $group) {
        $group->get('', ListCraftsmenAction::class);
        $group->patch('', EditCraftsmanAction::class)
            ->add(new JwtAuthentication([
                'secret' => $_ENV['JWT_SECRET'],
                'secure' => false
            ]));
        $group->post('/login', LoginCraftsmanAction::class);
        $group->post('/register', RegisterCraftsmanAction::class);
        $group->get('/{id}', ViewCraftsmanAction::class);
    });

    $app->group('/reviews', function (Group $group) {
        $group->get('/{craftsmanId}', ListReviewsAction::class);
        $group->post('/{craftsmanId}', CreateReviewAction::class);
        $group->get('/{craftsmanId}/{id}', ViewReviewAction::class);
        $group->delete('/{craftsmanId}/{id}', DeleteReviewAction::class);
    });
};
