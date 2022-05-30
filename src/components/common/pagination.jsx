import React, { Component } from 'react';
import { Pagination } from "react-bootstrap";


export class CustomPagination extends Component {
  render() {
    let {paginationRequest, pagination} = this.props;
    let { pages, arrows, currentPage } = pagination;
    let { prev, next, first, last, } = arrows;
    return (
      <Pagination size="lg">
        { first  &&
          <Pagination.Item
            onClick = { () => paginationRequest(first)}
          >
            <i className="fas fa-angle-double-left"></i>
          </Pagination.Item>
        }
        { prev &&
          <Pagination.Item
            onClick = { () => paginationRequest(prev)}
          >
            <i className="fas fa-angle-left"></i>
          </Pagination.Item>
        }
        {pages.map( page =>
          <Pagination.Item
            key = {page}
            active={parseInt(currentPage) === page}
            onClick = { () => paginationRequest(page)}
          >
            {page}
          </Pagination.Item>
        )}
        { next &&
          <Pagination.Item
            onClick = { () => paginationRequest(next)}
          >
            <i className="fas fa-angle-right"></i>
          </Pagination.Item>
        }
        { last &&
          <Pagination.Item
            onClick = { () => paginationRequest(last)}
          >
            <i className="fas fa-angle-double-right"></i>
          </Pagination.Item>
        }
      </Pagination>
    );
  }
}

export default CustomPagination;
