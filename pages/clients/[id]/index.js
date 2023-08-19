import Link from 'next/link';
import { useRouter } from 'next/router';

const ClientDetailsPage = () => {
  const router = useRouter();

  const loadProductDetailsPage = () => {
    // manipulate some data
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'rahul', clientprojectid: 'projecta' },
    });
  };

  return (
    <div>
      <h1>All Projects of a selected client named: {router.query.id}</h1>
      <ul>
        <li>
          <button onClick={loadProductDetailsPage}>Project A</button>
        </li>
      </ul>
    </div>
  );
};

export default ClientDetailsPage;
