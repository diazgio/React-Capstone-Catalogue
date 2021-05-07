/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ goToNextPage, goToPrevPage }) => (
  <div>
    {goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
    <button onClick={goToNextPage}>Next</button>
  </div>
);

Pagination.propTypes = {
  goToNextPage: PropTypes.func.isRequired,
  goToPrevPage: PropTypes.func.isRequired,
};

export default Pagination;
