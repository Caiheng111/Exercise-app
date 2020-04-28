
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

  // getExercisesByMuscles2(){
  //   const groupItem =exercises.forEach(exerciseObj=>{
  //      return  exerciseObj.muscles
  //   })
  //   return groupItem
  
  // }



  render() {
    // console.log(this.getExercisesByMuscles())
    
    return (

      <Fragment>
        <Header/>
        <Exercises  exercisesGroup={this.getExercisesByMuscles()}/>
        <Footer muscles={muscles}/>
     </Fragment>
    )
  }
}








