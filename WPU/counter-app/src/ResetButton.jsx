// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

function ResetButton({ reset }){
    return(
        <div>
            <button onClick={reset}>+ reset</button>
        </div>
    )
}
ResetButton.propTypes = {
    reset: PropTypes.number.isRequired
}
export default ResetButton;