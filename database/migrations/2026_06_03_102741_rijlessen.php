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
            $table->time('end_time')->nullable(); // Optioneel, afhankelijk van hoe je de duur van de les wilt bijhouden
            $table->string('location'); // Ophaaladres
            $table->string('lesson_goal'); // Doel van de les, bijvoorbeeld "bochten", "parkeren", etc.
            $table->string('exam_info')->nullable(); // Optioneel, voor informatie over het examen als deze les daarvoor bedoeld is
            $table->string('lesson_funds')->nullable(); // Optioneel, voor informatie over lesgeld of tegoed
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
