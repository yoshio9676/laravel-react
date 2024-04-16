<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            ColorSeeder::class,
            TagSeeder::class,
            StatusSeeder::class,
            CompanySeeder::class,
            MemberSeeder::class
        ]);
    }
}
