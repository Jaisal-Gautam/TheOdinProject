import "./entry.css";
export default function Entry(props) {
  return (
    <div className="card">
      <div className="image">
        <img
          src={props.img.src}
          height={300}
          width={200}
          alt={props.img.alt}
        />
      </div>
      <div className="cnt">
        <div className="cnt-head">
          <div className="country_name">{props.country}</div>
          <div className="googleMap"><a href={props.googleMapsLink}>View on Google Maps</a></div>
        </div>
        <div className="cnt-name">
          <h2>{props.title}</h2>
        </div>
        <div className="cnt-date">
          <h4>{props.dates}</h4>
        </div>
        <div className="cnt-text">
          <p>
           {props.text}
          </p>
        </div>
      </div>
    </div>
  );
}
