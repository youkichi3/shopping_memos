<?php

use Illuminate\Database\Seeder;

class ShareUsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userId = [
            1, 2
        ];

        $memoId = [
            1, 1
        ];

        for ($i = 0; $i < count($userId); $i++)
            DB::table('share_users')->insert([
                'user_id' => $userId[$i],
                'memo_id' => $memoId[$i],
            ]);
    }
}
