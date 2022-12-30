import React from "react"
import ContentLoader from "react-content-loader"


const Loader: React.FC = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="279" rx="0" ry="0" width="210" height="43" /> 
    <rect x="139" y="388" rx="0" ry="0" width="1" height="74" /> 
    <rect x="0" y="5" rx="0" ry="0" width="208" height="251" /> 
    <rect x="0" y="368" rx="41" ry="41" width="97" height="31" /> 
    <rect x="114" y="368" rx="33" ry="33" width="95" height="31" /> 
    <rect x="3" y="337" rx="0" ry="0" width="99" height="25" /> 
    <rect x="112" y="337" rx="0" ry="0" width="96" height="20" />
  </ContentLoader>
)

export default Loader;