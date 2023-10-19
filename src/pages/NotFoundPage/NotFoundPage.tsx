import "./NotFoundPage.css";

type TProps = {
  pageName?: string;
};

function NotFoundPage(props: TProps) {
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
      <h1>404 Not found</h1>
    </div>
  );
}

export default NotFoundPage;
