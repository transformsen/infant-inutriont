# Infant Inutriont
### Content
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Libraries](#libraries)
- [Design](#design)
- [Verification](#verification)


### Prerequisites
- Angular CLI: 9.0.6
- Node: 10.16.3+

### Installation
#### Mock Express Server Installation
- cd infant-inutriont-server
- npm i
- npm start
#### Running Angular App
- cd ../infant-inutriont
- npm i
- ng serve
- http://localhost:4200

### Libraries
- AG GRID - Free [Community Version](https://www.ag-grid.com/license-pricing.php)
- [Flex Box Grid](http://flexboxgrid.com/)
- [ng2-charts](https://valor-software.com/ng2-charts/)
- [Angular Material](https://material.angular.io/)
- [Font Awesome](https://fontawesome.com/)

### Design
| Design Key | Details |
| --- | --- |
| Shared Module | Contains shared components, and exported other library modules |
| Reactive Angular | Used asyn pipe with Observable operators for loading the components reactive with loading icon |
| Mock server | Random Mock Data with mocked server time delay | 
| Service | All the required parameters are sent to server in GET request |
| Model | Model files are under ./model folder. Same model file are used in express server. So in future integrating with real backend will not give field mismatch issues |
| Theme | common scss and material/grid overriden styles |
| Header/Footer | Material Tab will act act header, so didn't created additional header component |
| Lazy Loading | 4 feature module(4 Tabs) will be loaded on demand. Angular Lazy loading concept |

### Verification
- ng serve
- http://localhost:4200
- Interact with dropdown and navigation. Result - Data will be loaded from server
- Turn ON developer tool -> Network to verify the requests and response  