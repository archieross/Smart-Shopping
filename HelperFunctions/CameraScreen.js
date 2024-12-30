import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import IconButton from "./IconButton";

export default function CameraScreen(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState(null);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  useEffect(() => {
    (async () => {
      //MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (e) {
        console.log(e);
      }
    }
  };

  function saveImage() {
    props.save(image);
  }

  if (hasPermission === false) {
    return <Text>Please allow access to the camera in settings.</Text>;
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <SafeAreaView style={styles.container}>
        <View style={{ width: "100%", aspectRatio: 1 }}>
          {!image ? (
            <Camera
              style={styles.camera}
              type={type}
              flashMode={flash}
              ref={cameraRef}
            >
              {/* Camera content */}
            </Camera>
          ) : (
            <Image source={{ uri: image }} style={styles.camera} />
          )}
        </View>

        <View style={{ backgroundColor: "blue" }}>
          {image ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <IconButton
                title={"Retake Picture"}
                icon={"retweet"}
                onPress={() => setImage(null)}
              />
              <IconButton title={"Save"} icon={"check"} onPress={saveImage} />
            </View>
          ) : (
            <View
              style={{
                //padding: 15,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ADD8E6",
              }}
            >
              <IconButton
                title="Take a Picture"
                icon="camera"
                onPress={takePicture}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    borderRadius: 20,
    aspectRatio: 1,
    width: "100%",
  },
});
