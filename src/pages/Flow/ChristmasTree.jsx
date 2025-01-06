import React, { useState, useEffect } from 'react';
import { db, storage } from '../../config/firebaseClient';
import { v4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, getDocs } from 'firebase/firestore';

import Header from '../components/Header';
import FlowFooter from '../components/FlowFooter';
import christmasSong from "../../audio/christmas.mp3"

import playIcon from "../../icons/play (1).png"
import pauseIcon from "../../icons/pause.png"

function ChristmasTree() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedData, setUploadedData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const christmasTreeCollectionRef = collection(db, 'christmas_tree'); // Correct collection name

  // Fetch existing content
  const getUploadedData = async () => {
    try {
      const data = await getDocs(christmasTreeCollectionRef);
      const fetchedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUploadedData(fetchedData);
    } catch (error) {
      console.error("Error fetching uploaded data:", error);
    }
  };

  useEffect(() => {
    getUploadedData();
  }, []);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setUploadStatus("File selected.");
    }
  };

  // Handle submit: upload file and store URL in Firestore
  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("Please select an image before submitting.");
      return;
    }

    setIsUploading(true);
    const imageRef = ref(storage, `christmastree/${v4()}`);

    // Upload file to Firebase Storage
    try {
      const snapshot = await uploadBytes(imageRef, selectedFile);
      const url = await getDownloadURL(snapshot.ref);

      // Store the image URL in Firestore
      await addDoc(christmasTreeCollectionRef, {
        image_url: url, // Store the image URL
        uploadedAt: new Date(), // Add timestamp
      });

      setUploadStatus("Image uploaded and stored successfully.");
      setSelectedFile(null); // Clear the file input
      getUploadedData(); // Refresh uploaded data list
    } catch (error) {
      console.error("Error uploading file or storing data:", error);
      setUploadStatus("Upload failed. Please try again.");
    } finally {
      setIsUploading(false); // Reset uploading state
    }
  };

  // Handle image click to open modal
  const handleImageClick = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  // Function to arrange images into rows (tree-like)
  const getTreeRows = () => {
    const rows = [];
    let currentRow = [];
    let rowCount = 1;

    uploadedData.forEach((content, index) => {
      currentRow.push(content);
      if (currentRow.length === rowCount) {
        rows.push(currentRow);
        currentRow = [];
        rowCount++;
      }
    });

    if (currentRow.length) rows.push(currentRow); // Add any remaining items to the last row
    return rows;
  };

  return (
    <div className='flow-2'>
      <div className='flow-header-top'>
        <Header />
      </div>
      <div className='flow-scroll'>
        <div className='christmas-tree'>
          <div>
            <div className="uploaded-content mt-6">
              {/* Map the rows */}
              {getTreeRows().map((row, rowIndex) => (
                <div key={rowIndex} className={`tree-row tree-row-${rowIndex}`}>
                  {row.map((content) => (
                    <div key={content.id} className="uploaded-item">
                      <img 
                        src={content.image_url} 
                        alt="Uploaded" 
                        className="christmas-uploaded-image" 
                        onClick={() => handleImageClick(content.image_url)} 
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Input section will be pushed to the bottom */}
          <div className='christmas-input'>
            <p className='text-[14px] font-semibold text-white'>Add Cutiepie face:</p>
            <div className='flex justify-center items-center'>
              <input
                type='file'
                accept='image/*'
                onChange={handleFileChange}
                className='christmas-file-input mb-2'
              />
              <button
                onClick={handleSubmit}
                className='christmas-upload-button'
                disabled={isUploading || !selectedFile}
              >
                {selectedFile ? (isUploading ? "Uploading..." : "Submit") : "No image"}
              </button>
            </div>
            <audio autoPlay loop>
              <source src={christmasSong} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
      <div className='flow-footer-bot'>
        <FlowFooter />
      </div>

      {/* Modal for larger image */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <img src={modalImage} alt="Large view" className="modal-image" />
            <button onClick={() => setIsModalOpen(false)} className="back-button">Back</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChristmasTree;
