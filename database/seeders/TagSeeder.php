<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Tag::create([
            'tag' => '実装',
            'project_id' => 0,
            'color_id' => 34
        ]);
        Tag::create([
            'tag' => '修正依頼',
            'project_id' => 0,
            'color_id' => 14
        ]);
        Tag::create([
            'tag' => 'バグ',
            'project_id' => 0,
            'color_id' => 43
        ]);
        Tag::create([
            'tag' => 'issue',
            'project_id' => 0,
            'color_id' => 30
        ]);
    }
}
