# @visionworksco/react-middleware

React middleware.

## Publish a new release

- nvm ls, nvm use <node_version>
- npm login (one time)
- npm run compile
- npm run build
- npm run commit
- npm run release:[first|major|minor|patch]
- npm run release:publish

## Symlink the package

### Create / remove a npm link

- npm link
- npm unlink

### Install / uninstall the symlinked package in a project

- npm link @visionworksco/react-middleware
- npm unlink --no-save @visionworksco/react-middleware
