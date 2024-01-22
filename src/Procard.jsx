import dataarr from "./card-data";
import "./Card.css";

function Procard(props){
    return(
        <div className="cardcss">
            <h2 style={{textAlign:"center"}}>{props.Location} </h2>
            <img src={props.path} alt=""></img>
            <p>About:- &nbsp;{props.Discp}</p>
            <button>{props.Budget}</button>
        </div>
    )
}

export default function Show(){
    return(
        
        <div className="tour">
            <div><h1 style={{textAlign:"center",marginTop:"40px"}}>Tour Planner</h1></div>
        <div style={{display:"flex",flexWrap:"wrap",marginTop:"40px",marginLeft:"100px"}}>
            {
                dataarr.map((obj)=>
                {
                    return(
                    <Procard {...obj}></Procard>
                    )
                }
                )
            }
        </div>
        </div>
    )
}

