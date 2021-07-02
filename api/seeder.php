<?php

use App\Domain\Review\Review;
use App\Domain\User\Craftsman;

require __DIR__ . "/public/index.php";

Craftsman::factory(3)->create();

Review::factory(10)->create();

