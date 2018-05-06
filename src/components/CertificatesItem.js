import React from 'react';


const CertificatesItem = ({certificate}) => {
    return (
        <li className="certItem col-sm-4 col-lg-4">
            <figure className="certCard">
                <img src={certificate.img} alt={certificate.alt}></img>
                <figcaption><strong>{certificate.name}</strong></figcaption>
            </figure>
        </li>
    );
}

export default CertificatesItem;
