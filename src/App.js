
function Movie({favourite}){
  return <h1> I like {favourite} </h1>
}


function App() {
  return (
    <div className="App">
      <h1>Hello!!</h1>
      <Movie favourite="marin" views={123}/>
      <Movie favourite="hawkeye" views={123}/>
      <Movie favourite="cruella" views={123}/>
    </div>
  );
}

export default App;
