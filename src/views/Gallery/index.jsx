import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Gallery } from "react-grid-gallery";

const DishGallery = () => {
  const imgList = []
  useEffect(() => {

    for (var i = 1; i < 31; i++) {

      imgList.push({
        src: 'assets/img/gallery/' + i + '.jpg',
        width: 263,
        height: 264,
      },

      )
    }
    //   insertDiv.justifiedGallery({
    //     rowHeight: 200,
    //     margins: 10,
    //     border:0
    //  })
    console.log(imgList)



  });

  return (
    <div className='container-xxl ' >
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Gallery</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Gallery</li>
            </ol>
          </nav>
        </div>
      </div>
      <Gallery images={imgList}
      rowHeight={200}
      margin={10} />
    </div>

  )
}
export default DishGallery