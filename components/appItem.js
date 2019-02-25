export default ({
  title,
  description,
  iconUrl,
  url,
  isDevelopment,
  isBeta,
  isPreview,
  backgroundColor = 'red'
}) => (
  <div className="col-xs-12 col-sm-10 col-lg-6 appItem">
    <style jsx>{`
      .AppItemWrap {
        margin: 15px auto;
        padding: 18px;
        border-radius: 10px;
        cursor: pointer;
        background: #26282c;
        /* box-shadow: 0 2px 6px 0 rgba(0,0,0,.1); */
        -webkit-transition: -webkit-transform .2s;
        -webkit-transition: transform .2s;
        transition: transform .2s;
        min-height: 105px;
        border: 1px solid #0e0e0e;
      }
      .AppItemWrap .badge {
        transition: .3s opacity;
        opacity: .8;
      }
      .ItemTitle {
        transition: .3s color;
      }
      .AppItemWrap:hover{
        transform: translateY(-5px);
      }
      .AppItemWrap:hover .badge {
        opacity: 1;
      }
      p {
        margin: 0;
        color: #999;
      }
      .CircleBadget {
        width: 60px;
        height: 60px;
      }
      img {
        width: 100%;
        height: 100%;
        box-shadow: 0 3px 4px rgba(0,0,0,.2);
      }
     
    `}</style>
    <a href={url || '#'} target="_blank">
      <div className="row AppItemWrap">
        <div className="CircleBadget col-auto p-0">
          <img src={iconUrl} alt={title} className="rounded-circle"/>
        </div>
        <div className="col">
          <h3 className="ItemTitle">{title}</h3>
          <p>{description}</p>
          {isDevelopment && <div className="badge badge-pill badge-info">In Development</div>}
          {isBeta && <div className="badge badge-pill badge-success">Beta</div>}
          {isPreview && <div className="badge badge-pill badge-warning">Preview</div>}
        </div>
      </div>
    </a>
  </div>
)