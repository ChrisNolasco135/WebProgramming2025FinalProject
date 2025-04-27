const workoutActivity = [{
  id: 1,
  name: 'John Doe',
  date: '3/7/2025',
  description: 'A sample workout activity',
  type: 'Cardio',
  duration: 30,
  intensity: 'Medium',
  caloriesBurned: 324,
},
{
  id: 2,
  name: 'Jane Smith',
  date: '3/5/2025',
  description: 'Another workout activity',
  type: 'Strength Training',
  duration: 45,
  intensity: 'High',
  caloriesBurned: 500,
},
{
  id: 3,
  name: 'Alice Johnson',
  date: '2/24/2025',
  description: 'A different workout activity',
  type: 'Yoga',
  duration: 60,
  intensity: 'Low',
  caloriesBurned: 200,
},
];

export type WorkoutActivity = {
  id: number
  name: string
  date: string
  description: string
  type: string
  duration: number
  intensity: string
  caloriesBurned: number
}
export function getWorkoutActivity() {
  return workoutActivity
}
export function getWorkoutActivityById(id: number) {
  return workoutActivity.find(workout => workout.id === id)
}

