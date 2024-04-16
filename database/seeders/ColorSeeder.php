<?php

namespace Database\Seeders;

use App\Models\ColorMasta;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now()->format('Y-m-d H:i:s');

        ColorMasta::insert([
            [
                'color' => 'black',
                'color_code' => '#000000',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'gray',
                'color_code' => '#808080',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'gainsboro',
                'color_code' => '#dcdcdc',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'white',
                'color_code' => '#ffffff',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'ghostwhite',
                'color_code' => '#f8f8ff',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'linen',
                'color_code' => '#faf0e6',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'bisque',
                'color_code' => '#ffe4c4',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'peachpuff',
                'color_code' => '#ffdab9',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'lavenderblush',
                'color_code' => '#fff0f5',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'ivory',
                'color_code' => '#fffff0',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'lavender',
                'color_code' => '#e6e6fa',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'steelblue',
                'color_code' => '#4682b4',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'royalblue',
                'color_code' => '#4169e1',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'blue',
                'color_code' => '#0000ff',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'deepskyblue',
                'color_code' => '#00bfff',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'skyblue',
                'color_code' => '#87ceeb',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'paleturquoise',
                'color_code' => '#afeeee',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'aqua',
                'color_code' => '#00ffff',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'black',
                'color_code' => '#000000',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'darkturquoise',
                'color_code' => '#00ced1',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'cadetblue',
                'color_code' => '#5f9ea0',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'teal',
                'color_code' => '#008080',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'darkgreen',
                'color_code' => '#006400',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'green',
                'color_code' => '#008000',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'palegreen',
                'color_code' => '#98fb98',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'mediumaquamarine',
                'color_code' => '#66cdaa',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'springgreen',
                'color_code' => '#00ff7f',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'lime',
                'color_code' => '#00ff00',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'darkolivegreen',
                'color_code' => '#556b2f',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'olive',
                'color_code' => '#808000',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'beige',
                'color_code' => '#f5f5dc',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'lightyellow',
                'color_code' => '#ffffe0',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'wheat',
                'color_code' => '#f5deb3',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'yellow',
                'color_code' => '#ffff00',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'orange',
                'color_code' => '#ffa500',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'goldenrod',
                'color_code' => '#daa520',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'chocolate',
                'color_code' => '#d2691e',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'maroon',
                'color_code' => '#800000',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'brown',
                'color_code' => '#a52a2a',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'salmon',
                'color_code' => '#fa8072',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'lightsalmon',
                'color_code' => '#ffa07a',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'tomato',
                'color_code' => '#ff7f50',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'red',
                'color_code' => '#ff0000',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'deeppink',
                'color_code' => '#ff1493',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'pink',
                'color_code' => '#ffc0cb',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'thistle',
                'color_code' => '#d8bfd8',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'violet',
                'color_code' => '#ee82ee',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'darkviolet',
                'color_code' => '#9400d3',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'purple',
                'color_code' => '#8000080',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'indigo',
                'color_code' => '#4b0082',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'color' => 'slateblue',
                'color_code' => '#6a5acd',
                'created_at' => $now,
                'updated_at' => $now
            ],
        ]);
    }
}
