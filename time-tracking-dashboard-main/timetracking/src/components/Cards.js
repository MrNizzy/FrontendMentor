const Cards = (props) => {
  return (
    <div className={"card card-"+props.title}>
      <div className="card-tab">
        <div className="card-content">
          <h3>{props.title}</h3>
          <img src="./images/icon-ellipsis.svg" alt={"icon"} />
        </div>
        <div>
          <h2>{props.timeframeCurrent}hrs</h2>
          <span>
            {props.timeframe} - {props.timeframePrevious}hrs
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
