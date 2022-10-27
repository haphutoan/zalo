/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Zalo from './screens/zalo/Zalo';

AppRegistry.registerComponent(appName, () => Zalo);
