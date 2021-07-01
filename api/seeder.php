<?php

use App\Domain\Review\Review;

require __DIR__ . "/public/index.php";

Review::factory(10)->create();

