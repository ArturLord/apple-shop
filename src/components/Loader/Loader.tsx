import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width={320}
    height={425}
    viewBox="0 0 400 560"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="96" y="22" rx="20" ry="20" width="246" height="333" />
    <rect x="67" y="388" rx="10" ry="10" width="304" height="63" />
    <rect x="44" y="496" rx="10" ry="10" width="111" height="35" />
    <rect x="242" y="484" rx="30" ry="30" width="154" height="52" />
  </ContentLoader>
);

export default Loader;
