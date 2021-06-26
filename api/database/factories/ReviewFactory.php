<?php


namespace Database\Factories;


use App\Domain\Review\Review;
use App\Domain\User\Craftsman;
use App\Domain\User\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReviewFactory extends Factory
{
    protected $model = Review::class;

    /**
     * @inheritDoc
     */
    public function definition()
    {
        $faker = \Faker\Factory::create();

        return [
            'body' => $faker->sentence,
            'rating' => $faker->randomDigit,
            'from_id' => User::factory()->create()->id,
            'to_id' => Craftsman::factory()->create()->id,
            // Fix for "php seeder.php" 
            'created_at' => $faker->datetime
        ];
    }
}
