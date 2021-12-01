# ReactNative-Traning (Google Map Integration)

GOOGLE MAP INTEGRATION IN REACT NATIVE

Step 1: Install react-native-maps package :-

npm install --save react-native-maps command.

Step 2: Open a ‘build.gradle file’ under the android folder. Find an “ext” section and add the following lines :-

ext {
  ...
  googlePlayServicesVersion = "11.8.0"
  androidMapsUtilsVersion = "0.5+"
}

Step 3: Create a Google Maps API Key :-

https://developers.google.com/maps/documentation/ios-sdk/get-api-key

After that, we will see another pop-up and there we need to choose Maps and click Continue. Then, we will see a section where we need to choose the project. Choose Create a new project in the drop-down menu and name it ‘MapsAndroidDemoApp’, then click Next. After a few steps, we will see a confirmation pop-up window, which says that You’re all set. Copy the ‘Key’ for future actions.

Step 4: Specify the Google Maps API Key :-

After previous steps, we need to specify our Google Maps API Key into the manifest file. Open the “AndroidManifes.xml’ file under the ‘android/app/src/main/’ folder. Then, add the following ‘meta-data’ XML tag into the ‘application’ XML tag.

<application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>	//paste Google API Key

   <!-- You will also only need to add this uses-library tag -->
   <uses-library android:name="org.apache.http.legacy" android:required="false"/>
</application>

Step 5: Now, Paste this Code in VS Code :-

import { MapView } from 'react-native-maps';

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   flex:1,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default () => (
   <View style={styles.container}>
     <MapView
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>
);
