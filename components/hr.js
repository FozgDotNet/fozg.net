export default ({children, bgTextColor = '#fafafa'}) => <div className="HrWrap">
  <style jsx>{`
    .HrWrap {
      position: relative;
      display: flex;
      align-items: center;
    }
    .Hr {
      flex: 1;
      height: 6px;
      border-radius: 10px;
      background-color: #ddd;
    } 
    .Hr__text {
      font-weight: 600;
      background-color: ${bgTextColor};
      display: inline-block;
      position: relative;
      z-index: 10;
      padding: 0 10px;
      border-radius: 15px;
      margin: auto;
      text-transform: uppercase;
      font-size: 12px;
      color: #888;
    }
  `}</style>
  <div className="Hr"></div>
  <div className="Hr__text">
    {children}
  </div>
  <div className="Hr"></div>
</div>