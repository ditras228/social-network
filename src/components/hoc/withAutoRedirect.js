import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import React from "react";
let mapStateToPropsForRedirect = (state) =>({
        isAuth: state.authReducer.isAuth

})
export const withAutoRedirect =(Component)=>{

     class RedirectComponent extends React.Component{
        render() {

            if (!this.props.isAuth) return  <Redirect to={'/logIn'}/>
            return <Component {...this.props}/>
        }
    }
    let ConnectedAuthRedirectedComponent= connect (mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectedComponent;
}
