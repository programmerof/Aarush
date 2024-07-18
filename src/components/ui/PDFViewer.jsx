import React, { useState, useEffect } from 'react';
import { PDFDocument, rgb, StandardFonts, degrees } from 'pdf-lib';

const PDFWatermarkViewer = () => {
  const [currentPdf, setCurrentPdf] = useState(1);
  const [pdfUrl, setPdfUrl] = useState('');
  const [error, setError] = useState(null);
  const totalPdfs = 18;

  useEffect(() => {
    addWatermark();
  }, [currentPdf]);

  const addWatermark = async () => {
    try {
      console.log(`Fetching PDF: /math 9 split teacher guide/${currentPdf}.pdf`);
      const response = await fetch(`/math 9 split teacher guide/${currentPdf}.pdf`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const pdfBytes = await response.arrayBuffer();
      console.log('PDF fetched successfully');

      const pdfDoc = await PDFDocument.load(pdfBytes);
      console.log('PDF loaded successfully');
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

      const pages = pdfDoc.getPages();
      console.log(`Adding watermark to ${pages.length} pages`);
      pages.forEach((page, index) => {
        const { width, height } = page.getSize();
        const fontSize = 60;
        page.drawText('Vedanta Publication', {
          x: 50,
          y: height / 2 + 300,
          size: fontSize,
          font: helveticaFont,
          color: rgb(1, 0, 0),
          opacity: 0.2,
          rotate: degrees(45),
        });
        page.drawText('Vedanta Publication', {
          x: 50,
          y: height / 2,
          size: fontSize,
          font: helveticaFont,
          color: rgb(0, 0, 1),
          opacity: 0.2,
          rotate: degrees(45),
        });
        page.drawText('Vedanta Publication', {
          x: 50,
          y: height / 2 - 300,
          size: fontSize,
          font: helveticaFont,
          color: rgb(1, 0, 0),
          opacity: 0.2,
          rotate: degrees(45),
        });
        console.log(`Watermark added to page ${index + 1}`);
      });

      const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
      console.log('PDF saved as data URI');
      setPdfUrl(pdfDataUri);
      setError(null);
    } catch (err) {
      console.error('Error in addWatermark:', err);
      setError(`Error loading PDF: ${err.message}`);
    }
  };

  const nextPdf = () => {
    setCurrentPdf(prev => (prev < totalPdfs ? prev + 1 : prev));
  };

  const prevPdf = () => {
    setCurrentPdf(prev => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="pdf-viewer">
     <div className="controls flex items-center justify-between">
  <button
    onClick={prevPdf}
    disabled={currentPdf === 1}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
    Previous
  </button>
  <span className="text-gray-700">
    PDF {currentPdf} of {totalPdfs}
  </span>
  <button
    onClick={nextPdf}
    disabled={currentPdf === totalPdfs}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
    Next
  </button>
</div>

      {error ? (
        <div className="error">{error}</div>
      ) : pdfUrl ? (
        <iframe 
          src={pdfUrl} 
          width="100%" 
          height="600px"
          title="PDF Viewer"
        />
      ) : (
        <div>Loading PDF...</div>
      )}
    </div>
  );
};

export default PDFWatermarkViewer;