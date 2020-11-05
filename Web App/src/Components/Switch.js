import React, {useState} from 'react'
import {connect} from 'react-redux'
import {changeState} from '../Actions/DeviceActions'
import {  highlightGrey, mainhighlight, switchGreen} from '../Colors';

function Switch({id, state, on, off, changeState,  data}) {
    const [bgColorOn, setbgColorOn] = useState(on)
    const [bgColorOff, setbgColorOff] = useState(off)

    const checkState = () => {
        if (state==="ON"){
           // console.log(state)
            setbgColorOn(highlightGrey)
            setbgColorOff(switchGreen)
            changeState(data, id,"OFF")
        }
        else {
            //console.log(state)
            setbgColorOn(switchGreen)
          setbgColorOff(highlightGrey)
            changeState(data, id,"ON")
        }
    }
    return(
        <div style={styles.container} >
    
            <div 
                style={{...styles.innerDiv, backgroundColor: bgColorOn}}
                onClick={()=>checkState()}
            >

            <p style={styles.label}>On</p>
            </div>
            <div 
                style={{...styles.innerDiv, backgroundColor: bgColorOff}} 
                onClick={()=>checkState()}
            >

            <p style={styles.label}>Off</p>
            </div>
        </div>
    )
}
const styles ={
    container:{
        display: "flex",
        width: "30%",
      //  backgroundColor: 'pink',
        
    },
    label: {
        fontFamily: "monospace",
        fontSize: 20,
        color: mainhighlight,
      
    },
    innerDiv: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
   // borderStyle: 'solid',
    borderWidth: 1,
    width: '50%',
    height: 40,
    borderRadius: 5,
    }
}
const mapstateToProps = (state) => {
    const {deviceState, data} = state.Devices;
    return {
      deviceState,
      data
    };
  };
  
export default connect(mapstateToProps, {changeState})(Switch)