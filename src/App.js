
import React, { Component, Fragment } from 'react'
import Header from './Components/Layouts/Header'
import Footer from './Components/Layouts/Footer'
import Exercises from './Components/Exercises/Exercises'
import {muscles, exercises} from './store'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      exercises   
    }
  }
 
  // Object.entries function 
  // this function if for getting the exercisesByMuscles Array
  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]
        return exercises
      }, {})
    )
  }

  
  render() {
    const exercises = this.getExercisesByMuscles();
    // console.log(typeof(this.getExercisesByMuscles()))
    // console.log(this.getExercisesByMuscles())
    
    return (
      

      <Fragment>
        <Header/>
        <Exercises  exercises={exercises}/>
        {/* {console.log(exercises)} */}
        <Footer muscles={muscles}/>
     </Fragment>
    )
  }
}








