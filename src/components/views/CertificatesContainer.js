import React, {Component} from 'react';
import _ from 'lodash';
import CertificatesItem from '../CertificatesItem';

class CertificatesContainer extends Component {
    certDisplay(){
        return _.map(this.props.cert, certificate => {
            return <CertificatesItem
                    key={certificate.name}
                    certificate={certificate}
            />;
        });
    }

    render(){
        console.log(this.props.cert)
        return (
            <div>
                <h2>Certificates</h2>
                <ul>
                    {this.certDisplay()}
                </ul>
                </div>
            );
        }
    }

export default CertificatesContainer;
