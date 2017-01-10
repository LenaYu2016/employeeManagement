<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('Name');
            $table->string('Email')->unique();
            $table->string('Password');
            $table->string('Position');
            $table->string('Image')->nullable();
            $table->string('Department');
            $table->string('Gender');
            $table->string('Phone')->nullable();
            $table->string('Address')->nullable();

            $table->string('Role');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('user');
    }
}
