const FormContent = () => {
  return (
    <form method="post" action="add-parcel.html">
      <div className="form-group">
          <label>Nom Complet</label>
          <input type="text" name="name" placeholder="name" required />
          <span className="form-label-error"> error</span>
        </div>
        {/* name */}
      <div className="form-group">
        <label>Address Email</label>
        <input type="email" name="email" placeholder="email" required />
        <span className="form-label-error"> error</span>
      </div>
      {/* email */}

      <div className="form-group">
        <label>Mot de pass</label>
        <input
          id="password-field"
          type="password"
          name="password"
          placeholder="Password"
        />
        <span className="form-label-error"> error</span>
      </div>
      {/* password */}

      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          Register
        </button>
      </div>
      {/* login */}
    </form>
  );
};

export default FormContent;
