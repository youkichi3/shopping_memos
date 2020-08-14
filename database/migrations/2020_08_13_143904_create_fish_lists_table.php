<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFishListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fish_lists', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('memo_id')->comment('メモID');
            $table->string('name')->comment('魚リスト名');
            $table->timestamps();

            $table->foreign('memo_id')->references('id')->on('memos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fish_lists');
    }
}
