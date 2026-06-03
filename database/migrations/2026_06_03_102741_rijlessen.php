<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */

    public function up()
    {
        Schema::create('rijlessen', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Koppeling aan de leerling
            $table->date('date');
            $table->time('start_time');
            $table->string('location'); // Ophaaladres
            $table->string('instructor_name'); // Of een koppeling naar een instructeur-tabel
            $table->enum('status', ['planned', 'completed', 'cancelled'])->default('planned');
            $table->text('note')->nullable(); // Voor de opmerkingen onderaan je screenshot
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rijlessen');
    }
};
