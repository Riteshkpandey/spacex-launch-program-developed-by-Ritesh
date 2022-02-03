import React from "react";
import { connect } from "react-redux";
import "../main.css";
import Sidebar from "./sideBar";

import ShuttleCard from "./shuttleCard";
import axios from "axios";
import { setLoading } from "../redux/action";

class Main extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            shuttleData: []
        }
    }

  componentDidUpdate(prevstate)
    {

        let {shuttleData} = this.props;
        if(prevstate.shuttleData != shuttleData)
        this.setState({
            shuttleData
        })

    }
    componentDidMount()
    {
        let {dispatchLoading} = this.props;
        dispatchLoading(true);
        axios.get(`https://api.spacexdata.com/v3/launches?limit=100`)
        .then(res => {
          const shuttleData = res.data;
          this.setState({shuttleData});
          dispatchLoading(false);
        })
        window.scrollTo(0, 0);
      
    }
    
    render()
        {
            const {shuttleData} = this.state;
            let {loading} = this.props;
            return(<>
            {loading}
            <div className="main-container">
                    <h2 className="">SpaceX Launch Programs</h2>
                    <div className="content-container">
                        <Sidebar/>
                        <div className="shuttle-container">
                        {shuttleData.map((item)=>{
                            return <ShuttleCard id={item.mission_id[0]} name={item.mission_name} badge={item.links.mission_patch} launch={item.launch_success} year={item.launch_year} count={item.flight_number} landing={item.launch_success}/>
                        })} 
                      
                        </div> 
                    </div>
                    <div style={{textAlign:"center"}}>
                    <h4>Developed By : Ritesh Kumar Pandey</h4></div>
            </div>
            </>)
        }


}


let mapStateToProps = (state) => 
{
    return {
        loading : state.loading,
        shuttleData: state.shuttleData
    }
}

let mapDispatchToProps = (dispatch) => 
{
    return {
        dispatchLoading: (payload) => dispatch(setLoading(payload))
      };
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);