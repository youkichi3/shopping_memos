<?php

use Illuminate\Database\Seeder;

class VegetableListsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $name = [
            'にんじん', 'ピーマン', 'キャベツ',
        ];

        for ($i = 0; $i < count($name); $i++) {
            DB::table('vegetable_lists')->insert([
                'memo_id' => 1,
                'name' => $name[$i],
            ]);
        }
    }
}
