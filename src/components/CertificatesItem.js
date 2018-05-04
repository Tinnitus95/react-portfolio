import React from 'react';


const CertificatesItem = ({certificate}) => {
    return (
        <li className="certItem col-sm-4 col-lg-4">
            <div className="certCard">
                <img src={certificate.img}></img>
                <h3>{certificate.name}</h3>
            </div>
        </li>
    );
}

export default CertificatesItem;
