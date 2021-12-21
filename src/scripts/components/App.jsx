import "../../styles/App.scss";

function App() {
  return (
    <main className="slider">
      <div className="imgSlider">
        <div className="userImg">
          <img src="image-tanya.jpg" alt="Tanya's picture" />
          <div className="sliderButtons">
            <button className="sliderBtn">
              <img src="icons/icon-prev.svg" alt="Previous Slider" />
            </button>
            <button className="sliderBtn">
              <img src="icons/icon-next.svg" alt="Next Slider" />
            </button>
          </div>
        </div>
        <div className="testimonial">
          <article>
            <p>
              “ I've been interested in coding for a while but never taken the
              jump, until now. I couldn't recommend this course enough. I'm now
              in the job of my dreams and so excited about the future.”
            </p>
            <h1>Tanya Sinclair</h1>
            <h2>UX Engineer</h2>
          </article>

          {/* <p>
            “ If you want to lay the best foundation possible I’d recommend taking
            this course. The depth the instructors go into is incredible. I now
            feel so confident about starting up as a professional developer. ”
            John Tarkpor Junior Front-end Developer
          </p> */}
        </div>
      </div>
    </main>
  );
}

export default App;
