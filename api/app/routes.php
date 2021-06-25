<?php
declare(strict_types=1);

use App\Application\Actions\Review\CreateReviewAction;
use App\Application\Actions\Review\DeleteReviewAction;
use App\Application\Actions\Review\ListReviewsAction;
use App\Application\Actions\Review\ViewReviewAction;
use App\Application\Actions\User\CreateCraftsmanAction;
use App\Application\Actions\User\CreateUserAction;
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

return function (App $app) {
    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        // CORS Pre-Flight OPTIONS Request Handler
        return $response;
    });

    $app->group('/users', function (Group $group) {
        $group->get('', ListUsersAction::class);
        $group->post('', CreateUserAction::class);
        $group->get('/{id}', ViewUserAction::class);
        $group->patch('/{id}', EditUserAction::class);
    });

    $app->group('/craftsmen', function (Group $group) {
        $group->get('', ListCraftsmenAction::class);
        $group->post('', CreateCraftsmanAction::class);
        $group->get('/{id}', ViewCraftsmanAction::class);
        $group->patch('/{id}', EditCraftsmanAction::class);
    });

    $app->group('/reviews', function (Group $group) {
        $group->get('/{craftsmanId}', ListReviewsAction::class);
        $group->post('/{craftsmanId}', CreateReviewAction::class);
        $group->get('/{craftsmanId}/{id}', ViewReviewAction::class);
        $group->delete('/{craftsmanId}/{id}', DeleteReviewAction::class);
    });
};
