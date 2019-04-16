import { connect } from 'react-redux'
import { AppState } from 'src/store';
import { changeFilter } from 'src/store/tasks/actions';
import { Dispatch, AnyAction } from 'redux';
import {  VisibilityFilter } from 'src/store/tasks/types';
import * as React from 'react';

 interface OwnProps {
    filter: VisibilityFilter;
  }
  
  interface StateProps {
    active: boolean
  }
  
  interface DispatchProps {
    onClick: () => void
  }

  type Props = StateProps & DispatchProps & OwnProps

  export const Filter: React.FC<Props> = props => {
    const { active, onClick, children } = props;
  
    return (
      <button
        onClick={onClick}
        disabled={active}
        style={{
          marginLeft: "4px"
        }}
      >
        {children}
      </button>
    );
  };
  

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => ({
    active: ownProps.filter === state.tasksState.visibilityFilter
  })
  
  const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownProps:OwnProps): DispatchProps => ({
    onClick: () => dispatch(changeFilter(ownProps.filter))
  })
  
  export default connect<StateProps,DispatchProps,OwnProps>(
    mapStateToProps,
    mapDispatchToProps
  )(Filter)