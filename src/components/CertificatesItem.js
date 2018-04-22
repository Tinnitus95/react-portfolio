import React from 'react';


const CertificatesItem = ({certificate}) => {
    return (
        <li>
            <img src={certificate.img}></img>
            <h3>{certificate.name}</h3>

        </li>
    );
}

export default CertificatesItem;
