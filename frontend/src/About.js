import React from "react";
import "./About.css";

function About() {
  return (
    <div class="about-page-content">
      <br />
      <h2>About Tom...</h2>
      <br />
      <h3>Who am I?</h3>

      <p>
        After leaving an eight year career in political consulting behind, I
        have recently finished a Software Engineering Immersive course with
        General Assembly. As of July 2023, I will be searching for the next
        challenege within the tech world. During this search, I plan on
        showcasing my new skills by publishing applications this protfolio
        website, and will continue to write regular blog posts that most of you
        will probably find quite boring. I currently live with my partner in
        London, and work part time in a Philadelphia-themed dive bar in SoHo.
      </p>
      <br />
      <div classNmae="image-container">
        <img
          className="portfolio-picture"
          src="https://i.imgur.com/zzSPxHu.png"
          alt="Tom with his girlfriend"
          style={{ width: "200px", height: "auto" }}
        />
      </div>
      <br />
      <h3>How did I get here?</h3>
      <p>
        I graduated from University in 2015, after studying International
        Relations at Politics at the University of East Anglia for three years.
        I very quickly found myself working preeting much every intership
        opportunity I could get my hands on, before being offered a role at a
        consultancy's Edinburgh office. After nearly two years there, I came
        back down to London and continued to bounce around various consultancies
        and organsiations within the political sphere. It was during my last
        role that I came across an initiative that aimed to reskill the
        capital's workforce with various tech skills that would help prepare the
        workforce for the challenges of the future, and from there I became
        introdced to Software Engineering. A few emails and phone calls later, I
        had left my job and was preparing to start a twelve-week intensive
        course with General Assmebly. Fast forward another twelve weeks, and
        here I am typing this all out.
      </p>
      <div classNmae="image-container">
        <img
          className="portfolio-picture"
          src="https://i.imgur.com/wVMui5R.jpeg"
          alt="Tom and his brothers in Central Park, New York City"
          style={{ width: "200px", height: "auto" }}
        />
        <img
          className="portfolio-picture"
          src="https://i.imgur.com/1ykpXg6.jpeg"
          alt="Tom on Broad Street, Philadelphia, following the Eagles winning the NFC Championship"
          style={{ width: "200px", height: "auto" }}
        />
      </div>
      <br />
      <h3>Life outside of work</h3>
      <p>
        Away from the computer, I tend to fill my freetime with a range of
        hobbies and activities which can broadly be narrowed down into two
        categories: Sports and Music.
        <br />
        <br />
        <div classNmae="image-container">
          <img
            className="portfolio-picture"
            src="https://i.imgur.com/ndO5bdE.jpeg"
            alt="Tom playing a gig with his band"
            style={{ width: "200px", height: "auto" }}
          />
          <img
            className="portfolio-picture"
            src="https://i.imgur.com/YvEkDRk.png"
            alt="Tom at the Rolling Stones, London"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
        <br />
        Sport has remained a constant part of my life since my early days at
        school. Whilst the better part of my playing days are behind me, I still
        actively follow teams in Football, Rugby, Cricket, the NFL, NBA, and
        MLB. Most of my evenings revolve around whatever sporting fixture is on,
        which depending on the sport can often run into the early hours of the
        morning.
        <br />
        <br />
        <div classNmae="image-container">
          <img
            className="portfolio-picture"
            src="https://i.imgur.com/QqwUeKD.png"
            alt="Tom skiing, Deer Valley, Utah"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
        <br />
        Music has also played a large part of my life, starting from blaring out
        the Spice Girls on my way to preschool, all the way up to playing gigs
        in rundown bars with a motley crew of dreamers. If it has a guitar,
        chances are i'll like it. I am a massive fan of live music and will
        spend most free evenings either supporting local bands or travelling
        across the country to see the next 'Big Thing'. My dream has always been
        to play Glastonbury, even if it's just the triangle. I still actively
        play guitar, so unlike my sporting career there's still hope yet...
      </p>
      <br />
      <br />
      <div classNmae="image-container">
        <img
          className="portfolio-picture"
          src="https://i.imgur.com/qI2RUh5.png"
          alt="Tom at Superbowl 57"
          style={{ width: "200px", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default About;
