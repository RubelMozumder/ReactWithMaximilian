export default function Header({
  headH1,
  headImg,
  imgAlt,
  headDesc,
  ...props
}) {
  return (
    <header id={props.id ? props.id : null}>
      <img src={headImg} alt={imgAlt} />
      <h1>{headH1}</h1>
      <p>{headDesc}</p>
    </header>
  );
}
