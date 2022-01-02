# @visionworksco/react-middleware

React middleware.

## Make a new build

- npm login (one time)
- npm run lint:node_modules (optional)
- npm run test:integration (optional)
- npm run build
- npm run commit
- npm run npm:release:[first|major|minor|patch]
- npm run npm:publish

## Symlink the package

### Create / remove a npm link

- npm link
- npm unlink

### Install / uninstall the symlinked package in a project

- npm link @visionworksco/react-middleware
- npm unlink --no-save @visionworksco/react-middleware
