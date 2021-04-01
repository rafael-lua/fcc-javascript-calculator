import { connect } from "react-redux"; // Component will be exported through the connect
import { calculate } from '../store/actions';

const ButtonSignEqual = (props) => {
  return (
    <div className="btn sign-equal" onClick={() => props.calculate()}>
      =
    </div>
  )
}

// Mapping dispatchs actions to the component props (https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object)
const mapDispatchToProps = {
  calculate
}

export default connect(null, mapDispatchToProps)(ButtonSignEqual);
