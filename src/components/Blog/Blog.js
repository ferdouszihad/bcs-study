import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container container" id="blog">
      <h1 className="blog-title"> Read our Blogs</h1>
      <article>
        <div className="question">How React work??</div>
        <div className="answer">
          React is a Javascript special library , which is developed by facebook
          specially for the web development purpose . React contain JSX (
          <small>Javascript XML</small>) which mostly like as HTML . It assume
          all the tags as a component convert it into object and all the
          attributes as its property and convert it as it property.
          <br />
          With all the component it create a virtual dom tree and convert all
          the javascript file into plain HTML . for any kind of change it only
          measure the change on its ownn virtual dom and sends the data to the
          actual dom. with more and more Node packages react Based web
          application get more fancy and more interactive.
        </div>
      </article>
      <article>
        <div className="question">
          What is the difference between props and state?
        </div>
        <div className="answer">
          Props are the data or object property of a component. if a component
          declared and if we set attribute of the component then , it will store
          all the component attribute as a object and pass it too the
          components.and this object called as a props.
          <br /> <br />
          State are define the state of a data in a website. By Using React Hook
          , we get the state variable , and state changing function for
          reassigning props of a component for the user interaction.
          <hr /> <br />
          at the end , we can say that Props is the property of a component. but
          state is the React hook which can change the value of props for any
          kind of user action.
        </div>
      </article>
      <article>
        <div className="question">
          What can UseEffect do except data loading?
        </div>
        <div className="answer">
          UseEffect is a react Hook. Use Effect basically use for data fetching
          . But it also used these work.
          <ul style={{ marginLeft: "20px" }}>
            <li>
              Use Effects runs on every render. so that any kind of change on
              the dependency variable Use effect run itself
            </li>
            <li>for adding an event listener for a button.</li>
            <li>
              for performing an action when state or props change. useEffect
              will render for every change
            </li>
            <li>Clean up event listeners when the component unmounts.</li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default Blog;
