import React from 'react'
import { SuperSEO } from "react-super-seo";

const SEO = () => {
  return (
    <SuperSEO
        title="Pan-African Vibrations"
        description="A PCF Mobile Lab Week vibes diary"
        lang="en"
        openGraph={{
            ogImage: {
            ogImage: "../images/logo.jpg",
            ogImageAlt: "a neon green map of africa",
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogImageType: "image/jpeg",
            },
        }}
        twitter={{
            twitterSummaryCard: {
            summaryCardImage: "../images/logo.jpg",
            summaryCardImageAlt: "a neon green map of africa",
            summaryCardSiteUsername: "Pan-African Vibrations",
            },
        }}
        />
  )
}

export default SEO