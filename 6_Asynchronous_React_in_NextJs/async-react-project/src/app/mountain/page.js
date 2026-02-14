async function getData() {
    const res = await fetch("https://snowtooth-api-rest.fly.dev");
    if (!res.ok) {
        throw new Error('Failed to fetch lift status');
    }
    return res.json();
}
/*
export default async function Page() {
    const data = await getData();
    return ( 
        <main>
            <h1>
                {JSON.stringify(data)}
            </h1>
        </main>
    )
}
*/

export default async function Page() {
    const data = await getData();
    return ( 
        <main>
            <h1>
                Lift Status Info
            </h1>
            <table>
                <thead>
                    <tr>
                        <th>Lift Name</th>
                        <th>Status</th>
                    </tr> 
                </thead> 
                <tbody>
                    {data.map((lift) => (
                        <tr key={lift.id}>
                            <td>{lift.name}</td>
                            <td>{lift.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}