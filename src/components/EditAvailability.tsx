import React from 'react';
import { getAvailabilities } from '../services/actions/availability';
import { useQuery } from '@tanstack/react-query';

const EditAvailability = () => {
  const {
    data: availabilities,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['getAvailabilities', 1],
    queryFn: ({ queryKey }) => getAvailabilities(queryKey[1] as number),
  });

  if (isLoading) return <div>Loading sessions...</div>;
  if (error) return <div>Error fetching sessions!</div>;

  return (
    <div>
      {availabilities.map((availability, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <p style={{ margin: '0 10px 0 0' }}>{availability}</p>
          <button style={{ marginRight: '5px', padding: '5px 10px' }}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default EditAvailability;
