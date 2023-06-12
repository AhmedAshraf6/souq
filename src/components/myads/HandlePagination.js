import React from 'react';
import { useFilterContext } from '../../contexts/FilterProvider';

const HandlePagination = () => {
  const { currentPage, lastPage, handlePagination } = useFilterContext();
  let l = [];
  if (lastPage > 1) {
    for (let i = 1; i <= lastPage; i++) {
      l.push(i);
    }
  }

  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination mx-auto w-25'>
        {l.map((a, index) => {
          return (
            <li
              className='page-item fw-bold '
              onClick={() => handlePagination(a)}
              key={index}
            >
              <button
                className={
                  currentPage == a
                    ? 'page-link bg-primary text-white rounded-circle'
                    : 'page-link bg-secondary text-primary rounded-circle'
                }
              >
                {a}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HandlePagination;
