import React from 'react';

export function Footer() {
    return (
        <footer className='footer'>
            <div className='container h-100 text-left'>
                <div className='row h-75 justify-content-start' style={{ paddingTop: '5%', textAlign: 'start' }}>
                    <div className='col-sm-6'>
                        <h1>Get in touch</h1>
                        <p>
                            Got a project you would like me to work on?
                            Or how about just a friendly chat?
                            Give me an email and we can grab a lovely brew.
                        </p>
                        <h2>Email</h2>
                        <p>
                            <a href='mailto:egor.gen.borisenko@gmail.com'>egor.gen.borisenko@gmail.com</a>
                        </p>
                    </div>
                    <div className='col-sm-6 footer-second-col'>
                        <h1>Networks</h1>
                        <p>Give me a follow on <a href='https://www.linkedin.com/in/egor-borisenko/' target='_blank'>LinkedIn</a></p>
                        <h2>CV</h2>
                        <p>More information in my <a href='https://github.com/Agron354/CV/raw/main/egor_borisenko_cv_doc.docx'>CV</a></p>
                    </div>
                </div>
                <div className='row h-25 text-center'>
                    <div className='col-sm-12 d-flex justify-content-center align-items-end'>
                        <p>Copyright © 2021 Egor Borisenko - made by egor.</p>
                    </div>
                    <div className='col-sm-12 d-flex justify-content-center align-items-start'>
                        <span>C# | .NET | HTML5 | CSS3 | JavaScript | React | Full Stack Development</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}