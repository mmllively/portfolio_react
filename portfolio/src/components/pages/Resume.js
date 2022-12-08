import React from 'react';
import Resumefile from '../../assets/MMLively_Resume2021.pdf';

const Resume = () => {
    return (

        <div>
            <h2>Resume</h2>

            <section>
                <p>Download my
                
                    <a className='resumetag' href= {Resumefile} > Resume

                    </a>
                    </p>
            

                <div className='front'>
                    <h3>Front-end Proficiencies</h3>
                    <li>HTML </li>
                    <li>CSS </li>
                    <li>JavaScript</li>
                    <li>JQuery </li>
                    <li>Responsive Design</li>
                    <li>React </li>
                    <li>Bootstrap </li>
                </div>
                <div className='back'>
                    <h3>Back-end Proficiencies</h3>
                    <li>APIs</li>
                    <li>Node </li>
                    <li>Express </li>
                    <li>MySQL,
                        Sequelize</li>
                    <li>MongoDB , Mongoose</li>
                    <li>REST </li>
                    <li>GraphQL </li>
                </div>

            </section>



        </div>

    );
};

export default Resume;