import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ nextPage, previousPage }) => (
  <div className="Pagination-container">
    <button type="button" onClick={() => previousPage()}>Previous</button>
    <button type="button" onClick={() => nextPage()}>Next</button>
  </div>
);

Pagination.propTypes = {
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
};

export default Pagination;
