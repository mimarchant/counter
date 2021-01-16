import PropTypes from 'prop-types';
/* import { useState } from 'react'; */




function Clock(props) {

    /* const [state, setState] = useState({
        seconds1: 0,
        seconds2: 0,
        minutes1: 0,
        minutes2: 0,
        hours1: 0,
        hours2: 0
    }) */



    return (
        <div className="contenedor d-flex justify-content-center">
            <div><i className="far fa-clock mt-5 mr-5"></i></div>
            <div className="number mt-3 mr-1">{props.hours2 %10}</div>
            <div className="number mt-3 mr-1">{props.hours1 %10}</div>
            <div className="colon mt-2 mx-2">:</div>
            <div className="number mt-3 mr-1">{props.minutes2 %10}</div>
            <div className="number mt-3 mr-1">{props.minutes1 %10}</div>
            <div className="colon mt-2 mx-2">:</div>
            <div className="number mt-3 mr-1">{props.seconds2 %10}</div>
            <div className="number mt-3 mr-1">{props.seconds1 %10}</div>
        </div>
    )
    

/*     setInterval(function Clock () {
        setState(prevState => {
            return {
                ...prevState,
            }
    }, 1000); */
}

Clock.propTypes = {
    seconds1: PropTypes.number,
    seconds2: PropTypes.number,
    minutes1: PropTypes.number,
    minutes2: PropTypes.number,
    hours1: PropTypes.number,
    hours2: PropTypes.number
}


export default Clock;