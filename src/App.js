import logo from './logo.svg';
import './App.css';
import Clock from './components/clock'


function App(props) {
  return (
    
     
        <Clock   seconds1 = {props.seconds01} seconds2 = {props.seconds02} minutes1 = {props.minutes01} minutes2 = {props.minutes02} hours1 = {props.hours01} hours2 = {props.hours02} />
      
      
    
  );
}

export default App;
