import React from 'react'
import AppPageComponent from '../../../components/applications Page'
import ALL_APPS_DATA from '../../../components/applications Page/allAppsData'

const RatingsAndReviewPage = () => {
    return (
        <div>
            <AppPageComponent data={ALL_APPS_DATA.RatingAndReview}/>
        </div>
    )
}

export default RatingsAndReviewPage
