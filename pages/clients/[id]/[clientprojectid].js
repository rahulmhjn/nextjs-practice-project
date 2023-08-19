import { useRouter } from 'next/router';

const ClientProjectPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Client's selected Project Name: {router.query.clientprojectid}</h1>
    </div>
  );
};

export default ClientProjectPage;
