<?php

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $name = [
            '田中太郎', '鈴木健一',
        ];

        $email = [
            'tanaka@a.com', 'suzuki@a.com',
        ];

        for ($i = 0; $i < count($name); $i++) {
            DB::table('users')->insert([
                'name' => $name[$i],
                'code' => Str::random(10),
                'email' => $email[$i],
                'password' => Hash::make('pass'),
                'remember_token' => Str::random(10),
            ]);
        }
    }
}
