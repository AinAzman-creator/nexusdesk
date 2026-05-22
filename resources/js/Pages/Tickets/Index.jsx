export default function Index({ tickets }) {
    return (
        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Ticket List
            </h1>

            <table className="w-full border-collapse border">

                <thead>
                    <tr className="bg-gray-100">

                        <th className="border p-2">
                            Ticket No
                        </th>

                        <th className="border p-2">
                            Title
                        </th>

                        <th className="border p-2">
                            Category
                        </th>

                        <th className="border p-2">
                            Priority
                        </th>

                        <th className="border p-2">
                            Status
                        </th>

                    </tr>
                </thead>

                <tbody>

                    {tickets.map((ticket) => (
                        <tr key={ticket.id}>

                            <td className="border p-2">
                                {ticket.ticket_no}
                            </td>

                            <td className="border p-2">
                                {ticket.title}
                            </td>

                            <td className="border p-2">
                                {ticket.category?.name}
                            </td>

                            <td className="border p-2">
                                {ticket.priority}
                            </td>

                            <td className="border p-2">
                                {ticket.status}
                            </td>

                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
}