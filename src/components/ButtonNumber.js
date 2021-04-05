import { connect } from "react-redux"; // Component will be exported through the connect
import { registerValue } from '../store/actions';

const ButtonNumber = (props) => {
  return (
    <div className={"btn num-" + props.num} onClick={() => props.registerValue(props.num)} id={props.numId}>
      {props.num}
    </div>
  )
}

// Mapping dispatchs actions to the component props (https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object)
const mapDispatchToProps = { 
  registerValue
}

export default connect(null, mapDispatchToProps)(ButtonNumber);
