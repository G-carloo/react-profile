import React from "react";
import '@media (min-width: 640px)'


/* Small (sm) */
  /* ... */
}

/* Medium (md) */
@media (min-width: 768px) {
  /* ... */
}

/* Large (lg) */
@media (min-width: 1024px) {
  /* ... */
}

/* Extra Large (xl) */
@media (min-width: 1280px) {
  /* ... */
}

const backgroundStyle = {
  backgroundImage: `url(${"https://cdn.pixabay.com/photo/2016/10/20/18/35/sunrise-1756274__340.jpg"})`,
  height: "auto",
  width: "auto",
};

const Landingpage = () => {
  return (
    <div id='Top'>
      <div style={backgroundStyle} className='lp'>
        <h1 className='main'>
          HI, I'm Ganief Carloo
          <h6>Web developer & UX Enthusiast</h6>
        </h1>
      </div>
    </div>
  );
};

export default Landingpage;
