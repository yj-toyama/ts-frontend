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

  const handleClick = async () => {
    await performDummyMutation();
  };

  return (
    <div>
      <h1>{data.helloFromBackend1}</h1>
      <h1>{data.helloFromBackend2}</h1>
      <button onClick={handleClick}>Perform Dummy Mutation</button>
      {mutationData && <h2>{mutationData.dummyMutation}</h2>}
    </div>
  );
}
