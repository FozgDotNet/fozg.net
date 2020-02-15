export default ({children, bgTextColor = 'transparent'}) => <div className="HrWrap">
  <style jsx>{`
    .HrWrap {
      position: relative;
      display: flex;
      align-items: center;
      padding: 6em 0 40px;
    }
    .Hr {
      flex: 1;
      height: 6px;
      border-radius: 10px;
      background-color: #252525;
      margin: 5em 0;
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