import React from 'react';
import './page.css'
import Masonry from 'react-masonry-css'
// import Dummy from 'dummyjs'



const items = new Array(2).fill().map((item, i) => {
  return (
    <div key={i}>
      {/* <strong>Item #{i + 1}</strong> */}
      <div><img src={'https://picsum.photos/200/100'} style={{width:'100%'}} alt =''/></div>
      {/* <div>{Dummy.text('20,60')}</div> */}
    </div>
  )
});

const HomePage = () =>{
  return (
      <div className='main'>
        <div className="left">
        <Masonry
          breakpointCols={1}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {items}
        </Masonry>
        </div>
      </div>   
  );
}
export default HomePage;