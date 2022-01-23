import React from 'react'
import {SocialMediaIconsReact} from 'social-media-icons-react';

export const Footer = () => {
    return (
        <div>
            <div className="row" style={{display: "flex", height: "50px", marginBottom: "-50px"}}>
                <div className="col-6" style={{width: "50%", float: "left"}}>
                    <h5 style={{padding: "0em 0em 0em 0em"}}>Jasmine Ryon Productions</h5>
                </div>
                <div className="col-6" style={{width: "50%", float: "right", padding: "0.5em 0em 0em"}}>
                    <SocialMediaIconsReact borderColor="rgba(172,163,79,0.25)" borderWidth="1" borderStyle="solid" icon="instagram" iconColor="rgba(237,219,161,1)" backgroundColor="rgba(87,130,71,1)" iconSize="5" roundness="50%" url="https://www.instagram.com/xxgeminianxx/" size="30" /> <SocialMediaIconsReact borderColor="rgba(172,163,79,0.25)" borderWidth="1" borderStyle="solid" icon="twitter" iconColor="rgba(237,219,161,1)" backgroundColor="rgba(87,130,71,1)" iconSize="5" roundness="50%" url="https://twitter.com/Myalove09" size="30" /> <SocialMediaIconsReact borderColor="rgba(172,163,79,0.25)" borderWidth="1" borderStyle="solid" icon="facebook" iconColor="rgba(237,219,161,1)" backgroundColor="rgba(87,130,71,1)" iconSize="5" roundness="50%" url="https://www.facebook.com/mariah.vasquez.90475" size="30" />    <SocialMediaIconsReact borderColor="rgba(172,163,79,0.25)" borderWidth="1" borderStyle="solid" icon="pinterest" iconColor="rgba(237,219,161,1)" backgroundColor="rgba(87,130,71,1)" iconSize="5" roundness="50%" url="https://www.pinterest.com/myalove09/_saved/" size="30" />
                </div>
            </div>
        </div>
    )
}
