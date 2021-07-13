import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';


function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage_filter'>
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr></hr>
            
            <ChannelRow 
            image='https://yt3.ggpht.com/ytc/AKedOLSsqgadKGeiBj_sxb1dC5_msmo_94JIIr4EPUdcFQ=s176-c-k-c0x00ffffff-no-rj-mo'
            channel='Yoga With Adriene'
            verified
            subs='10M'
            noOfVideos={603}
            description='WELCOME to Yoga With Adriene!'
            />

            <hr></hr>
            
            <VideoRow
            views='6.2M'
            subs='10M'
            description='Hop on the mat for this 22-minute yoga session designed to help you feel good! Stretch your body, tap...'
            timestamp='2 years ago'
            channel='Yoga With Adriene'
            title='Yoga To Feel Your Best || Yoga With Adriene'
            image='https://i.ytimg.com/an_webp/BPK9WNtpBgk/mqdefault_6s.webp?du=3000&sqp=CPL0tocG&rs=AOn4CLCrCkG0690c7mPg_ndYSM_GMc1b_A'
             />

        </div>
    )
}

export default SearchPage