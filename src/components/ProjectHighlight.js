import React from 'react';

import Section from 'grommet/components/Section';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import Heading from 'grommet/components/Heading';
import Select from 'grommet/components/Select';

import { connect } from 'react-redux';

class ProjectHighlight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSort: 'Today'
    };

    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(target) {
    this.setState({selectedSort: target.value});
  }

  render() {
    return (
      <Section pad={{vertical: 'medium'}}>
        <Heading tag='h2'>View trending projects</Heading>   
        <Select options={[
          'Today',
          'This week',
          'This month'
        ]} value={this.state.selectedSort}
        onChange={this.onSelectChange} />
      <Section pad={{vertical: 'medium'}}>
        <Tiles selectable={true} count={2}>
          {
            this.props.projects.map((project, index) => (
              <Tile key={index}>
                <Card 
                  heading={project.title}
                  description={project.description}
                  label={project.categories[0]} />
              </Tile>
            ))
          }
        </Tiles>
      </Section>
    </Section>
    );
  }
}

export default connect((state) => {
  return ({
    projects: state.projects
  });
})(ProjectHighlight);
