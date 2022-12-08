import React from 'react';

export default function Projects(props) {
  
    return (

        <div className="containerProject">

            <div>

        <a href={props.link} target="_blank" rel="noreferrer" className="deployedprojectlink">
                            {props.name}</a>
                            </div>


                <img src={props.img} alt={props.name} width="400px" height="250px"
                    className='projectImage' />
            
           
                <div className='hoverprojectinfo'>
                    <h2 className='projectlinks'>
                        
                   
                       
    
                    </h2>

                  
                    <p className="projectinfo">{props.id}</p>
                </div>
            

        </div>

    )
};