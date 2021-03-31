import { connect } from "react-redux"; // Component will be exported through the connect
import { debugMsg } from '../store/actions';

const Display = (props) => {
  return (
    <div className="display">
      <p>{props.currentValue}</p>
    </div>
  )
}


// Mapping the state to the component props
const mapStateToProps = (state) => {
  return state;
}

// Mapping dispatchs actions to the component props (https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object)
const mapDispatchToProps = { 
  debugMsg
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
