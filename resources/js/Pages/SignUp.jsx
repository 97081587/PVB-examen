import react from 'react';

function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    router.post('/klantregistratie', {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation'),
    });
}

export default function SignUp() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Maak een account aan</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">
                            Naam
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="password">
                            Wachtwoord
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="password_confirmation">
                            Bevestig Wachtwoord
                        </label>
                        <input
                            type="password"
                            id="password_confirmation"
                            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}