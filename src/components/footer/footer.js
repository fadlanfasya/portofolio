import React from 'react'
import SocialIcons from '../social_icons/social_icons';
import "./footer.scss";
function Footer() {
    return (
        <footer >
            <SocialIcons className="horisontal"/>
            <p className="scrol_anime">
            Built with <span role="img" aria-label="heart emoji"> ❤️</span> by Meryem Barroug.
            </p>
           

        </footer>
    )
}

export default Footer
