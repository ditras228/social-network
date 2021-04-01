import React from "react";
import {connect} from "react-redux";
import {getStatus, setStatus, updateStatus} from "../../../redux/profile-reducer";
import {useFormik} from "formik";

class ProfileStatus extends React.Component {
    state={
        status: '',
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
        this.props.updateStatus(this.state.status)
    }
    onStatusChange=(e)=>{
        this.setState({
            status:   e.currentTarget.value
        })

    }
    render() {

            return (
                <form>{

                    this.state.editMode
                        ? <div>
                            <input onChange={this.onStatusChange} ref={this.statusInputRef} value={this.state.status} autoFocus={true}
                                   onBlur={this.deactivateEditMode.bind(this)} type="text"/>
                        </div>
                        : <div onClick={this.activateEditMode.bind(this)}>
                            status: {this.props.profilePage.status}
                        </div>
                } </form>


            )

    }
}
let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,

    }
}
export default connect(mapStateToProps, {getStatus, setStatus, updateStatus})(ProfileStatus);