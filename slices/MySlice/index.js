import React from 'react'
import { RichText } from 'prismic-reactjs'

const MySlice = ({ slice }) => console.log('Slice data: ', slice) || (
  <section>
    <RichText render={slice.primary.title} />
    <RichText render={slice.primary.description} />
    <div className="card">
      <img src={slice.primary.topProduct.pictureURL} style={{ width: '100%' }}/>
      <h4>{slice.primary.topProduct.displayName}</h4>
      <p>Door count: {slice.primary.topProduct.doorCount}</p>
    </div>
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
        .card {
          display:inline-block;
          background: white;
          width: 60%;
          box-shadow: 0 1px 2px rgba(0,0,0,0.5);
          border-radius: 3px 3px;
          -webkit-transition: all 400ms ease;
          -moz-transition: all 400ms ease;
          -o-transition: all 400ms ease;
          transition: all 400ms ease;
          -webkit-transform:  translate3d(0px, 100px, 0) rotateX(-30deg) scale(1.25, 1.25);
          -moz-transform: translate3d(0px, 100px, 0) rotateX(-30deg) scale(1.25, 1.25);
          transform: translate3d(0px, 100px, 0) rotateX(-30deg) scale(1.25, 1.25);
          opacity: 1;
      }
    `}</style>
  </section>
)

export default MySlice
