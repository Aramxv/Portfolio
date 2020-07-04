import React, {Component} from "react";
import Logo from "../../assets/img/logo.png";
import Handsome from "../../assets/img/handsome.jpeg";
import "./home.css";
import SpacingComponent from "../shared/spacing";
import Typist from 'react-typist';


class HomePage extends Component{

    constructor(props){
        super(props);
        this.state = {
            typistArr : ["I am a Web Developer","I am a Mobile Developer","I am a Pet Lover"],
            index:0,
        }
        
    }

    renderSideBar = () =>{
        return(
            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                <div className="container logoPaddingTop">
                    <img src={Logo} className="logoImg"></img>
                    
                    <SpacingComponent height={100} />

                    <div className="sideBarContent">
                        <div className="seperator">
                            <p className="sideBarText">Home</p>
                        </div>
                        <div className="seperator">
                            <p className="sideBarText">About</p>
                        </div>
                        <div className="seperator">
                            <p className="sideBarText">Services</p>
                        </div>
                        <div className="seperator">
                            <p className="sideBarText">Portfolio</p>
                        </div>
                        <div className="contactHover">
                            <p className="sideBarText">Contact</p>
                        </div>
                    </div>

                    <SpacingComponent height={100} />

                    <div className="footer-socials">
                        <i className="fab fa-facebook-f social-icon"></i>
                        <i className="fab fa-github-alt social-icon"></i>
                        <i className="fab fa-linkedin-in social-icon"></i>
                        <i className="fab fa-instagram social-icon"></i>
                        <i className="fas fa-at social-icon"></i>
                    </div>
                </div>
            </div>
        );
    }

    typistDoneTyping = () =>{
        let {index} = this.state;

        if (index === 0){
            index = 1;
        }else if (index === 1){
            index = 2;
        }else if (index === 2){
            index = 0;
        }

        this.setState({
            index
        });

    }

    renderTypist = () =>{
        let {index, typistArr} = this.state;
        return(
            <Typist
            key={index}
            avgTypingDelay={150}
            onTypingDone={()=>this.typistDoneTyping()}
            >
                <p className="text-white typistText">{typistArr[index]}</p>
            </Typist>
        )
    }


    renderContent = () =>{
        return(
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12 homeCover">
                <div className="container-handsome">
                    <div className="container-image">
                        <img src={Handsome} className="image-handsome" />
                    </div>
                    <div className="container-name">
                        <h1 className="name-text">Arjie <span className="colored-text">Redoña</span></h1>
                        {this.renderTypist()}
                    </div>
                </div>
            </div>
        );
    }

    render(){
        return(
            <div className="container-fluid container-App">
                <div className="row row-height">
                    {this.renderSideBar()}
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}


export default HomePage;
