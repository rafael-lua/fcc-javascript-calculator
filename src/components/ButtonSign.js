import { connect } from "react-redux"; // Component will be exported through the connect
import { debugMsg } from '../store/actions';

const ButtonSign = (props) => {

  props.debugMsg("My operation is: " + props.sign);

  return (
    <div className={"btn " + props.template}>
      
    </div>
  )
}


// Mapping dispatchs actions to the component props (https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object)
const mapDispatchToProps = {
  debugMsg
}

export default connect(null, mapDispatchToProps)(ButtonSign);