import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createGoal} from '../features/goals/goalSlice'

function GoalForm() {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit= (e) => {
        console.log(e)
        e.preventDefault()
        dispatch(createGoal({text}))
        setText('')
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);
    //     const field1 = formData.get('field1');
    //     const field2 = formData.get('field2');
    
    //     const instance = new YourModel({ field1, field2 });
    
    //     instance.save(function (error) {
    //       if (error) return handleError(error);
    //       console.log('Data saved successfully');
    //     });
    //   }


    return (
        <section className ='form'>
            <form onSubmit={onSubmit}>

                <div className='form-group'>
                    <label htmlFor='text'>Goal</label>
                    <input type='text' name= 'text' id ='text' value = {text} onChange={ (e)=> setText(e.target.value) }></input>
                </div>

            <div className="form-group">
                <button className="btn btn-block" type ='submit'>Add goal</button>
            </div>
            </form>
        </section>
    )
}

export default GoalForm