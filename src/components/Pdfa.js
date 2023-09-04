import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import { styled } from 'styled-components';
  
  
export default function Test(url) {
      
  pdfjs.GlobalWorkerOptions.workerSrc = 
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  
  /*To Prevent right click on screen*/
  // document.addEventListener("contextmenu", (event) => {
  //   event.preventDefault();
  // });
    
  /*When document gets loaded successfully*/
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  
  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }
  
  function previousPage() {
    changePage(-1);
  }
  
  function nextPage() {
    changePage(1);
  }
  
  return (
    <>
    <Sim className="main" style={{maxWidth: "100%", backgroundColor: "#ff0b5b"}}>
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false} scale={1}/>
      </Document>
      <div className='sim'>
        <div className="pagec">
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </div>
        <div className="buttonc">
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
          className="Pre"
            
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
           
        >
          Next
        </button>
        </div>
      </div>
      </Sim>
    </>
  );
}

const Sim = styled.div`
margin-bottom: 20px;
border: solid 1px black;
  canvas{
    max-width: 100%;
  }
  .sim{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    border: solid 1px black;
    border-bottom: none;
    color: #fff;
  }
  .pagec{
    margin-bottom: 2px;
  }
`