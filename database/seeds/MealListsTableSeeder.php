<?php

use Illuminate\Database\Seeder;

class MealListsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $name = [
            '豚肉', '牛肉', '鶏肉500g',
        ];

        for ($i = 0; $i < count($name); $i++) {
            DB::table('meal_lists')->insert([
                'memo_id' => 1,
                'name' => $name[$i],
            ]);
        }
    }
}
