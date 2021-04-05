import { connect } from "react-redux"; // Component will be exported through the connect
import { useEffect, useState } from "react";

const Display = (props) => {

  // Set a component state and effect to watch for the entries and show the history
  const [entriesHistory, setEntriesHistory] = useState("");
  useEffect(() => {
    if(props.entries.length > 1) {
      let history = "";

      for(let i = 0; i < props.entries.length; i++) {
        if(props.entries[i].sign !== null) { history += props.entries[i].sign; }
        history += props.entries[i].value;
      }
      
      setEntriesHistory(history);
    }
    else {
      setEntriesHistory("");
    }
  }, [props.entries]);

  return (
    <div className="display">
      <p><em>{entriesHistory}</em></p>
      <p id="display"><strong>{
        props.result === null ? props.entries[props.entries.length - 1].value : props.result.toString()
      }</strong></p>
    </div>
  )
}


// Mapping the state to the component props
const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, null)(Display);
