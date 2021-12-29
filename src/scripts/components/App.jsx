import "../../styles/App.scss";
import { useEffect, useState } from "react";

function App() {
  const testimonials = [
    {
      picture: "image-tanya.jpg",
      name: "Tanya Sinclair",
      role: "UX Engineer",
      testimonial:
        "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
    },
    {
      picture: "image-john.jpg",
      name: "John Tarkpor",
      role: "Junior Front-end Developer",
      testimonial:
        "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    },
  ];

  const [actualIndex, setActualIndex] = useState(0);

  const [picture, setPicture] = useState(testimonials[0].picture);
  const [name, setName] = useState(testimonials[0].name);
  const [role, setRole] = useState(testimonials[0].role);
  const [testimonial, setTestimonial] = useState(testimonials[0].testimonial);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  function handleKeyDown(event) {
    if (event.keyCode === 37) {
      previousTestimonial();
    }
    if (event.keyCode === 39) {
      nextTestimonial();
    }
  }

  function nextTestimonial() {
    if (Number(actualIndex) === testimonials.length - 1) {
      setActualIndex(actualIndex - (testimonials.length - 1));
    } else {
      setActualIndex(actualIndex + 1);
    }
  }

  function previousTestimonial() {
    if (Number(actualIndex) === 0) {
      setActualIndex(testimonials.length - 1);
    } else {
      setActualIndex(actualIndex - 1);
    }
  }

  useEffect(() => {
    setPicture(testimonials[actualIndex].picture);
    setName(testimonials[actualIndex].name);
    setRole(testimonials[actualIndex].role);
    setTestimonial(testimonials[actualIndex].testimonial);
  }, [actualIndex]);

  return (
    <main className="slider">
      <div className="imgSlider">
        <div className="userImg">
          <div>
            <img src={picture} alt={name + "'s picture"} />
            <div className="sliderButtons">
              <button className="sliderBtn" onClick={previousTestimonial}>
                <img src="./icons/icon-prev.svg" alt="Previous Slide" />
              </button>
              <button className="sliderBtn" onClick={nextTestimonial}>
                <img src="./icons/icon-next.svg" alt="Next Slide" />
              </button>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <article>
            <p>“ {testimonial} ”</p>
            <div className="person">
              <h1>{name}</h1>
              <h2>{role}</h2>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

export default App;
