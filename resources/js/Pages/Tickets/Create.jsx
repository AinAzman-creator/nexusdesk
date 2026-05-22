import { useForm } from '@inertiajs/react';

export default function Create({ categories }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
        category_id: '',
        priority: 'Medium',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('tickets.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Create Ticket</h1>

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <label className="block mb-1">Title</label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        className="w-full border rounded p-2"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                </div>

                <div>
                    <label className="block mb-1">Description</label>
                    <textarea
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="w-full border rounded p-2"
                        rows="4"
                    />
                    {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                </div>

                <div>
                    <label className="block mb-1">Category</label>
                    <select
                        value={data.category_id}
                        onChange={(e) => setData('category_id', e.target.value)}
                        className="w-full border rounded p-2"
                    >
                        <option value="">Select Category</option>

                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    {errors.category_id && <p className="text-red-500 text-sm">{errors.category_id}</p>}
                </div>

                <div>
                    <label className="block mb-1">Priority</label>
                    <select
                        value={data.priority}
                        onChange={(e) => setData('priority', e.target.value)}
                        className="w-full border rounded p-2"
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Critical">Critical</option>
                    </select>
                    {errors.priority && <p className="text-red-500 text-sm">{errors.priority}</p>}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    {processing ? 'Submitting...' : 'Submit Ticket'}
                </button>
            </form>
        </div>
    );
}