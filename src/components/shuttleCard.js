import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ShuttleCard(props)
{
    let {id, name , year , launch , badge, landing} = props;

    return(  <div className="shuttle-data">
    <LazyLoadImage className="shuttle-badge"src={badge} effect="blur" width={230} />
    <div className="shuttle-info">
<h3 className="shuttle-card-text-main">{name} #{props.count}</h3>
<p className="shuttle-card-text" >Mission Id: </p>
<li style={{marginLeft:"40px",color:"#484c94" }}>
{id ?id :'No Data' }</li>
<p className="shuttle-card-text">Launch year: <span style={{color:"#484c94"}}>{year}</span></p>
<p className="shuttle-card-text">Successful Launch: <span  style={{color:"#484c94"}}>{launch ? "true" : "false"}</span></p>
<p className="shuttle-card-text">Successful Landing: <span  style={{color:"#484c94"}}>{landing ? "true" : "false"}</span></p>

    </div>
    
</div>)
}

export default ShuttleCard