import { useQuery, useMutation, gql } from '@apollo/client';

const HELLO_QUERY = gql`
  query GetHello {
    helloFromBackend1
    helloFromBackend2
  }
`;

const DUMMY_MUTATION = gql`
  mutation PerformDummyMutation {
    dummyMutation
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(HELLO_QUERY);
  const [performDummyMutation, { data: mutationData }] = useMutation(DUMMY_MUTATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleClick1 = () => {
    console.log(data.helloFromBackend1);
  };

  const handleClick2 = () => {
    console.log(data.helloFromBackend2);
  };

  const handleDummyMutationClick = async () => {
    await performDummyMutation();
  };

  return (
    <div>
      <button onClick={handleClick1}>call backend1</button>
      {data && <h2>{data.helloFromBackend1}</h2>}
      <button onClick={handleClick2}>call backend2</button>
      {data && <h2>{data.helloFromBackend2}</h2>}
      <button onClick={handleDummyMutationClick}>Perform Dummy Mutation</button>
      {mutationData && <h2>{mutationData.dummyMutation}</h2>}
    </div>
  );
}
