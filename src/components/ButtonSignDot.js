import { connect } from "react-redux"; // Component will be exported through the connect
import { registerDecimal } from '../store/actions';

const ButtonSignDot = (props) => {
  return (
    <div className="btn sign-dot" onClick={() => props.registerDecimal()} id="decimal">
      .
    </div>
  )
}

// Mapping dispatchs actions to the component props (https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object)
const mapDispatchToProps = {
  registerDecimal
}

export default connect(null, mapDispatchToProps)(ButtonSignDot);