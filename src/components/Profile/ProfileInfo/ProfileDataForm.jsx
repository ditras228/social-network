import {useFormik} from "formik";
import React from "react";

let ProfileDataForm= ({lookingForAJob, lookingForAJobDescription, fullName, contacts, onSubmit})=>{
    const formik = useFormik({
        initialValues:{
            lookingForAJob: true,
            lookingForAJobDescription: lookingForAJobDescription,
            fullName: fullName,
            contacts: contacts,
        },
        onSubmit: values => {
            onSubmit(values)
        }
    });
    return(
        <form  onSubmit={formik.handleSubmit}>
            <button >onSubmit</button>
            <div>
                <input name={'lookingForAJob'} type="checkbox"  value={formik.values.lookingForAJob}/>
            </div>


                <div>
                    <input name={'lookingForAJobDescription'}
                           type="text"
                           placeholder={'lookingForAJobDescription'} v
                           alue={formik.values.lookingForAJobDescription}/>
                </div>
            <div>
                <input name={'fullName'}
                       type="text"
                       placeholder={'fullName'}
                       value={formik.values.fullName}/>
            </div>


            {
                Object.keys(contacts).map(key=>{
                    return (
                        <div>
                            <input type="text"
                                   key={key}
                                   placeholder={key }
                                   value={''}/>
                        </div>

                    )
                })
            }
        </form>

    )
}
export default ProfileDataForm;