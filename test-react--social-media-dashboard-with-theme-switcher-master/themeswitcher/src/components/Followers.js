const Followers = () => {
  return (
    <div className="card-group">
        {/* Card Facebook */}
      <div className="card card-facebook card-centered">
        <div className="card-header">
          <img src="images/icon-facebook.svg" alt="facebook" />
          <span className="card-span-socialName">@nathanf</span>
        </div>
        <h2 className="card-title">1987</h2>
        <span className="card-span-subtitle">F O L L O W E R S</span>
        <div className="card-footer">
          <img src="images/icon-up.svg" alt="up" />
          <span className="card-span-up">12 Today</span>
        </div>
      </div>
      {/* Card Twitter */}
      <div className="card card-twitter card-centered">
        <div className="card-header">
          <img src="images/icon-twitter.svg" alt="twitter" />
          <span className="card-span-socialName">@nathanf</span>
        </div>
        <h2 className="card-title">1044</h2>
        <span className="card-span-subtitle">F O L L O W E R S</span>
        <div className="card-footer">
          <img src="images/icon-up.svg" alt="up" />
          <span className="card-span-up">99 Today</span>
        </div>
      </div>
      {/* Card Instagram */}
      <div className="card card-instagram card-centered">
        <div className="card-header">
          <img src="images/icon-instagram.svg" alt="instagram" />
          <span className="card-span-socialName">@nathanf</span>
        </div>
        <h2 className="card-title">11k</h2>
        <span className="card-span-subtitle">F O L L O W E R S</span>
        <div className="card-footer">
          <img src="images/icon-up.svg" alt="up" />
          <span className="card-span-up">1099 Today</span>
        </div>
      </div>
      {/* Card Youtube */}
      <div className="card card-youtube card-centered">
        <div className="card-header">
          <img src="images/icon-youtube.svg" alt="Youtube" />
          <span className="card-span-socialName">Nathan F.</span>
        </div>
        <h2 className="card-title">8239</h2>
        <span className="card-span-subtitle">S u b s c r i b e r s</span>
        <div className="card-footer">
          <img src="images/icon-down.svg" alt="down" />
          <span className="card-span-down">144 Today</span>
        </div>
      </div>
    </div>
  );
};

export default Followers;
