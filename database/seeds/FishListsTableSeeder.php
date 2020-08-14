<?php

use Illuminate\Database\Seeder;

class FishListsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $name = [
            'アジ', '鯖', 'まぐろ', 'たい', 'さんま',
        ];

        for ($i = 0; $i < count($name); $i++) {
            DB::table('fish_lists')->insert([
                'memo_id' => 1,
                'name' => $name[$i],
            ]);
        }
    }
}
