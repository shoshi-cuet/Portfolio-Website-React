import React from "react";

import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const HeaderSocials = () => {
    return(
        // eslint-disable-next-line
        <div className="header__socials">
            <a href="http://linkedin.com" target='_blank'><BsLinkedin/></a>
            <a href="http://github.com" target='_blank'><FaGithub /></a>
        </div>
    )
}

export default HeaderSocials;