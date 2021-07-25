import React from 'react';

class TeamItem extends React.Component {
  render() {
    const { people } = this.props;
    return (
      <div className="team-card">
        <img src={people.img} className="people" alt="pessa" />
        <h3>{people.name}</h3>
        <h4>{people.skills}</h4>
        <a href={people.linkedin}><img src={"./Icons/linkedin.png"} alt="icone" /></a>
        {
          people.github !== '' ? (
            <a href={people.github}><img src={"./Icons/github.png"} alt="icone" /></a>
          ) : (
            <div />
          )
        }
      </div>
    );
  }
}

export default TeamItem;
