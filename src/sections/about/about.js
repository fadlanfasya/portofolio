import React from 'react';

import"./about.scss";

function About() {

    return (
        <section id="about" >
            <h3 className="title">About</h3>
            <h2 className="strokeText scrol_anime ">NICE TO MEET YOU </h2>
            <p className="scrol_anime">
            I'm a front-end developer with a passion for creating a beautiful responsive application; 
            that delivers a better user experience and can be used by everyone. 
            Technology has always been a major interest in my life, so I tried to combine 
            my interest in web technologies with my sense of attention to details to make beautiful modern websites.
            </p>
            
                <p className="scrol_anime">
                After graduating from Mohammed 5 university I have been self-educating about 
            newer web technologies such as javascript and react etc.
            I present you a few technologies that I've been working with recently:<br/></p>
           <div className="skill_Container">
                <span className="skill"> HTML</span>
                <span className="skill">CSS(Sass)</span>
                <span className="skill">Javascript</span>
                <span className="skill">React.js</span>
                <span className="skill">Node.js</span>
                <span className="skill">Figma</span>
                </div>
         

        </section>
    )
}

export default About;
