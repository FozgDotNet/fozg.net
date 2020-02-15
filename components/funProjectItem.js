export default ({
  title,
  description,
  iconUrl,
  url,
  isDevelopment,
  isBeta,
  isPreview,
  backgroundColor
}) => (
  <div className="col-xs-12 col-sm-10 col-lg-3 appItem" >
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
        border: 1px solid #0e0e0e;
        flex: 1;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
      }
      .AppItemWrap .badge {
        transition: .3s opacity;
        opacity: .8;
      }
      .ItemTitle {
        transition: .3s color;
        color: #fff;
      }
      .AppItemWrap:hover{
        transform: translateY(-5px);
      }
      .AppItemWrap:hover .badge {
        opacity: 1;
      }
      p {
        margin: 0;
        color: #fff;
      }
      .CircleBadget {
        width: 120px;
        height: 12 0px;
        margin: auto;
      }
      img {
        width: 100%;
        height: 100%;
      }
      .textWrap {
        padding: 20px;
      }
    `}</style>
    <a href={url || '#'} target="_blank">
      <div className="row AppItemWrap" style={{backgroundColor}}>
        <div className="CircleBadget col-auto p-0">
          <img src={iconUrl} alt={title} className="rounded-circle"/>
        </div>
        <div className="col textWrap">
          <h3 className="ItemTitle">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  </div>
)