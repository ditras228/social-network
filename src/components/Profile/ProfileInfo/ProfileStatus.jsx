import React from "react";
import {connect} from "react-redux";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>{

                this.state.editMode
                    ? <div>
                        <input value={this.props.profilePage.profile.aboutMe} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text"/>
                    </div>
                    : <div onClick={this.activateEditMode.bind(this)}>
                        {this.props.profilePage.profile.aboutMe}
                    </div>
            } </>


        )

    }
}
let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
export default connect(mapStateToProps)(ProfileStatus);