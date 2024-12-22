import React, { useState, useEffect } from 'react';
import { supabase } from '../../config/supabaseClient';
import Header from '../components/Header';
import FlowFooter from '../components/FlowFooter';

function Images() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // For enlarged image view

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .from('images')
        .select('urlpicture');

      if (error) {
        console.error('Error fetching images:', error);
      } else {
        setImages(data);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="flow-2">
      <div className="flow-header-top">
        <Header />
      </div>
      <div className="flow-scroll">
        <div className="mt-5">
          <h1 className="text-center font-semibold text-[24px] colorimageh1">IMAGES</h1>
          <p className="text-center colorimageh1">The MODEL</p>
        </div>
        {/* Gallery View */}
        <div className='px-2 py-10'>
            {selectedImage === null ? (
                <div className="photo-gallery">
                    {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.urlpicture}
                        alt={`Image ${index + 1}`}
                        className="photo-gallery-item cursor-pointer"
                        onClick={() => setSelectedImage(image.urlpicture)}
                    />
                    ))}
                </div>
                ) : (
                // Enlarged Image View
                <div className="enlarged-image-view">
                    <button
                    className="back-button"
                    onClick={() => setSelectedImage(null)}
                    >
                    &larr; Back
                    </button>
                    <img
                    src={selectedImage}
                    alt="Selected"
                    className="enlarged-image"
                    />
                </div>
            )}
        </div>
        <div className="flow-footer-bot">
            <FlowFooter />
        </div>
          
        </div>
        
    </div>
  );
}

export default Images;
