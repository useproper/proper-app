import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QueueItem from 'component/queueItem';
import Button from 'component/button';

export default class Queue extends Component {
  render() {
    const { items, deleteItem, generateZip } = this.props;
    if (items.length)
      return (
        <div className="bg-white rounded shadow-lg mt-6">
          <div className="py-8 px-8 border-b border-gray-400">
            <span className="text-xl font-bold">Queued Items</span>
          </div>
          <ul className="inline-block w-full">
            {items.map((item, index) => (
              <QueueItem
                key={index}
                item={item}
                index={index}
                deleteItem={deleteItem}
              />
            ))}
          </ul>
          <div className="py-8 px-8 text-right flex justify-end items-center">
            <Button
              className="inline-flex items-center"
              onClick={() => {
                generateZip(items);
              }}
              disabled={!items.length}
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </Button>
          </div>
        </div>
      );
    return null;
  }
}

Queue.propTypes = {
  items: PropTypes.array,
  deleteItem: PropTypes.func,
  generateZip: PropTypes.func,
};
