import React from 'react'

export const Pagination = ({postsPerPage, totalPosts, paginate}) => {
  const pageNubmbers = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pageNubmbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNubmbers.map(number=>(
          <li key={number} className="page-item">
            <button 
            onClick={()=> paginate(number)}
            className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
