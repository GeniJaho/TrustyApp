<?php


namespace Database\Factories;


use App\Domain\User\Craftsman;
use Illuminate\Database\Eloquent\Factories\Factory;

class CraftsmanFactory extends Factory
{
    protected $model = Craftsman::class;

    /**
     * @inheritDoc
     */
    public function definition()
    {
        $faker = \Faker\Factory::create();

        return [
            'username' => $faker->userName,
            'full_name' => $faker->name,
            'password' => password_hash('password', PASSWORD_DEFAULT),
            'craft' => $faker->word,
            'language' => $faker->languageCode,
            'address' => $faker->address,
            'description' => $faker->paragraph,
            'price' => $faker->randomFloat(2, 1, 500),
            'rating' => $faker->randomFloat(2, 1, 5)
        ];
    }
}
