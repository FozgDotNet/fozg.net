export default ({
  title,
  description,
  iconUrl,
  url,
}) => (
  <div className="col-md-6 appItem">
    <style jsx>{`
      .AppItemWrap {
        margin: 10px 0;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
      }
      p {
        margin: 0;
        color: #000 !important;
      }
      .CircleBadget {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        overflow: hidden;
        box-shadow: 0 2px 3px rgba(0,0,0,.2);
      }
      img {
        width: 100%;
        height: 100%;
      }
    `}</style>
    <a href={url || '#'} target="_blank">
      <div className="row col AppItemWrap">
        <div className="CircleBadget col-auto p-0">
          <img src={iconUrl} alt={title}/>
        </div>
        <div className="col">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  </div>
)