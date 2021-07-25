import React from 'react';
import benefitsData from '../benefitsData';
import BenefitItem from './BenefitsItem';

class Benefits extends React.Component {
  render() {
    return (
      <section className="benefits">
        <h1 className="benefits-title">BENEFÍCIOS</h1>
        <div className="benefits-items">
          {
            benefitsData.map((element) => {
              return (
                <BenefitItem key={element.id} item={element} />
              );
            })
          }
        </div>
      </section>
    );
  }
}

export default Benefits;
