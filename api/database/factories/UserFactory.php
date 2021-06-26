<?php


namespace Database\Factories;


use App\Domain\User\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    protected $model = User::class;

    /**
     * @inheritDoc
     */
    public function definition()
    {
        $faker = \Faker\Factory::create();

        return [
            'username' => $faker->userName,
            'full_name' => $faker->name,
            'password' => $faker->password,
        ];
    }
}
