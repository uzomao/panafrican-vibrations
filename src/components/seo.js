import React from 'react'
import { SuperSEO } from "react-super-seo";

const SEO = () => {
  return (
    <SuperSEO
        title="Pan-African Vibrations"
        description="My PCF Mobile Lab Week vibes diary"
        lang="en"
        openGraph={{
            ogImage: {
                ogImage: "../images/awardees.jpg",
                ogImageAlt: "a neon green map of africa",
                ogImageType: "image/jpeg",
            },
        }}
        twitter={{
            twitterSummaryCard: {
                summaryCardImage: "../images/awardees.jpg",
                summaryCardImageAlt: "a neon green map of africa",
                summaryCardSiteUsername: "Pan-African Vibrations",
            },
        }}
        />
  )
}

export default SEO