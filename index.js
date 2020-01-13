'use strict';

const appRoot = document.querySelector('#application-root');

function App(props) {
    console.log(props)
    return (
      <head>
        {props.children}
      </head>
    );
  }

  ReactDOM.render(
    <App>
      <header>
        <h1>Sally Student</h1>
        <address>
          <ul>
            <li>Phone:123-123-4567</li>
            <li>Email:<a href="mailto:sallystudent@email.com?subject=Sally%20Student%20Resume">sallystudent@email.com</a></li>
          </ul>
          <img src="Sally Student.jpg" alt="A picture of Sally" width="350"/>
        </address>
      </header>
      <main>
        <section>
          <h2>Education</h2>
          <ul>
            <li>Thinkful Software Engineer-Flex Graduate</li>
            <li>Bachelor of Computer Science at Washington University</li>
            <li>Graduated from Palmer High School</li>
          </ul>
        </section>
        <section>
          <h2>Work History</h2>
          <ul>
            <li><strong>Junior Software Engineer for Techy Tech Tech</strong><i> Jan, 2019 - Current</i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam ipsum, gravida nec ornare egestas, rhoncus at nulla. Praesent sit amet augue hendrerit, consectetur nunc a, cursus leo. Nulla ac turpis vitae tellus molestie efficitur. In semper gravida libero, sed aliquam nulla gravida ac. Suspendisse mattis magna massa, sed tincidunt orci laoreet et. Aliquam pretium non orci et pulvinar. Curabitur aliquet purus ut risus vestibulum pretium. Sed laoreet mauris lacus, in laoreet nunc mollis et.</li>
            <li><strong>Frontend Web Developer at Weby Webs</strong><i> Jan 2017 - Jan, 2018</i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam ipsum, gravida nec ornare egestas, rhoncus at nulla. Praesent sit amet augue hendrerit, consectetur nunc a, cursus leo. Nulla ac turpis vitae tellus molestie efficitur. In semper gravida libero, sed aliquam nulla gravida ac. Suspendisse mattis magna massa, sed tincidunt orci laoreet et. Aliquam pretium non orci et pulvinar. Curabitur aliquet purus ut risus vestibulum pretium. Sed laoreet mauris lacus, in laoreet nunc mollis et.</li>
          </ul>
        </section>
      </main>
    </App>,
    appRoot
  )