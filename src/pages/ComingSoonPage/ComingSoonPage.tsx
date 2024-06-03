import comingSoonImage from "../../assets/images/coming-soon.jpg";

type TProps = {
  pageName?: string;
};

function ComingSoonPage(props: TProps) {
  return (
    <>
      <img style={{ width: "300px" }} src={comingSoonImage} />
      {props.pageName && (
        <h1 style={{ marginTop: "20px" }}>{props.pageName}</h1>
      )}
    </>
  );
}

export default ComingSoonPage;
