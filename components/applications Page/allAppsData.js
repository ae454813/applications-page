import { STATIC_DATA } from "../../locales/ar/appsPage";

const ALL_APPS_DATA = {
    B7r: {
        id: 1,
        appLogo: "/static/appsPage/appB7r/logoB7R.png",
        appTitle: STATIC_DATA.mobileApp,
        appDescription: STATIC_DATA.sellWithYourMobile,
        isInstalled: true,
        LinkUrl: "https://www.b7r.store/",
        supplier: "B7R",
        features: [
            {
                id: 1,
                feature: STATIC_DATA.featureB7R
            }
        ],
        hint: STATIC_DATA.hintB7R,
        imgUrl: [
            {src:"/static/appsPage/appB7r/Group 9187.png"},
            {src:"/static/appsPage/appB7r/Group 9188.png"},
            {src:"/static/appsPage/appB7r/Group 9189.png"},
            {src:"/static/appsPage/appB7r/Group 9190.png"}
        ]
    },
    Facebook: {
        id: 2,
        appLogo: "/static/appsPage/facebook/Group 9047.png",
        appTitle: STATIC_DATA.facebook,
        appDescription: STATIC_DATA.buyProductsOnFacebook,
        isInstalled: true,
        LinkUrl: "https://www.b7r.store/",
        supplier: STATIC_DATA.facebook,
        features: [
            {
                id: 1,
                feature: STATIC_DATA.featureFacebook
            },
            {
                id: 2,
                feature: STATIC_DATA.featureFacebook1
            }
        ],
       
        imgUrl: [
            {src:"/static/appsPage/facebook/Group 9125.png"},
            {src:"/static/appsPage/facebook/Group 9126.png"},
            {src:"/static/appsPage/facebook/Group 9127.png"},
            {src:"/static/appsPage/facebook/Group 9125 (1).png"},
            {src:"/static/appsPage/facebook/Group 9143.png"},
            {src:"/static/appsPage/facebook/Group 9127 (1).png"},
        ]
    },
    RatingAndReview: {
        id: 3,
        appLogo: "/static/appsPage/raitings&reviews/Frame 7572.png",
        appTitle: STATIC_DATA.ratingsAndReview,
        appDescription: STATIC_DATA.canRateAndReviewApp,
        isInstalled: true,
        LinkUrl: "https://www.b7r.store/",
        supplier: "B7R",
        features: [
            {
                id: 1,
                feature: STATIC_DATA.featureRatingAndReview
            },
        ],
       
        imgUrl: [
            {src:"/static/appsPage/raitings&reviews/Group 9125 (4).png"},
            {src:"/static/appsPage/raitings&reviews/Group 9122.png"},
            {src:"/static/appsPage/raitings&reviews/Group 9126 (1).png"},
        ]
    },
    Popup: {
        id: 4,
        appLogo: "/static/appsPage/popUp/Group 7771 (1).png",
        appTitle: STATIC_DATA.popUp,
        appDescription: STATIC_DATA.increaseYourSelling,
        isInstalled: true,
        LinkUrl: "https://www.b7r.store/",
        supplier: "B7R",
        features: [
            {
                id: 1,
                feature: STATIC_DATA.featurePopUp
            },
            {
                id: 2,
                feature: STATIC_DATA.featurePopUp1
            },
            {
                id: 3,
                feature: STATIC_DATA.featurePopUp2
            },
        ],
       
        imgUrl: [
            {src:"/static/appsPage/popUp/Group 9125 (5).png"},
            {src:"/static/appsPage/popUp/Group 9126 (2).png"},
            {src:"/static/appsPage/popUp/Group 9122 (1).png"},
        ]
    },
    Kanwat: {
        id: 5,
        appLogo: "/static/appsPage/kanawat/Group 7771 (2).png",
        appTitle: STATIC_DATA.kanawat,
        appDescription: STATIC_DATA.getTurkishProducts,
        isInstalled: true,
        LinkUrl: "https://www.b7r.store/",
        supplier: "Knawat Inc.",
        features: [
            {
                id: 1,
                feature: STATIC_DATA.featureKanwat
            },
            {
                id: 2,
                feature: STATIC_DATA.featureKanwat1
            },
            {
                id: 3,
                feature: STATIC_DATA.featureKanwat2
            }
        ],
        enrol: "اشترك الان",
        hint: STATIC_DATA.hintKanwat,
        imgUrl: []
        
    },
    SEO: {
        id: 6,
        appLogo: "/static/appsPage/SEO/Frame 7572 (1).png",
        appTitle: "SEO",
        appDescription: STATIC_DATA.improvePriorityWithSEO,
        isInstalled: true,
        LinkUrl: "https://www.b7r.store/",
        supplier: "B7R",
        paragraph: STATIC_DATA.makeYourWebsiteSupportSEO,
        featureTitle: STATIC_DATA.applicationFeaturs,
        features: [
            {
                id: 1,
                feature: STATIC_DATA.featureSEO
            },
            {
                id: 2,
                feature: STATIC_DATA.featureSEO1
            },
            {
                id: 3,
                feature: STATIC_DATA.featureSEO2
            },
            {
                id: 4,
                feature: STATIC_DATA.featureSEO3
            }
        ],
        imgUrl: [
            {src:"/static/appsPage/SEO/Group 9183.png"},
        ]
    },
    Sendstrap: {
        id: 7,
        appLogo: "/static/appsPage/sendStrap/Frame 7572 (2).png",
        appTitle: "Sendstrap",
        appDescription: STATIC_DATA.connectWithYourCustomers,
        isInstalled: true,
        LinkUrl: "https://www.b7r.store/",
        supplier: "Sendstrap",
        features: [
            {
                id: 1,
                feature: STATIC_DATA.addSocialMediaAndSMS
            }
        ],
        enrol: "اشترك الان",
        hint: STATIC_DATA.hintSendstrap,
        imgUrl: [
            {src:"/static/appsPage/sendStrap/Group 9125 (6).png"},
            {src:"/static/appsPage/sendStrap/Group 9126 (3).png"},
            {src:"/static/appsPage/sendStrap/Group 9127 (2).png"},
            {src:"/static/appsPage/sendStrap/Group 9150.png"},
            {src:"/static/appsPage/sendStrap/Group 9152.png"},
            {src:"/static/appsPage/sendStrap/Group 9130.png"},
        ]
    },
    Gameball: {
        id: 8,
        appLogo: "/static/appsPage/gameBall/Group 9062.png",
        appTitle: "Gameball",
        appDescription: STATIC_DATA.managementRewards,
        isInstalled: true,
        LinkUrl: "https://www.b7r.store/",
        supplier: "Gameball",
        features: [
            {
                id: 1,
                feature: STATIC_DATA.featureGameball
            },
            {
                id: 2,
                feature: STATIC_DATA.featureGameball1
            },
            {
                id: 3,
                feature: STATIC_DATA.featureGameball2
            }
        ],
        enrol: "اشترك الان",
        hint: STATIC_DATA.hintGameball,
        imgUrl: [
            {src:"/static/appsPage/gameBall/Group 9125 (7).png"},
            {src:"/static/appsPage/gameBall/Group 9126 (4).png"},
            {src:"/static/appsPage/gameBall/Group 9163.png"},
            {src:"/static/appsPage/gameBall/Group 9167.png"},
            {src:"/static/appsPage/gameBall/Group 9164.png"},
            {src:"/static/appsPage/gameBall/Group 9165.png"},
        ]
    },
    Message: {
        id: 9,
        appLogo: "/static/appsPage/message/Group 9062 (1).png",
        appTitle: STATIC_DATA.message,
        appDescription: STATIC_DATA.communicateWithSMS,
        isInstalled: true,
        LinkUrl: "https://www.b7r.store/",
        supplier: "B7R",
        featureTitle: STATIC_DATA.applicationFeaturs,
        features: [
            {
                id: 1,
                feature: STATIC_DATA.featureMessage
            },
            {
                id: 2,
                feature: STATIC_DATA.featureMessage1
            },
            {
                id: 3,
                feature: STATIC_DATA.featureMessage2
            },
            {
                id: 4,
                feature: STATIC_DATA.featureMessage3
            }
        ],
        imgUrl: [
            {src:"/static/appsPage/message/Group 9125 (8).png"},
            {src:"/static/appsPage/message/Group 9122 (2).png"},
        ]
    }
};

export default ALL_APPS_DATA;