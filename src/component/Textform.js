import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpCase = () =>{
        console.log("click on uppercase")
        let newText=text.toUpperCase();
        settext(newText);
        props.showalert("covert to uppercase","Success");
    }

    const handleLoCase = () =>{
        console.log("click on lowercase")
        let newText=text.toLowerCase();
        settext(newText);
        props.showalert("covert to lowercase","Success");
    }

    const handleToClear = () =>{
        console.log("click on clear")
        let newText="";
        settext(newText);
        props.showalert("clear to all","Success");
    }

    const handletoCopy=()=>{
        let newText=document.querySelector("#mybox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.showalert("copied to clipboard","Success")
    }

    

    const handleOnChange = (event) =>{
        console.log("click on onchange");
        settext(event.target.value)
        
    }


    const [text, settext] = useState("");
    return (
        <>
        <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
            <h2 className='mb=10'>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"#0d074c":"white",color:props.mode==="light"?"black":"white"}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpCase} >change to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoCase}>change to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleToClear}>Clear</button>
            <button className='btn btn-primary mx-2' onClick={handletoCopy}>copy</button>
            
        </div>
        <div style={{color:props.mode==="dark"?"white":"black"}}>
            <h3>Your text summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} character</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!=0}).length} minute read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something here "}</p>
        </div>
        </>
    )
}


