import React from "react";

function Blog() {
  return (
    <div className="skills-page-content">
      <br />
      <div className="careerPage">
        <h2 className="careerTitle">Tom's Career to Date</h2>
        <br />
        <h3>Software Engineering Immersive - General Assembly 2023</h3>
        <p>
          A three month intensive course that taught the fundamentals of HTML5,
          CSS, and JavaScript, in order to prepare myself for a career in
          Software Engineering and Development. Applications built for final
          courseworks include the following:
        </p>
        <ul className="careerskills">
          <li>
            <a href="https://tomtenniscourt.github.io/tic_tac_toe_200623/">
              Tic Tac Toe
            </a>{" "}
            - My first coursework that demonstrates my ability to build a simple
            PvP tic tac toe application using simple JavaScript logic. Players
            have the ability to choose their name, and see a scoreboard updated
            with each win. Player names can be changed with ease, and the
            scoreboard can be reset with ease. A basic version of this can also
            be found on the homepage of this portfolio website.
          </li>
          <br />
          <li>
            Dad Joke Generator - This application demonstrates my ability to
            incorporate a third-party API into a react application, and will
            fetch a random 'Dad Joke' upon each request. This application also
            showcases my ability to Create, Update, and Delete elements within
            an application, as users can save their favourite jokes to a list on
            a separate page, and have the ability to edit the jokes, create
            their own, and delete selected jokes at their leisure. A basic
            version of this application can also be found on the homepage.
          </li>
          <br />
          <li>
            Football Friends - Completed as part of a group coursework, this
            application was designed to be a mixture of a dating app and fantasy
            football. Complete with user authentication, a user can register an
            account, log in, and create a profile designed around showcasing
            one's favourite football/soccer teams and players. They can then
            view other profiles, and interact with users based on their
            preferences.
          </li>
          <br />
          <li>
            Chef Tom - As part of my final coursework, I create a website for a
            fictional restaurant that allows a user to register an account and
            make a reservation for a date/time of their choice.
          </li>
        </ul>
        <br />
        <h3>Policy and Engagement Officer - BusinessLDN 2021-2023</h3>
        <p>
          Was responsible for proactive lobbying and digital communication
          strategies along with Westminster/London-wide relationship building:
        </p>
        <ul className="careerskills">
          <li>
            Worked on the #FullStrength campaign during Brexit that achieved
            multiple campaign targets.
          </li>
          <li>
            Worked with the CBI, FSB, and LCCI on the London-wide Local Skills
            Improvement Plan, an initiative funded by the Department for
            Education.
          </li>
          <li>
            Prepared briefings in collaboration with policy leads, and
            established opportunities to encourage parliamentarians to table
            debates and Prime Minister’s Questions.
          </li>
          <li>
            Monitored select committee inquiries, APPG’s activities, and worked
            with policy leads to prepare responses and activities for engagement
            opportunities.
          </li>
        </ul>
        <br />
        <h3>Client Manager - Cascade Communications 2021</h3>
        <p>
          Client Manager responsible for managing communications and strategies
          for client projects during pre-application stages across London:
        </p>
        <ul className="careerskills">
          <li>
            Acted as project manager and main point of contact for multiple
            clients and projects.
          </li>
          <li>
            Provided communications, stakeholder engagement, and consultation
            advice to clients for a variety of development projects and
            campaigns.
          </li>
          <li>
            Created a range of physical and digital materials to assist clients
            in project deliveries.
          </li>
          <li>
            Actively contributed to new business development and networking
            opportunities.
          </li>
        </ul>
        <br />
        <h3>SEC Newgate 2018-2021</h3>
        <p>
          Responsible for delivering political consultation and communication
          strategies to clients and their projects throughout the South East of
          England and Scotland:
        </p>
        <ul className="careerskills">
          <li>
            Managed multiple client accounts, as well as acting as the main
            point of contact.
          </li>
          <li>
            Devised support materials for clients to ensure a highly accurate
            understanding and knowledge of political figures, policies, and
            relevant political developments.
          </li>
          <li>
            Identified key lobbying targets for clients, and organised meetings
            on their behalf.
          </li>
          <li>
            Planned and organised events with key political speakers for
            clients, prospective clients, and stakeholders.
          </li>
        </ul>
      </div>
      <div className="skillsPage">
        <h2>Tom's Skills</h2>
        <br />
        <h3>Software Engineering Skills</h3>
        <div className="bullets">
        <ul className="skills">
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Bootstrap</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>Ruby</li>
          <li>Ruby on Rails</li>
        </ul>
        </div>
        <br />
        <h3>Further Skills</h3>
                <div className="bullets">
        <ul className="skills">
          <li>Public Affairs</li>
          <li>Public Relations</li>
          <li>Stakeholder Engagement</li>
          <li>Stakeholder Management</li>
          <li>Microsoft Office</li>
          <li>Teamwork</li>
          <li>Time Management</li>
          <li>Communications</li>
          <li>Public Speaking</li>
          <li>Event Management</li>
          <li>Guitarist</li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Blog;
