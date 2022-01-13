import React from 'react'
import AppPageComponent from '../../../components/applications Page'
import ALL_APPS_DATA from '../../../components/applications Page/allAppsData'


const SendStrapPage = () => {
    return (
        <div>
            <AppPageComponent data={ALL_APPS_DATA.Sendstrap}/>
        </div>
    )
}

export default SendStrapPage
