import React ,{ useState }from 'react'; 
import Fade from '../../src';

const Demo=()=>{

    const [visible,setVisible]=useState(false);

    const handleChange=()=>{
        setVisible(!visible);
    }

    return (
        <div>
            <Fade visible={visible} style={{width:300,height:300,backgroundColor:'#000'}} >
                <div>cesasdas</div>
            </Fade>
            <button onClick={handleChange}>切换</button>
        </div>
    )
}

export default Demo;