import React, {PureComponent} from "react";

class SpacingComponent extends PureComponent{


    constructor(props){
        super(props);
        let height = 10;
        if(this.props.height){
            height = this.props.height;
        }

        this.state = {
            height
        }
    }

    render() {
        let {height} = this.state;
        return(
            <div style={{height:this.props.height}} />
        );
    }
}

export default SpacingComponent;