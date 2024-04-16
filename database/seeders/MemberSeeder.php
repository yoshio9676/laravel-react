<?php

namespace Database\Seeders;

use App\Models\Member;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class MemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Member::create([
            'name' => Str::random(10),
            'email' => 'example1@example.com',
            'password' => Hash::make('password'),
            'company_id' => 1
        ]);
        Member::create([
            'name' => Str::random(10),
            'email' => 'example2@example.com',
            'password' => Hash::make('password'),
            'company_id' => 1
        ]);
        Member::create([
            'name' => Str::random(10),
            'email' => 'example3@example.com',
            'password' => Hash::make('password'),
            'company_id' => 1
        ]);
        Member::create([
            'name' => Str::random(10),
            'email' => 'example4@example.com',
            'password' => Hash::make('password'),
            'company_id' => 2
        ]);
        Member::create([
            'name' => Str::random(10),
            'email' => 'example5@example.com',
            'password' => Hash::make('password'),
            'company_id' => 2
        ]);
        Member::create([
            'name' => Str::random(10),
            'email' => 'example6@example.com',
            'password' => Hash::make('password'),
            'company_id' => 2
        ]);
    }
}
