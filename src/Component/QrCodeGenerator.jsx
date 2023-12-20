// QRCodeGenerator.js
import React, { useEffect } from 'react';
//import QRCodeScanner from 'qrcode-scanner-react';
import QRCode from 'qrcode.react';

const QrCodeGenerator = () => {
    const websiteURL = 'https://github.com/Haripriya129?tab=repositories'; // Set your desired website URL

    // const openWebsite = () => {
    //     window.open(websiteURL, '_blank');
    //   };
    
    //   return (
    //     <div>
    //       <QRCode value={websiteURL} onClick={openWebsite} />
    //     </div>
    //   );
    // };
    
    
    useEffect(() => {
        const handleQRCodeScan = () => {
          window.location.href = websiteURL;
        };
    
        document.addEventListener('DOMContentLoaded', handleQRCodeScan);
    
        return () => {
          document.removeEventListener('DOMContentLoaded', handleQRCodeScan);
        };
      }, [websiteURL]);
    
      return (
        <div>
          {/* Display the QR code if needed (optional) */}
          <QRCode value={websiteURL} />
        </div>
      );
    };
   
   
 
export default QrCodeGenerator;
