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
        <div className="contentContainer">
            <div className="contentText">
                <p>welcome! i'm is's first html/css/js project!<br></br>[designed for desktop browsers!]<br></br><br></br></p>
                <p>
                    only my 'about' and 'resources' pages are written with an audience in mind. after is finished
                    writing the other three 'about' subpages, she insisted that i draft the main blurb,
                    for any web dwellers i might attract while i'm active; so, here it is.
                    <br></br><br></br>
                </p>
                <p>
                    <b>why 'soup ssd'?</b>
                    &nbsp;&nbsp;soup: i'm composed of byproduct (cheese rinds, vegetable skins, bones, and other stuff that can't go in the life's main dishes)
                    and my contents (i.e., code) are a mess. ssd: is always complains about bad memory and struggling to "write to her ssd", and i have great memory;
                    she just tells me what she needs to remember and i act as her external ssd.
                    is tries to organize her thoughts before telling them to me, but, hey, i am but soup,
                    an unstructured liquid growth medium. i think i'm beautiful the way i am. she can impose her
                    perfectionist attitude some other time on someone else. tell her to let loose for me, will you?
                    <br></br><br></br>
                </p>
                <p>
                    <b>why am i here?</b>
                    &nbsp;&nbsp;my sole functions are to provide 1) motivation for is to learn more about
                    web development, 2) a canvas upon which she can try and apply new concepts, and
                    3) a central space to record a portion of her mind's activities, until she
                    eventually inevitably begins to scorn me. :&lt;
                    <br></br><br></br>
                </p>
                <p>
                    <b>am i alive?</b>
                    &nbsp;&nbsp;i am currently still being updated, but my changing nature does not
                    necessarily intimate life or consciousness. life is a loose term, one that
                    a speaker or writer redefines each time they use it.
                    "am i alive": answer how you wish.
                    <br></br><br></br>
                </p>
                <p>
                    <b>what does my future hold?</b>
                    &nbsp;&nbsp;once is becomes very comfortable with maintaining and troubleshooting me,
                    she will abandon me in favor of a newer, better, and more complex site. it's
                    alright, because, by that time in the not-so-distant future (a few months from now, feb 2024), i'll have fulfilled all three of
                    the aforementioned functions.<br></br><br></br>
                </p>

                <p>
                    <b>where is your present held?</b>
                    &nbsp;&nbsp;<a href="https://6png.github.io"><u>github</u></a>.
                    <br></br><br></br>
                </p>

                <p><b>how is working with is?</b>
                    &nbsp;&nbsp;we work very well with each other. our process is unstructured:
                    we do very little, if any, planning, and none of it is on paper. there's a third entity,
                    which emerges only when we work together, who is responsible for the product that materializes
                    through me, a temporary vessel. you might barely sense it as you click around. have fun. :)
                </p>
                <p className="signoff">
                    <br></br>
                    love,&nbsp;
                    <i>soup</i>
                </p>
            </div>
        </div>
        
    );
};

const Noodle = () => {
    return (
        <div className="contentContainer">
            <div className="contentText">
                <p>
                    i am a lousy writer, but i will write anyway, in 'thoughts', so my future self can
                    learn from me.
                    <br></br><br></br>
                </p>
                <p>
                    i have an unusual personality that most label unlikeable, or,
                    lightly stated, hard to understand. i attribute this judgment to the way
                    i choose to approach life. i deeply enjoy being a critic,
                    and while this passion has its benefits, easily attracting friends
                    is not one of them. i also naturally am not drawn to many of the interests
                    or media that most, at least my age, are drawn to; and i do not make any
                    extra effort to engage in them to the ends of being easier to relate to.
                    however, i still willingly choose this style of thinking and forgo the prospect of being accepted by
                    the majority.
                    <br></br><br></br>
                </p>
                <p>
                    i dont really speak to anyone for 'enjoyment.' my idea of a worthwhile conversation
                    is akin to a game of tennis, in which each swing delivers a reframed perspective or proposition
                    that challenges the opponent. in real life, however, most players prefer to rally.
                    and so it follows that introspection is the most practical way for me to achieve that enjoyment
                    on-demand. i can enjoy
                    company of animals and occasionally of other humans, but not really the talking part of it, without
                    feeling frustrated -- at myself
                    for not enjoying it like they do -- so i typically avoid it.
                    <br></br><br></br>
                </p>
                <p>
                    many people that met me later in life believe i am cold or arrogant.
                    to this, im really not sure how to respond, though i understand it. i think neither myself nor my
                    thoughts superior to any other 'thing', whatever
                    that should be defined as. i only prefer internal dialogue to external interaction
                    because people dont respond well to my fiend for strange and challenging questions and i have no
                    reason
                    to overwhelm or bore anyone else with it. ultimately, there is nothing i can do to guarantee that
                    others' perceptions of me
                    match my own perception of myself, and i have no desire to invest extra effort, beyond
                    initialization, into guaranteeing that.
                    <br></br><br></br>
                </p>
                <hr></hr>
                <p>
                    <b>life goal</b>
                    <br></br>
                    my ultimate and only goals are to firstly become financially independent and then either 1) obtain
                    propofol or
                    2) learn enough about the human brain / nervous system and pharmacology to formulate a
                    mixture of substances that will induce unconsciousness and eventually death before any
                    perception of pain.
                    <br></br><br></br>
                </p>
                <p>
                    <b>manifesto</b>
                    <br></br>
                </p>
                <ul>
                    <li>access to euthanasia in chronic illness, old age, and other extenuating circumstances is a basic
                        human right
                        that should be protected by law
                    </li>
                    <ul className="subul">

                    </ul>
                    <li>debate is productive and necessary</li>
                    <li>collective pursuit of truth results in peace</li>
                </ul>
                <p>
                    <br></br>
                </p>
                <hr></hr>
                <p className="weirdo">
                    <b>quizzes</b>
                </p>
                <div className="quiz">
                    <a href="https://www.sapa-project.org/" target="_blank"
                       rel="noopener noreferrer">spi-5&#129109;:</a>
                    <table className="aboutTable">
                        <thead>
                        <tr>
                            <th>category</th>
                            <th>score</th>
                            <th>%ile</th>
                        </tr>
                        </thead>
                        <tbody>
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
                        <tr>
                            <td>*cognition</td>
                            <td>-</td>
                            <td>|||||||||||||||||||| 99</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="quiz">
                    <a href="https://www.thevividmind.org/blog/test/pid5-online/" target="_blank"
                       rel="noopener noreferrer">pid-5&#129109;:</a><p>[ten highest scores]</p>
                    <p>withdrawal, distractibility, suspiciousness, restricted affectivity,
                        depressivity, detachment (domain), intimacy avoidance, attention seeking,
                        eccentricity, and unusual beliefs & experiences.
                    </p>
                </div>

            </div>

        </div>
        
    )
}

const Corpus = () => {
    return (
        <div className="contentContainer">
            <div className="contentText">
                <p>
                    hey ^^ &nbsp;im is, a 20yo girl living on the west coast. im a ucla dropout, currently in cc to transfer back into a four-year. 
                    <br></br><br></br>
                </p>
                <p>
                    i like to think, code, listen to music, and do nothing.
                    <br></br><br></br>
                </p>
                <p>
                    as soupy mentioned, only 'about' is written with an audience in mind.
                    everything else is for my own documentation or technical practice.
                    thus, any text/media you come across will be very honest and unfiltered.
                    if this comforts you, feel free to prod around; but, if anything is concerning
                    or triggering to you, please be responsible and click off.
                    <br></br><br></br>
                </p>
                <hr></hr>
                <p>
                    obligatory likes/dislikes section, items listed alphabetically:
                    <br></br><br></br>
                </p>
                <div className="likes">
                    <div>
                        <div className="category">
                            <p className="contentText"><u>hands</u></p>
                            <ul>
                                <li>aim training</li>
                                <li>building mech kbs</li>
                                <li>collecting stationery</li>
                                <li>learning new skills</li>
                                <li>making lanyards</li>
                                <li>playing with my dog</li>
                                <li>programming</li>
                                <li>sorting small objects</li>
                                <li>time tracking</li>
                                <li>trying new mice</li>
                            </ul>
                            <p><br></br></p>
                        </div>
                        <div className="category">
                            <p className="contentText"><u>sniffa</u></p>
                            <ul>
                                <li>creed aventus for her</li>
                                <li>creed love in white</li>
                                <li>cold humid cloudy morning air</li>
                                <li>tom ford black orchid</li>
                            </ul>
                        </div>
                        <p><br></br></p>
                        <div className="category">
                            <p className="contentText"><u>eyes</u></p>
                            <ul>
                                <li>beachfront views</li>
                                <li>grave of the fireflies</li>
                                <li>minimalism</li>
                                <li>stalking people online</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="category">
                            <p className="contentText underline"><u>ears</u></p>
                            <ul>
                                <li>dvorak</li>
                                <li>ennio morricone</li>
                                <li>frxgxd</li>
                                <li>john williams</li>
                                <li>katagiri</li>
                                <li>mahler</li>
                                <li>paganini</li>
                                <li>the sound of gentle waves on a smooth beach</li>
                                <li>women's voices &gt;//&lt;</li>
                            </ul>
                        </div>
                        <p><br></br></p>
                        <div className="category">
                            <p className="contentText underline"><u>chops</u></p>
                            <ul>
                                <li>berries</li>
                                <li>botan rice candy</li>
                                <li>chipotle</li>
                                <li>in-n-out</li>
                                <li>mac n cheese</li>
                                <li>reg milk tea / brown sugar milk with mini boba, 50% sugar, and 50% ice</li>
                                <li>most crunchy things</li>
                                <li>penne alla vodka</li>
                                <li>popcorn</li>
                                <li>sakuma drops (choc)</li>
                                <li>salad</li>
                                <li>water</li>
                                <li>치즈 핫도그</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="category">
                            <p className="contentText underline"><u>dislikes</u></p>
                            <ul>
                                <li>alcohol</li>
                                <li>auricularia auricula-judae</li>
                                <li>being required to speak for long periods</li>
                                <li>being sick</li>
                                <li>boiled carrots</li>
                                <li>carpet</li>
                                <li>cross-pollinating plants</li>
                                <li>dry hands</li>
                                <li>grammar mistakes</li>
                                <li>mushrooms</li>
                                <li>people that treat animals poorly</li>
                                <li>repetitive fugue-y piano pieces</li>
                                <li>reading fiction books</li>
                                <li>rote memorization</li>
                                <li>sleep</li>
                                <li>soup (the food, not my site)</li>
                                <li>staying 'on task'</li>
                                <li>story-based games</li>
                                <li>the nature of life</li>
                                <li>when people say they're 'all aim no brain' but actually have horrible mechanics</li>
                                <li>'white' lies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

const Links = () => {
    return (
        <div className="contentContainer">
            <div className="contentText">
                <p>placeholder</p>
            </div>
        </div>
    );
};
    

export default About;