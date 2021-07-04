<?php

use App\Domain\Review\Review;
use App\Domain\User\Craftsman;

require __DIR__ . "/public/index.php";
// Creates 3 dummy Craftsmen
Craftsman::factory(3)->create();
// Creates 10 dummy reviews
Review::factory(10)->create();

