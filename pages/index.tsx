import { useState } from 'react';
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
  const [showBackend1, setShowBackend1] = useState(false);
  const [showBackend2, setShowBackend2] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleClick1 = () => {
    setShowBackend1(true);
  };

  const handleClick2 = () => {
    setShowBackend2(true);
  };

  const handleDummyMutationClick = async () => {
    await performDummyMutation();
  };

  return (
    <div>
      <button onClick={handleClick1}>Get Hello From Backend1</button>
      <button onClick={handleClick2}>Get Hello From Backend2</button>
      {showBackend1 && <h2>{data.helloFromBackend1}</h2>}
      {showBackend2 && <h2>{data.helloFromBackend2}</h2>}
      <button onClick={handleDummyMutationClick}>Perform Dummy Mutation</button>
      {mutationData && <h2>{mutationData.dummyMutation}</h2>}
    </div>
  );
}
