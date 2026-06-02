import React from 'react';
import { Inertia } from '@inertiajs/inertia';

<script setup>

const handleSubmit = (event) => {
    event.preventDefault(); {

    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    };

    Inertia.post('/klantregistratie', data);
};

</script>


export default function Home() {
    return (
    <div className="">
        <div className="flex items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Welcome to the Home Page!</h1>
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow">
            @csrf
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
    );
}