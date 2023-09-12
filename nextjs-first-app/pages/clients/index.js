import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "jj", name: "Jing Jie" },
    { id: "max", name: "Max" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={clients.id}>
            <Link href={`clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
