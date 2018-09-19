import React,{Fragment} from "react";

{/* <section className='red' ref={(section) => { props.refP = section; }}>Red</section> */}
const Section=(props)=>(
    <Fragment /*className="section" */>
        {
            props.title && 
            <div className="section-title">
                <span className="section-title-text">{props.title}</span>
            </div>
        }
        <div className={props.styleName||"section-content"}>
            {props.content}
        </div>
    </Fragment>
)

export default Section;