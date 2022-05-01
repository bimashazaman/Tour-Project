import React from 'react';
import Tour from './Tour';

const Tours = ({tours}) => {
  return (
    <section>
      <h2>Tours</h2>
      <div className='underLine'>
        {tours.map(tour => (
          <Tour key={tour.id} {...tour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
