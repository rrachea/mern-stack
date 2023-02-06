import React from 'react';
import './page.css'



const Myself = () =>{
  return (
    <>
    <div className='myself'>
        <span className='header'>About Me</span>
        <div>
            Education
            <ul>
                <li>University: Singapore Management University
                    <ul>
                        <li>Course: Information Systems, Year 2</li>
                        <li>CCAs: .Hack, Whitehats, Squash</li>
                    </ul>
                </li>
                <li>Pre-University: Nanyang Junior College
                </li>
            </ul>
        </div>

        <br></br>
        <div>
            Work / Internship
            <ul>
                <li>IRAS
                    <ul>
                        <li>Job description: In charge of telecommunication</li>
                        
                    </ul>
                </li>

                <li>Jimmy Monkey
                    <ul>
                        <li>Job description: Service Crew</li>
                        
                    </ul>
                </li>
            </ul>
        </div>

        <br></br>

        <div>
            Projects
            <ul>
                <li>
                    Currently in construction sorry
                </li>
                <li>
                    Check this out <a href>https://bojio.netlify.app/</a>
                </li>
            </ul>
        </div>
    </div>
    </>
  );
}
export default Myself;