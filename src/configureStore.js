import { createStore, applyMiddleware } from 'redux';

import discover from './reducers';

import thunkMiddleware from 'redux-thunk';

import { createLogger } from 'redux-logger';

let loggerMiddleware = createLogger();

export function configureStore() {
  return createStore(discover, {
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
      token: null,
      id: null,
      first_name: null,
      last_name: null
    }
  }, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ));
}
