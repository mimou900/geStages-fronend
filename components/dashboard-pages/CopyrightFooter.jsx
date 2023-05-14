const CopyrightFooter = () => {
  return (
    <div className="copyright-text">
      <p>
        © {new Date().getFullYear()} by{" "}
        <a
          href="https://themeforest.net/user/ib-themes"
          target="_blank"
          rel="noopener noreferrer"
        >
          geStage
        </a>
        . All Right Reserved.
      </p>
    </div>
  );
};

export default CopyrightFooter;
