import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import React from "react";
import {AppStateType} from "../../redux/redux-store";
let mapStateToPropsForRedirect = (state: AppStateType) =>({
        isAuth: state.authReducer.isAuth
})

type MapPropsType ={
    isAuth: boolean
}
type DispatchPropsType={}
export function withAutoRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>){
     const RedirectComponent: React.FC<MapPropsType & DispatchPropsType>=(props) =>{
            let {isAuth, ...restProps} = props
            if (!props.isAuth) return  <Redirect to={'/logIn'}/>
            return <WrappedComponent {...restProps as WCP}/>
    }
    let ConnectedAuthRedirectedComponent= connect<MapPropsType, DispatchPropsType, WCP, AppStateType>
         (mapStateToPropsForRedirect, {})
    (RedirectComponent);

    return ConnectedAuthRedirectedComponent;
}
