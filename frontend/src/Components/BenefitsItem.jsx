import React from 'react';

class BenefitItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="benefit-item">
        <img src={ item.path } alt="ícone" className="item-img"/>
        <h3 className="item-title">{ item.title }</h3>
        <p className="item-text">{ item.text }</p>
      </div>
    );
  }
}

export default BenefitItem;
