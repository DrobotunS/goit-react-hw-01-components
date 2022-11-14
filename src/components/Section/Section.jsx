import PropTypes from "prop-types";
// import css from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section>
      <>
        {title && <h2 className={title}>{title}</h2>}
        {children}
      </>
    </section>
  );
}

Section.prototype = {
  title: PropTypes.string,
};

export default Section;