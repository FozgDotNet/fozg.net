export default ({
  title,
  description,
  iconUrl,
  url,
  isDevelopment,
  backgroundColor = 'red'
}) => (
  <div className="col-md-6 appItem">
    <style jsx>{`
      .AppItemWrap {
        margin: 15px 0;
        padding: 18px;
        border-radius: 10px;
        cursor: pointer;
        background: #ffffff;
        color: #138b80;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .1);
        transition: transform .2s;
      }
      .AppItemWrap:hover{
        transform: translateY(-10px);
      }
      p {
        margin: 0;
        color: #666;
      }
      .CircleBadget {
        width: 60px;
        height: 60px;
      }
      img {
        width: 100%;
        height: 100%;
        box-shadow: 0 3px 4px rgba(0,0,0,.4);
      }
     
    `}</style>
    <a href={url || '#'} target="_blank">
      <div className="row col AppItemWrap">
        <div className="CircleBadget col-auto p-0">
          <img src={iconUrl} alt={title} className="rounded-circle"/>
        </div>
        <div className="col">
          <h3>{title}</h3>
          <p>{description}</p>
          {isDevelopment && <div className="badge badge-pill badge-secondary">In Development</div>}
        </div>
      </div>
    </a>
  </div>
)