import { connect } from "react-redux"; // Component will be exported through the connect
import { registerOperation } from '../store/actions';

const ButtonSign = (props) => {

  return (
    <div className={"btn " + props.template} onClick={() => props.registerOperation(props.sign)}>
      {props.sign}
    </div>
  )
}


// Mapping dispatchs actions to the component props (https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object)
const mapDispatchToProps = {
  registerOperation
}

export default connect(null, mapDispatchToProps)(ButtonSign);