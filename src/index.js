import  React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import "./footer.css";
import img from "./LOGO EDMAN 2018 copy.png";

function Container () {
  return(
    <section>
      <Img1/>
      <Img2/>
      <Title/>
      <Subtitle/>
      <SomeText/>
      <Footer/>
    </section>
  );
}

const Img1 = () => (
  <img width="200" src={img} alt="img"/>
);

const Img2 = () => (
  <img width="300" src={img} alt="img"/>
);

const Title = () => <h1 className="h1">hello this is the Title</h1>;

const Subtitle = () => <p>hello this is the subtitle</p>;

const Footer = () => <div className="footer"><p>© 2018 EdMan. All Rights Reserved</p></div>;

const SomeText = () => <div className="sometext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias nam vel fuga architecto consequatur distinctio eos. Autem aliquid natus adipisci aut architecto. Sapiente harum aliquam expedita distinctio, quasi dicta! Similique!</div>

ReactDOM.render(<Container/>, document.getElementById("root"));
