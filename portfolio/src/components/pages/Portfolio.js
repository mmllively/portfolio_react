import React from 'react';
import Projects from './Projects';
import NovelSips from '../../assets/novelsips.png';
import Brews from '../../assets/brews.png';



export default function Portfolio() {

    const project = [
        {
            name: 'Novel Sips',
            description: 'This application offers drink recommendations to pair with any book you choose',
            id: 'pending',
            link: "https://mmllively.github.io/Novel_Sips/",
            repo: "https://github.com/mmllively/Novel_Sips/",
            img: NovelSips,
        },

        {
            name: 'Brews on Your Block',
            description: 'This webpage helps you locate your next favorite brewery! Search any city in the United States and map out your route to get there.',
            id: 'pending',
            link: "https://mmllively.github.io/Brews_and_Cruise/",
            repo: "https://github.com/mmllively/Brews_and_Cruise",
            img: Brews,
        },


        
];
    return (
        <div className='projectpgcontainer'>
            <h2 className='portfoliopgtitle'>Portfolio</h2>

            {project.map((element) => {
                return <Projects name={element.name}
                    description={element.description}
                    id={element.id} link={element.link}
                    repo={element.repo} img={element.img}
                />
            })}
        </div>
    );
}