import React, {useState} from 'react'
import propTypes from 'prop-types'
import './checkbox.css';

export default function Checkbox(props) {
    const [LastCheckStatus,setLastCheckStatus]= useState(props.IsDefaultChecked);
    function handleCheckEvent(e){
        debugger;
        console.log(e.target.checked);
        setLastCheckStatus(e.target.checked)
        return props.result(LastCheckStatus)
    }

    if(props.isSingleList === true)
    {
        return (
            <div>
                <span className='LabelStyle'>{props.discription}</span>
                <input type="checkbox" checked={LastCheckStatus} onChange={(event) => handleCheckEvent(event)}/>
            </div>
          )

    }else{
       //use the checklistItems object here
    }
  
}

Checkbox.propTypes = {
    IsDefaultChecked : propTypes.bool,
    isSingleList: propTypes.bool,
    discription: propTypes.string,
    checklistItems: propTypes.object,
    result: propTypes.func
};
