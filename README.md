## List countries

### Quick start

Run App with: `yarn && yarn start`
Run Storybook with: `yarn storybook`

### A couple of basic pages demonstrating fetching data using Apollo. Things of note:

- Built using Create React App, obviously.

- I wanted to use Giphy but I was keen to use Graphql here and the site that normally lets you use GQL for common apis
  has a cors bug stopping local dev so I went with countries. Sorry, very boring. 
  See: https://github.com/clayallsopp/graphqlhub/issues/51

- No Redux, not because Apollo replaces Redux - it doesn't, not really, you can still have global state in redux - but
  because there's no global state here and Apollo manages data fetching.

- I didn't do much styling here but it's an area I like. Give me some designs or pointers and I'll make it look right
  and work well cross browser. Browserstack rules.

- Each component is a folder with the testing, data and presentation logic separated. This allows the component to
  be extended but still remain understandable and reuseable.

- There's obvs going to be a lot of naming and sharing improvements but thinking of good names is time consuming.

- Apollo gives you loading, errors and caching pretty much out of the box - so this codebased includes all that. The
  cache here is just in memory but if you try a second call to any route the data isn't refetched becasue it's cached.
  This cache is pretty clever and is used by default anywhere, in any query, where the same object is requested. The
  structure is flat and - in this case - the key built from the `code` property (it nortmally default to `id` or `_id`).

- I didn't build out any jest tests here. I'm not against unit tests, happy to have them in the DOD, but I've had mixed 
  experiences and generally find more benefit in things like Storybook or higher level system tests.

- Storybook allows rapid development of components. It doesn't really show here but once things get more advanced it's
  a great way to rapidly build elements without depending on having to hook them into any App. Once complete it also
  serves as a really nice visual library of all you components. Great for shared repos of common components. I like keeping
  each comps stories local in their folders. You can make Storybook part of the build process checking for pixel changes
  between versions (I've not implemented this but friends say good things and I'm keen to play with it).
