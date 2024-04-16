<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title')->comment('タスクタイトル');
            $table->text('text')->comment('タスク内容');
            $table->dateTime('time')->comment('開始時間時間');
            $table->dateTime('end_time')->comment('終了時間');
            $table->unsignedBigInteger('status_id')->comment('状態id');
            $table->unsignedBigInteger('milestone_id')->comment('マイルストーンid');
            $table->unsignedBigInteger('tag_id')->comment('ユーザid');
            $table->unsignedBigInteger('member_id')->comment('作成者id');
            $table->unsignedBigInteger('project_id')->comment('プロジェクトid');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
