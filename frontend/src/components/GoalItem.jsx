// import { useDispatch } from 'react-redux'

function GoalItem( {goal}) {

    // const dispatch = useDispatch()
    return (
        <div>
            <div>
                {new Date(goal.createdAt).toLocaleString('en-US')}
            </div>
            <h2>{goal.text}</h2>
        </div>
    )
}

export default GoalItem