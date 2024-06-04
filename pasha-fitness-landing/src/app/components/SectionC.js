const SectionC = (props) => {
  //className alt - right

  return (
    <section className={`wrapper spotlight ${props.className}`}>
      <div
        style={{ ...props.style, borderRadius: "0!important" }}
        className={`${props.classNameInner} inner`}>
        {props.children}
      </div>
    </section>
  );
};

export default SectionC;
