import * as React from 'react';
import Filter from 'src/containers/Filter';
import {  VisibilityFilter } from 'src/store/tasks/types';
const Filters = () => (
    <div>
      <span>Show: </span>
      <Filter filter={VisibilityFilter.SHOW_ALL}>
        All
      </Filter>
      <Filter filter={VisibilityFilter.SHOW_ACTIVE}>
        Active
      </Filter>
      <Filter filter={VisibilityFilter.SHOW_COMPLETED}>
        Completed
      </Filter>
    </div>
  )
  
  export default Filters