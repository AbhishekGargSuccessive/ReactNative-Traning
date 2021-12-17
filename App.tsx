import React from 'react';
import MainStack from './app/routes/StackNavigator';
// import MainTab from './app/routes/TabNavigator';

const App = () => {
  return (
    // <MainTab />
    <MainStack />
  )
}
export default App;

// import React from 'react';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// const App = () => {
//   return (
//     <GooglePlacesAutocomplete
//       placeholder='Search'
//       onPress={(data, details = null) => {
//         // 'details' is provided when fetchDetails = true
//         console.log(data, details);
//       }}
//       query={{
//         key: 'AIzaSyCHMLa-3dLMNi1JpQfjh7FiwA-7XgnMtX8',
//         language: 'en',
//       }}
//     />
//   );
// };

// export default App;