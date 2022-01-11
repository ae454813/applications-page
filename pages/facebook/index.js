import React from 'react'
import AppPageComponent from '../../components/applications Page'
import appFacebook from './data'

const AppFacebookPage = () => {
    return (
        <div>
            <AppPageComponent data={appFacebook}/>
        </div>
    )
}

export default AppFacebookPage
