import React from 'react';
import teamData from '../teamData';
import TeamItem from './TeamItem';

class Team extends React.Component {
  render() {
    return (
      <section className="team-section" id="team">
        <h1 className="team-title">NOSSO TIME</h1>
        <div className="team-cards">
          {
            teamData.map((element) => {
              return (
                <TeamItem key={ element.id } people={ element }/>
              );
            })
          }
        </div>
      </section>
    );
  }
}

export default Team;
