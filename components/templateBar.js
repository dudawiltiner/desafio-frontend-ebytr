import PropTypes from 'prop-types';
import React from 'react';

export default function TemplateBar({ progressPercentage }) {
  return (
    <div>
      <div className="h-4 bg-gray-300 rounded-full w-12/12">
        <div
          style={ { width: `${progressPercentage}%` } }
          className="h-full rounded-full bg-blue-color"
        />
      </div>
    </div>
  );
}

TemplateBar.propTypes = {
  progressPercentage: PropTypes.integer,
}.Required;
