<?php

use Illuminate\Database\Seeder;

class MemosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('memos')->insert([
            'name' => 'ライフ',
        ]);
    }
}
