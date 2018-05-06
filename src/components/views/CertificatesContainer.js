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
            <section>
                <h1>Certificates</h1>


                    <ul className="box-view row">
                        {this.certDisplay()}
                    </ul>

            </section>
        );
    }
}

export default CertificatesContainer;
