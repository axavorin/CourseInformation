const Header = (props) => {
  return (
    <h2>{props.text}</h2>
  )
}

const Part = (props) => {
  return (
    <p>
        {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => <Part part={part.name} exercises={part.exercises}></Part>)}
    </>
  )
}

const Total = (props) => {
  const sum = props.parts.reduce((all, current) => all + current.exercises, 0)
  return (
    <p>Number of exercises {sum}</p>
  )
}

const Course = (props) => {
  const course = props.course;
  return (
    <div>
      <Header text={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  )
}

export default Course