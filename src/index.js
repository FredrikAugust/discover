import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import discover from './reducers';
import Root from './components/Root';

import 'grommet/scss/vanilla/index';

let store = createStore(discover, {
  projects: [
    {
      id: 0,
      title: 'Test project #1',
      description: 'Amet perferendis cum beatae sit iure odit voluptatibus facere doloribus. Dolorem esse vero illum laborum eum illum quis est velit.',
      categories: ['technology', 'nature'],
      creatorID: 0
    }, {
      id: 1,
      title: 'Test project #2',
      description: 'Amet vero rerum quam sit aspernatur. Quis alias reprehenderit quasi inventore cumque vitae? Ipsa praesentium.',
      categories: ['innovation'],
      creatorID: 3
    }, {
      id: 2,
      title: 'Test project #3',
      description: 'Elit harum expedita dolore veniam exercitationem laudantium. Odio iure eius nesciunt voluptates explicabo culpa perspiciatis enim! Impedit!',
      categories: ['entrepreneurship'],
      creatorID: 2
    }
  ],
  users: [
    {
      id: 0,
      first_name: 'Fredrik August',
      last_name: 'Madsen-Malmo'
    }, {
      id: 3,
      first_name: 'Kristian',
      last_name: 'Bondevik Brekke'
    }, {
      id: 2,
      first_name: 'Eiliv Severin',
      last_name: 'Iversen Moi'
    }
  ],
  currentUser: {
    token: 'qwerty123',
    id: 0,
    first_name: 'Fredrik August',
    last_name: 'Madsen-Malmo'
  }
});

render(
  <Root store={store} />,
  document.getElementById('root')
);
