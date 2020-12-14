import React, { Fragment } from 'react';
import spinner from './Spinner.gif';

export default () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: '900px', margin: 'auto', display: 'block' }}
        alt='Loading...'
      />
    </Fragment>
  );
};
