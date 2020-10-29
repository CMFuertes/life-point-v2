import React from 'react';
import "./style.css";



function Resources() {
    return (
        <div className="container fluid" id="resources">
            <h1 className="text-center">Resources</h1>
            <p className="text-center">While we are confident Life Point will assist in helping with your day to day life, we
            have provided a list of resources should you require further assitance. Below you can find links to
            hotlines, virtual access to licensed proffesionals as well as apps to help you get through the rough
            times.<br />Best of Luck!<i classNameName="fa fa-smile-o" aria-hidden="true"></i></p>


            <h2 className="lead">Hotlines <i className="fa fa-life-ring" aria-hidden="true"></i></h2>
            <ul>
                <li><strong><a href="https://suicidepreventionlifeline.org/">National Suicide Prevention Lifeline
        </a></strong>:
      <h2 className="lead">Call: <a href="tel:800-273-8255">800-273-8255</a></h2>
        The Lifeline provides 24/7, free and confidential support for people in distress, prevention and
        crisis resources for you or your loved ones, and best practices for professionals.
    </li>
                <br />
                <li><strong><a href="https://www.samhsa.gov/find-help/national-helpline">Substance Abuse Mental Health
          Awareness National Helpline</a></strong>:
      <h2 className="lead">Call: <a href="tel:1-800-662-4357">1-800-662-HELP (4357)</a></h2>
        SAMHSA’s National Helpline is a free, confidential, 24/7, 365-day-a-year treatment referral and
        information service (in English and Spanish) for individuals and families facing mental and/or
        substance use disorders.
    </li>
                <br />
                <li><strong><a href="https://www.crisistextline.org/">Crisis Textline</a></strong>:
      <h3 className="lead">Text: "HELP" to <a href="sms:741741">741741</a></h3>
        Connect with a Crisis Counselor with this free 24/7 support at your fingertips.
    </li>
            </ul>


            <h2 className="lead">Licensed Professionals <i className="fa fa-heart-o" aria-hidden="true"></i></h2>
            <ul>
                <li><strong><a href="https://www.betterhelp.com/">BetterHelp</a></strong> <br />Affordable, private online
      counseling. Talk with a licensed, professional therapist online.</li>
                    <br />
                    <li><strong><a href="https://www.talkspace.com/">TalkSpace</a></strong><br />Connect with a licensed therapist
                    from the palm of your hand, and experience the most convenient, affordable way to improve your mental
      health.</li>
  </ul>


                    <h2 className="lead">Apps To Help You Out <i className="fa fa-mobile" aria-hidden="true"></i></h2>
                    <ul>
                        <li><strong><a href="https://www.calm.com/">Calm</a></strong><br />Calm Is The #1 App For Mental Fitness,
      Famous For Its Guided Meditations & Sleep Stories.</li>
                            <br />
                            <li><strong><a href="https://www.headspace.com/">Headspace</a></strong><br />Live a healthier, happier, more
      well-rested life in just a few minutes a day with the Headspace app.</li>
  </ul>

</div>

  );
}

export default Resources;