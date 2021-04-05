import { connect } from "react-redux"; // Component will be exported through the connect
import { clear } from '../store/actions';

const ButtonClear = (props) => {
  return (
    <div className={"btn sign-" + props.clearType} onClick={() => props.clear(props.clearType)} id={props.clearType === "cg" ? "clear" : "clear-entry"}>
      <p>{props.clearType}</p>
    </div>
  )
}

// Mapping dispatchs actions to the component props (https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object)
const mapDispatchToProps = {
  clear
}

export default connect(null, mapDispatchToProps)(ButtonClear);
