import { connect } from "react-redux"; // Component will be exported through the connect

const Display = (props) => {
  return (
    <div className="display">
      <p>{
        props.result === null ? props.entries[props.entries.length - 1].value : props.result.toString()
      }</p>
    </div>
  )
}


// Mapping the state to the component props
const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, null)(Display);
