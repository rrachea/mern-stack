import React from 'react';
import './page.css'
import Masonry from 'react-masonry-css'
import Dummy from 'dummyjs'
import './Gallery.css'

const items = new Array(9).fill().map((item, i) => {
    return (
      <div key={i}>
        <strong>Item #{i + 1}</strong>
        <div><img src={Dummy.src(500,400)} style={{width:'100%'}} alt =''/></div>
        <div>{Dummy.text('20,60')}</div>
      </div>
    )
});

const Gallery= () =>{
  return (
    <div className='middle'>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {items}
      </Masonry>
      <div className=''></div>
    </div>
  );
}
export default Gallery;