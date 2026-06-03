import { router } from '@inertiajs/react';

function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    router.post('/klantregistratie', {
        first_name: formData.get('first_name'),
        last_name: formData.get('last_name'),
        adress: formData.get('adress'),
        place_of_residence: formData.get('place_of_residence'),
        email: formData.get('email'),
        password: formData.get('password'),
        // password_confirmation: formData.get('password_confirmation'),
    });
}

export default function VariableTest() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 rounded bg-white p-6 shadow">
                <h1 className="text-3xl font-bold">Registration</h1>

                <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-slate-700">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        required
                        className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-slate-700">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        required
                        className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label htmlFor="adress" className="block text-sm font-medium text-slate-700">
                        Address
                    </label>
                    <input
                        type="text"
                        id="adress"
                        name="adress"
                        required
                        className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label htmlFor="place_of_residence" className="block text-sm font-medium text-slate-700">
                        Place of Residence
                    </label>
                    <input
                        type="text"
                        id="place_of_residence"
                        name="place_of_residence"
                        required
                        className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="mt-1 w-full rounded border border-slate-300 px-3 py-2"
                    />
                </div>
                <div>
                </div>
                <button type="submit" className="rounded bg-slate-900 px-4 py-2 font-medium text-white">
                    Register
                </button>
            </form>
        </div>
    );
}