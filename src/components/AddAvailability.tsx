import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { addAvailability } from '../services/actions/availability';

type AvailabilityInput = {
  psychologistsId: number;
  from: string;
  to: string;
};

interface Props {
  psychologistId: number;
}

const AddAvailability = ({ psychologistId }: Props) => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation<any, Error, AvailabilityInput>({
    mutationFn: (newSlot: AvailabilityInput) => addAvailability(newSlot),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['availability', psychologistId],
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutation.mutate({
      psychologistsId: psychologistId,
      from: fromDate,
      to: toDate,
    });

    setFromDate('');
    setToDate('');
  };

  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label>From</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            style={{ margin: '5px 0', display: 'block' }}
          />
          <input
            type="time"
            value={fromTime}
            onChange={(e) => setFromTime(e.target.value)}
            style={{ margin: '5px 0', display: 'block' }}
          />
        </div>
        <div>
          <label>To</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            style={{ margin: '5px 0', display: 'block' }}
          />
          <input
            type="time"
            value={toTime}
            onChange={(e) => setToTime(e.target.value)}
            style={{ margin: '5px 0', display: 'block' }}
          />
        </div>
      </div>
      <button onClick={handleSubmit} style={{ padding: '5px 10px' }}>
        Add
      </button>
    </div>
  );
};

export default AddAvailability;
