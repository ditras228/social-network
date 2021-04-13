import {useFormik} from "formik";
import React from "react";
import {FilterType} from "../../redux/users-reducer";
import {useSelector} from "react-redux";
import {getFilter} from "../../redux/users-selector";
type PropsType = {
    onFilterChanged: (filter: FilterType)=> void
}
export const UsersSearch: React.FC<PropsType>=({onFilterChanged})=>{
    const filter= useSelector(getFilter)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues:{
        term: filter.term,
        friend: filter.friend
        },
        onSubmit:values => {
            onFilterChanged(values)
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <input type="text" name={'term'} value={formik.values.term} onChange={formik.handleChange}/>
            <select name='friend' value={formik.values.friend} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value="null">All</option>
                <option value="true">Only followers</option>
                <option value="false">Only unfollowers</option>
            </select>
        </form>
    )
}