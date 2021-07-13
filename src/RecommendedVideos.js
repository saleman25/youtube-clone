import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <div className='recommendedVideos'>
            <h2>Recommended</h2>
            <div className='recommendedVideos_videos'>
                <VideoCard 
                title="Wake Up Yoga - 11 Minute Morning Yoga Practice - Yoga With Adriene"
                views='11M views'
                timestamp='Feb 16, 2019'
                channelImage='https://yt3.ggpht.com/ytc/AKedOLSsqgadKGeiBj_sxb1dC5_msmo_94JIIr4EPUdcFQ=s176-c-k-c0x00ffffff-no-rj'
                channel="Yoga With Adriene"
                image="https://i.ytimg.com/an_webp/UEEsdXn8oG8/mqdefault_6s.webp?du=3000&sqp=CMSItIcG&rs=AOn4CLAfhuLxRLxiR07zvMd2ZEWxmTucJg"
                />
            </div>
        </div>
    )
}

export default RecommendedVideos
