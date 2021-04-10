import {useFormik} from "formik";
import React from "react";
type PropsType={
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: Array<string>
    onSubmit: () => void
    goToEditMode: () => void
}
let ProfileDataForm: React.FC<PropsType>= ({lookingForAJob, lookingForAJobDescription, fullName,
                          contacts, onSubmit, goToEditMode})=>{
    const formik = useFormik({
        initialValues:{
            lookingForAJob: lookingForAJob,
            lookingForAJobDescription: lookingForAJobDescription,
            fullName: fullName,
            contacts: contacts,
            aboutMe: 'test'
        },
        onSubmit: values => {
            // @ts-ignore
            onSubmit(values)
            goToEditMode()
        }
    });
    return(
        <form  onSubmit={formik.handleSubmit}>
            <button type={'submit'} >onSubmit</button>
            <div>
                <input name={'lookingForAJob'}
                       type="checkbox"
                       checked={formik.values.lookingForAJob}
                       onChange={formik.handleChange}
                />

            </div>


                <div>
                    <input name={'lookingForAJobDescription'}
                           type="text"
                           placeholder={'lookingForAJobDescription'}
                           value={formik.values.lookingForAJobDescription}
                           onChange={formik.handleChange}
                           onBlur={formik.handleChange}
                    />

                </div>
            <div>
                <input name={'fullName'}
                       type="text"
                       placeholder={'fullName'}
                       value={formik.values.fullName}
                       onChange={formik.handleChange}
                       onBlur={formik.handleChange}/>
            </div>


            {
                        Object.keys(contacts).map( key =>{
                    // @ts-ignore
                    return (
                            <input type="text"
                                   key ={key}
                                       // value={contacts[key]}
                                   name={'contacts.'+key}
                                   onChange={formik.handleChange}
                            />


                    )
                })
            }
        </form>

    )
}
export default ProfileDataForm;