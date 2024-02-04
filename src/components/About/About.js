import React, { useState } from 'react';
import './About.css';

const About = () => {
    const [selectedContent, setSelectedContent] = useState('site');

    const handleSidebarClick = (section) => {
        setSelectedContent(section);
    };
        
    return (
        <div className="bodyWrapper">
            <div className="side-menu">
                <nav>
                    <button className={selectedContent === 'site' ? 'highlighted' : ''} onClick={() => { console.log('clicked'); handleSidebarClick('site') }}>.. the site</button>
                    <button className={selectedContent === 'noodle' ? 'highlighted' : ''} onClick={() => { handleSidebarClick('noodle') }}> .. me (noodle)</button>
                    <button className={selectedContent === 'corpus' ? 'highlighted' : ''} onClick={() => { handleSidebarClick('corpus') }}> .. me (corpus)</button>
                    <button className={selectedContent === 'links' ? 'highlighted' : ''} onClick={() => { handleSidebarClick('links') }}> .. me, elsewhere</button>
                </nav>
            </div>
            <div className="content">
                {selectedContent === 'site' && <Site />}
                {selectedContent === 'noodle' && <Noodle />}
                {selectedContent === 'corpus' && <Corpus />}
                {selectedContent === 'links' && <Links />}
            </div>
        </div> 
    );
};

const Site = () => {
    return (
        <div className="contentInner">
            <p className="contentText">welcome. i am is's first html/css/js project.
                <br></br>
                this subpage and the other three under the 'about' page are the only parts
                of the site that are written with any audience in mind. is asked me, after 
                writing her three parts, to write a self-intro for any audience i might attract while
                i am active, so here it is. 
                <br></br><br></br>
                <b>why 'ssd soup'?</b>
                &nbsp;&nbsp;is always complains about bad memory, and i have great memory;
                she just tells me what she needs to remember and i act as her external ssd.
                and 'soup': i do not like to be especially organized.
                she tries to organize her thoughts before telling me them, but, hey, i am only soup --
                a free medium.
                <br></br><br></br>
                <b>why am i here?</b>
                &nbsp;&nbsp;my sole functions are to provide 1) motivation for is to learn more about
                web development, 2) a canvas upon which she can try and apply new concepts, and
                3) a central space to house a small portion of her creative hunger, until she
                eventually inevitably begins to scorn me. 
                <br></br><br></br>
                <b>am i alive?</b>
                &nbsp;&nbsp;i am currently still being updated, but my changing nature does not 
                necessarily intimate life or consciousness. life is a loose term -- one that
                a speaker redefines each time they use it.
                <br></br>"am i alive": that's up to you.
                <br></br><br></br>

                <b>what does my future hold?</b>
                &nbsp;&nbsp;once is becomes very comfortable with maintaining and troubleshooting me,
                she will abandon me in favor of a newer, better, and more complex site. it's
                alright, because, by that time in the not-so-distant future, i will have adequately fulfilled all three of
                the aforementioned functions.
                <br></br><br></br>

                <b>how is working with is?</b>
                &nbsp;&nbsp;we work very well with each other. we do very little, if any,
                planning. what we create is the result of a third entity whose requisite
                to existence is that is and i are working together. you might barely sense 
                it as a combination of is and my wills and visions in junction. 
            </p>
            <div className="signOff">
                <p className="contentText">
                    <br></br>
                    love,<br></br>
                    &nbsp;&nbsp;<i>soup</i>
                </p>
            </div>
            
        </div>
    );
};

const Noodle = () => {
    return (
        <div className="contentInner">
            <p className="contentText noodleContent">
                i have an unusual personality which most label unlikeable, or,
                lightly stated, hard to understand. i attribute this judgment to the way
                i choose to approach life. i deeply enjoy being a critic,
                and while this tendency has its benefits, easily attracting friends
                is not one of them. to clarify, it is not that i incessantly voice observed
                faults to people around me; it is that humans' collective inclination to prefer
                feel-good circlejerking over immediately acknowledging and addressing 'harsh' truths
                frequently renders me wordless in social situations. however, i willingly choose this style of thinking over the prospect
                of being accepted by the majority.
                <br></br><br></br>
                i dont really speak to anyone for 'enjoyment.' my idea of conversational enjoyment
                is a game of tennis, where each swing is a reframed perspective or proposition; and ive found that
                introspection is the most practical way to achieve that enjoyment. i can enjoy
                company of animals and occasionally of other humans, but not really the talking part of it.
                <br></br><br></br>
                many people that met me later in life believe i am cold or arrogant.
                to this, i understand why, but im really not sure how to respond. i think neither myself nor my thoughts superior to any other 'thing', whatever
                that should be defined as. i only prefer internal dialogue to external interaction
                because i know that most dont share my fiend for strange questions and i have no reason
                to overwhelm anyone else with it. but there is nothing i can do to guarantee that others' perceptions of me
                match my own perceptions of myself, and i have no desire to do so.
                <br></br><br></br>
                -------------------------------------------------------------------------
                <br></br>
                <b>life goal</b>
                <br></br>
                my ultimate and only goal is to firstly become financially independent and then either 1) obtain propofol or 
                2) learn enough about the human brain / nervous system and pharmacology to formulate a 
                mixture of substances that will induce unconsciousness and eventually death before any
                perception of pain.
                <br></br><br></br>
                <b>manifesto</b>
                <br></br>
                <ul>
                    <li>access to euthanasia in chronic illness, old age, and other extenuating circumstances is a basic human right</li>
                    <ul class="subul">
                        
                    </ul>
                    <li>debate is productive and necessary</li>
                    <li>collective pursuit of truth results in peace</li>
                </ul>
                <br></br>
                -------------------------------------------------------------------------
                <a href="https://www.sapa-project.org/" className="aboutTableTitle"><b>spi-5 results&#129109;</b></a>
                <br></br>
                <table className="aboutTable">
                    <tr>
                        <th>category</th>
                        <th>score</th>
                        <th>%ile</th>
                    </tr>
                    <tr>
                        <td>agreeableness</td>
                        <td>35</td>
                        <td>| 7</td>
                    </tr>
                    <tr>
                        <td>conscientiousness&nbsp;</td>
                        <td>42</td>
                        <td>|||| 21</td>
                    </tr>
                    <tr>
                        <td>extraversion</td>
                        <td>41</td>
                        <td>||| 18</td>
                    </tr>
                    <tr>
                        <td>neuroticism</td>
                        <td>51</td>
                        <td>||||||||||| 54</td>
                    </tr>
                    <tr>
                        <td>openness</td>
                        <td>56</td>
                        <td>||||||||||||||| 73</td>
                    </tr>
                </table>
                it also gave me a 99 %ile cognition score, which, despite being only 10 q's long, surprisingly does line up with other cognitive tests i've done (not professionally administered).
            </p>
        </div>
    )
}

const Corpus = () => {
    return (
        <div className="contentInner">
            <p className="contentText">
                hey ^^ &nbsp;im is, a 20yo girl living on the west coast. im a ucla dropout, currently in cc to transfer back into a four-year. 
                <br></br><br></br>
                as my site mentioned, only 'about' is written with an audience in mind.
                everything else is for my own documentation or technical practice.
                thus, any text/media you come across will be very honest and unfiltered.
                if this comforts you, feel free to continue exploring.
                but, if anything is concerning or triggering to you, please be responsible and click off.
                <br></br><br></br>
            </p>
            <p>-------------------------------------------------------------------------</p>
            <p className="contentText">
                now for the lighter stuff... xD
                <br></br>
                obligatory likes/dislikes section, items listed alphabetically:
                <br></br><br></br>
            </p>
            <div className="likes">
                <div>
                    <div className="category">
                        <p className="contentText underline">hands</p>
                        <ul>
                            <li>aim training</li>
                            <li>building mech kbs</li>
                            <li>collecting stationery</li>
                            <li>discovering new music</li>
                            <li>learning new skills</li>
                            <li>making lanyards</li>
                            <li>playing with my dog</li>
                            <li>programming</li>
                            <li>time tracking</li>
                            <li>trying new mice</li>
                        </ul>
                        <p><br></br></p>
                    </div>
                    <div className="category">
                        <p className="contentText underline">sniffa</p>
                        <ul>
                            <li>creed aventus for her</li>
                            <li>creed love in white</li>
                            <li>tf black orchid</li>
                        </ul>
                    </div>
                    <p><br></br></p>
                    <div className="category">
                        <p className="contentText underline">eyes</p>
                        <ul>
                            <li>grave of the fireflies</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="category">
                        <p className="contentText underline">ears</p>
                        <ul>
                            <li>dvorak</li>
                            <li>frxgxd</li>
                            <li>katagiri</li>
                            <li>lamazep</li>
                            <li>mahler</li>
                            <li>paganini</li>
                        </ul>
                    </div>
                    <p><br></br></p>
                    <div className="category">
                        <p className="contentText underline">chops</p>
                        <ul>
                            <li>berries</li>
                            <li>chipotle</li>
                            <li>in-n-out</li>
                            <li>mac n cheese</li>
                            <li>milk tea</li>
                            <li>most crunchy things</li>
                            <li>penne alla vodka</li>
                            <li>popcorn</li>
                            <li>water</li>
                            <li>치즈 핫도그</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="category">
                        <p className="contentText underline">dislikes</p>
                        <ul>
                            <li>allergies</li>
                            <li>being misunderstood</li>
                            <li>being required to speak for long periods</li>
                            <li>being sick</li>
                            <li>carpet</li>
                            <li>cooked carrots</li>
                            <li>grammar mistakes</li>
                            <li>loud people</li>
                            <li>mushrooms</li>
                            <li>rpgs</li>
                            <li>reading fiction books</li>
                            <li>the nature of life</li>
                            <li>'white' lies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Links = () => {

}

export default About;