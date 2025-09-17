type ResultsProps = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  };
};

const Results = (props: ResultsProps) => {
  return (
    <div>
      {props.results.country && (
        <div>
          <div className="result-country">{props.results.country}</div>
          <div className="result-city">{props.results.cityName}</div>
          <div className="result-temp">
            {props.results.temperature}
            <span>°c</span>
          </div>
          <div className="result-condition">
            <img src={props.results.icon} alt="icon" />
            <span>{props.results.conditionText}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
