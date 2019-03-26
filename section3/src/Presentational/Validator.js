import React from 'react';

const Validator = (props) =>{
    let textLen = props.textLength

    if (textLen<5){
        return(
            <div> {textLen} - Too Short.</div>
        )
    } else if (textLen > 4 && textLen < 16){
        return(
            <div>{textLen} -Just Right</div>
        )
    }else{
        return(
            <div>{textLen} -Too Long</div>
        )
    }
}

export default Validator;