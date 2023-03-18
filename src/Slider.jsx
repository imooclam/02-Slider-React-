const Slider = ({
  people,
  FaQuoteLeft,
  FiChevronLeft,
  FiChevronRight,
  index,
  setIndex,
}) => {
  console.log(people);
  return (
    <article className="section__center">
      {people.map((person, currentArrayIndex) => {
        const { id, image, name, title, quote } = person;
        let position = 'slide nextSlide';

        // now we said if currentArrayIndex===0 ineed to make this one is active
        if (currentArrayIndex === index) {
          position = 'slide activeSlide';
        }
        // we here said if current array index === 0 -1 mean -1 that condition we check if  we havee index 2 so 2-1 is 1 so we get the prev one and we postion as lastSlide in left transform: translateX(-100%)

        // second condition we said what if we want index is 0 and  current index is equal to last array in people get it to become the last slide
        if (
          currentArrayIndex === index - 1 ||
          (index === 0 && currentArrayIndex === people.length - 1)
        ) {
          position = 'slide lastSlide';
        }
        return (
          <article className={position} key={id}>
            <img className="person__img" src={image} alt={name} />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>

            <FaQuoteLeft className="icon" />
          </article>
        );
      })}
      <button
        className="prev"
        type="button"
        onClick={() => setIndex(index - 1)}
      >
        <FiChevronLeft />
      </button>
      <button
        className="next"
        type="button"
        onClick={() => setIndex(index + 1)}
      >
        <FiChevronRight />
      </button>
    </article>
  );
};
export default Slider;
