import "./AboutMe.scss";
export default function AboutMe() {
  /*
    TODO: rework bad semantics 
    Sections (https://www.w3schools.com/TAgs/tag_section.asp) arent meant to display the entire content on a page.
    Rather, they are menat to divide sections of a document. 
    
    An appropiate use of the section tag would be to, instead, do the following
    
    <div>
      <section>
        <h1>
        <p>
      </section>
    </div>

    the problem: idk what to replace the div with, yet. 
  */
  return (
    <section className="about-me">
      <h1>Hello! I am Santiago Esmeral</h1>
      <p>
        I am a semisenior react developer from Argentina, looking for new
        oportunities.
      </p>

      <h2>Who i am as a programmer</h2>
      <p>
        I can be described with two sentences: I make big emphasis in making my
        code understandable to other programmers, and I dont like to rush a
        botch implementation
      </p>
      <br />
      <p>
        If there is one thing i've learned over the many projects i've worked
        on, is that making an easy to understand piece of code can be crucial in
        the longevity of a project. The reality of the industry is that projects
        often have multiple programmers working on them throughout their
        lifetime, with differing skills and experiences. We often assume that an
        implementation we do something is obvious, whereas it may not be obvious
        for an intern, or for another fellow developer who learned to use
        different libraries or methodologies.
      </p>
      <br />
      <p>
        This is why, when i write code, i try to make it as accesible as
        possible. I like to write documentation, and simplify code. I try to
        adhere to baseline HTML elements and simple yet carefully crafted CSS
        selectors whenever possible, as those are standards set by the web
        which, once you've learned them, you'll be able to use them anywhere.
      </p>
      <br />
      <p>
        When i write code, i also like to make sure that i am implementing the
        best possible solutions. I often spend hours reading documentation and
        searching the web for what other programmers have done to solve a given
        situation. I belive the quality of the implementation far outweighs
        delivery speed. Many bugs occur when we rush things without trying to
        understand the problem in depth.
      </p>

      <h2>My Knowledge</h2>
      <p>
        I have a lot of experience with legacy and new versions of React, as
        i've worked with many of the libraries which can be considered industry
        standards (like react-router, ajax and ag-grid). I've worked with
        Typescript, SCSS, Redux and TailwindCSS (even if i dont recomend the
        later 2) I also know about web accesibility and a bit of SEO.
      </p>
    </section>
  );
}
