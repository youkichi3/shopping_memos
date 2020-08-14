<?php

use Illuminate\Database\Seeder;

class OtherListsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $name = [
            '食器洗剤', '歯ブラシ',
        ];

        for ($i = 0; $i < count($name); $i++) {
            DB::table('other_lists')->insert([
                'memo_id' => 1,
                'name' => $name[$i],
            ]);
        }
    }
}
