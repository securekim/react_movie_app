import PropTypes from "prop-types"
import foodILike from "./Data"

function Food({name, picture, rating}){
  return (
    <div>
    <h2> I like {name} </h2>
    <h4> Rating : {rating}/5.0</h4>
    <img alt={name} src = {picture}></img>
    </div>
  )
}

Food.typeCheck = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number,
  numberOrString : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf({})
  ])
}

function App() {
  return (
    <div className="App">
      <h1>Hello!!</h1>
      {foodILike.map(dish =>(
        <Food key={dish.name} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}

export default App;
