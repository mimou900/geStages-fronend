const BreadCrumb = ({ title = "" }) => {
  return (
    <div className="upper-title-box">
      <h3>{title}</h3>
      <div className="text">Trouver l'oportunite avec geStage</div>
    </div>
  );
};

export default BreadCrumb;
