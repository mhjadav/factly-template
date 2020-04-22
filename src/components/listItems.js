import React from 'react';
import PropTypes from 'prop-types';

function ListItems({ item, index, image = true, author = true, className }) {
  return (
    <div
      className={`flex flex-col py-6 leading-tight border-b border-gray-200 last:border-b-0 ${className}`}
    >
      <a
        href="/"
        className="w-full flex flex-col no-underline hover:no-underline"
      >
        {image && (
          <div className="flex w-full justify-ledt items-start pr-4">
            <img
              src={`https://source.unsplash.com/collection/${index +
                1000}/500x200`}
              alt={item.title}
              className="h-40 object-cover rounded"
            />
          </div>
        )}
        <div className="w-full flex flex-row">
          <div className="w-full font-bold font-sans text-lg text-gray-800 pt-2">
            {item.title}
          </div>
        </div>
      </a>
      {author && (
        <div className="flex-none mt-auto py-4">
          <div className="flex items-center justify-between">
            <div className="flex justify-center items-center">
              <a href="/" className="text-gray-600 text-xs md:text-sm mr-2">
                John Doe,
              </a>
              <a href="/" className="text-gray-600 text-xs md:text-sm mr-2">
                John Doe Second
              </a>
            </div>
            <p className="text-gray-600 text-xs md:text-sm">Apr, 21 2020</p>
          </div>
        </div>
      )}
    </div>
  );
}

ListItems.propTypes = {
  item: PropTypes.number,
  image: PropTypes.bool
};
export default ListItems;
