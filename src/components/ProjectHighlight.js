import React from 'react';

import Box from 'grommet/components/Box';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';

import { connect } from 'react-redux';

const ProjectHighlight = (props) => (
  <Box pad={{vertical: 'medium'}}>
    <Tiles>
      {
        props.projects.map((project, index) => (
          <Tile key={index}>
            <Card heading={project.title}
              description={project.description}
              label={project.creatorID} />
          </Tile>
        ))
      }
    </Tiles>
  </Box>
);

export default connect((state) => {
  return ({
    projects: state.projects
  });
})(ProjectHighlight);
