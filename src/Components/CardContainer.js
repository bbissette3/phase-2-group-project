import React from 'react';
import WorkoutCard from './WorkoutCard';

const CardContainer = ({workoutDataArray}) => {

  const workoutDetails = workoutDataArray.map((workoutDetail) => {
    return <WorkoutCard key={workoutDetail.id} workoutDetail={workoutDetail}/>
  })

  return (
    <>
    <h2>Card Container</h2>
      <div className="workout-list"> 
          {workoutDetails}
      </div>
    </>
  )

}

export default CardContainer;