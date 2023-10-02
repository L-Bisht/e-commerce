import "./ComingSoonPage.css";

type TProps = {
  pageName?: string;
};

function ComingSoonPage(props: TProps) {
  return (
    <div
      className="page home-page"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img style={{ width: "300px" }} src="src\assets\images\coming-soon.jpg" />
      {props.pageName && (
        <h1 style={{ marginTop: "20px" }}>{props.pageName}</h1>
      )}
    </div>
  );
}

export default ComingSoonPage;
