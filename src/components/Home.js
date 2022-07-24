import React from 'react'
import "./Home.css"
import Profile from "../images/Passport_Edward.png"

const Home = () => {
    return (
        <div>
            <div className="col-md-8">
                <div id="console"> </div>
            </div>
            <div
                className="col-md-4 pull-right"
                id="image"
                style={{
                    height: "300px",
                    width: "300px",
                    marginTop: "150px"
                }}
            >
                <img
                    className="img-responsive"
                    src={Profile}
                    style={{
                        height: "100%",
                        width: "100%"
                    }}
                />
            </div>
        </div >
    )
}

export default Home