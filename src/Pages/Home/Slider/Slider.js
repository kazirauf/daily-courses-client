import React from 'react';
import './Slider.css'
import img from '../../../images/images-background/cartoon-read.png'
const Slider = () => {
    return (
        <section className='container h-96'>
          <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img} alt="cartoon images" className="max-w-sm rounded-lg shadow-2xl" />
    <div className='pl-28 pb-28'>
      <h1 className="text-5xl font-bold pb-4">এখানে ৬ষ্ঠ থেকে ১০ম  শ্রেণি </h1>
      <h1 className="text-5xl font-bold">পর্যন্ত সব  সাবজেক্টর কোর্স আছে  </h1>
      <button className="btn btn-primary mt-10">Get The Course  </button>
    </div>
  </div>
</div>
        </section>
    );
};

export default Slider;