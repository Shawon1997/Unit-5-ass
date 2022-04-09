//import logo from './logo.svg';
import './App.css';

function App() {

  const links=["service","project","About"]
  return (
    <div className="App">
      <div className='nav'>
          <div><h3>LOGOBAKERY</h3></div>
          <div >
             <div className='style'>
              {links.map((el)=>{
                return <p>{el}</p>
              })}
            </div>
          </div>
          <div className='contact'><button className='button'>Contact</button></div>
      </div>
    </div>
  );
}

export default App;
