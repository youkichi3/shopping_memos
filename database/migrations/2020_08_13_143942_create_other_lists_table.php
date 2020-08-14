<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOtherListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('other_lists', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('memo_id')->comment('メモID');
            $table->string('name')->comment('その他リスト名');
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
        Schema::dropIfExists('other_lists');
    }
}
