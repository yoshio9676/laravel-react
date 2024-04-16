<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Status::create([
            'status' => '未処理',
            'project_id' => 0,
            'color_id' => 34
        ]);
        Status::create([
            'status' => '処理中',
            'project_id' => 0,
            'color_id' => 49
        ]);
        Status::create([
            'status' => '完了',
            'project_id' => 0,
            'color_id' => 18
        ]);
        Status::create([
            'status' => '保留',
            'project_id' => 0,
            'color_id' => 43
        ]);
    }
}
