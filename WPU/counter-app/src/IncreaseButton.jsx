// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

function IncreaseButton({ increase }){
    return(
        <div>
            <button onClick={increase}>+ increase</button>
        </div>
    )
}
IncreaseButton.propTypes = {
    increase: PropTypes.number.isRequired
}
export default IncreaseButton;