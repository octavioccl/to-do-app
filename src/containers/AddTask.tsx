import { connect } from 'react-redux'
import { addTask } from 'src/store/tasks/actions';
import { Dispatch, AnyAction } from 'redux';
import * as React from 'react';

 
  
  interface DispatchProps {
    addNewTask: (input: string) => void
  }

  export const AddTask: React.FC<DispatchProps> = props => {
    const { addNewTask } = props;
    let input:HTMLInputElement | null= null;

    const submit= (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        if (!input!.value.trim()) {
          return
        }
        addNewTask(input!.value)
        input!.value = ''
      }

    return (
        <div className="add-task">
        <form
          onSubmit={submit}
        >
          <input ref={node => (input = node)} />
          <button type="submit">+</button>
        </form>
      </div>
    );
  };
  
  const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => ({
    addNewTask: (input:string) => dispatch(addTask(input))
  })
  
  export default connect(null, mapDispatchToProps)(AddTask)