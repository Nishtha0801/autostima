import React from 'react';
import style from './About.module.scss'
import about from '../Assets/about.png'
import features from '../Assets/features.png'
import saly from '../Assets/aboutsaly.png'

function AboutPage() {
    return <div className={style.wrapper}>
        <div className={[style.left,style.data].join(" ")}>
            <img src={about} />
            <div>
                We started with a question and carefully considered it: what do we truly and honestly believe about ourselves?
                We’d be willing to bet that they were a mix between the two: “I’m a good person, but I could be better. I’m a hard worker, but it hasn’t paid off in the ways I’ve dreamed about. I’m a kind friend, but people take me for granted because I’m unlikeable.”


                Low self-esteem is something that so many of us deal with. But one thing that we truly believe is that deep down, there will always be a part of yourself, no matter how small, that knows that you are worthy. Repairing our self-confidence is a lifelong and highly individualized journey that takes a heck of a lot of work. We realized that not only students are suffering from problems regarding confidence but also employees or college students are facing obstacles while having a presentation or a significant meeting.
                Autostima aims to solve all problems related to self-esteem. The user could read out positive affirmations, can practice public speaking by uploading any .txt or .doc document through our website's features. We provide a machine learning model trained on our body gesture, such as eye contact and shoulder, as well as a speech to text system to ensure full confidence and effect on these affirmations/speeches.
            </div>
            <img src={features} />
            <div>
                <div>Affirmation Camera</div>
                Allows you to analyse yourself while speaking out affirmations or the speech in order to check how confident you look.
            </div>
            <div>
                <div>Posture Detector</div>
                Checks the posture in the Affirmation Camera and instantly notifies your if your posture is not appropriate.
            </div>
            <div>
                <div>Speech rehearsal</div>
                You can input your speech or any written material through .txt or .doc files and analyse your performance in the camera along with the posture. The lines appear one by one which you repeat to practice.
            </div>
            <div>
                <div>Anyalitcs</div>
                Highlights the part of speech where the you have a bad posture along with a pie chart that analyses the ratio of good posture to bad posture.
            </div>
            <div>
                <div> Blogs and videos</div>
                You can also read and watch various blogs and videos that would help you to boost their confidence and grow in the field of verbal communication.
            </div>
        </div>
        <div className={style.right}></div>
    </div>;
}

export default AboutPage;
