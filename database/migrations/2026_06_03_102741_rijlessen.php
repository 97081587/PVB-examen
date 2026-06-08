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
            $table->time('start_time')->date_format('H:i'); // Alleen tijd zonder datum
            $table->time('end_time')->date_format('H:i')->nullable(); // Optioneel, afhankelijk van hoe je de duur van de les wilt bijhouden
            $table->string('location'); // Ophaaladres
            $table->string('lesson_goal'); // Doel van de les, bijvoorbeeld "bochten", "parkeren", etc.
            $table->string('exam_info')->nullable(); // Optioneel, voor informatie over het examen als deze les daarvoor bedoeld is
            $table->string('cancel_reason')->nullable(); // Optioneel, voor de reden van annulering
            $table->string('instructor_name');
            $table->enum('status', ['gepland', 'afgerond', 'geannuleerd'])->default('gepland'); // Status van de les
            $table->text('note')->nullable(); // Voo opmerkingen
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
