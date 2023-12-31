import Link from 'next/link';

const ClientsPage = () => {
  const clients = [
    {
      id: 'rahul',
      name: 'Rahul',
    },
    {
      id: 'gourav',
      name: 'Gourav',
    },
    {
      id: 'aditya',
      name: 'Aditya',
    },
  ];

  return (
    <div>
      <h1>All Clients</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            <Link
              href={{ pathname: '/clients/[id]', query: { id: client.id } }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
