import React from 'react'

export default function Info() {
    return (
        <main>
            <img className="proPic" src="./images/IMG_6249.png" alt="Chris Jin picture" />
            <div className="info--essential">
                <h1>Christopher Jin</h1>
                <h3>Full Stack Engineer</h3>
                <h4><a href="https://cjin.netlify.app/">cjin.netlify.app</a></h4>
            </div>
            <div className="info--buttons-container">
                <a hfef="mailto:chrisjin1@gmail.com" className="info--button email"><img src="./images/Mail.png" />Email</a>
                <a href="https://www.linkedin.com/in/christopherjin3/" target="_blank" className="info--button linkedin"><img src="./images/linkedin.png" />LinkedIn</a>
            </div>  
        </main>
    )
}