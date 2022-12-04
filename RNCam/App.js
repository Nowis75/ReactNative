import 'react-native-gesture-handler';
import * as React from 'react';

import { StyleSheet } from 'react-native';
import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from 'react-native-vision-camera';

export default function App() {
  const [hasPermission, setHasPermission] = React.useState(false);

  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;
  //const device = devices.front;

  React.useEffect(() => {
    console.log(devices);
  }, [devices]);

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  return device != null && hasPermission ? (
    <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true} />
  ) : null;
}
