import Slider from './AlternativeSlider';
import { useState, useEffect } from 'react';
import data from './data';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
const App = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const prevSlider = () => {
    setIndex(oldIndex => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };
  const nextSlider = () => {
    setIndex(oldIndex => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  // let lastIndex = people.length - 1;
  // useEffect(() => {
  //   if (index < 0) {
  //     setIndex(lastIndex);
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0);
  //   }
  // }, [index, people]);

  // we have to clear set interval
  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(oldIndex => {
        let index = oldIndex - 1;
        if (index < 0) {
          index = people.length - 1;
        }
        return index;
      });
    }, 6000);
    return () => clearInterval(slider);
  }, [index]);
  console.log(people);
  return (
    <article className="header__section">
      <article className="title">
        <h1>
          <span>/</span>Reviews
        </h1>
      </article>
      <Slider
        people={people}
        FaQuoteLeft={FaQuoteLeft}
        FiChevronLeft={FiChevronLeft}
        FiChevronRight={FiChevronRight}
        index={index}
        setIndex={setIndex}
        nextSlider={nextSlider}
        prevSlider={prevSlider}
      />
    </article>
  );
};
export default App;
