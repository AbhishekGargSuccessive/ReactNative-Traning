# ReactNative-Traning (PayPal Integration)

Step 1:  npm i react-native-paypal-gateway  

Step 2:  Paste this Code on App.js (VS Code) ----

# Source Code: ----

import React from 'react';
import PayPal from 'react-native-paypal-gateway';
 
// 3 env available: NO_NETWORK, SANDBOX, PRODUCTION

const App = () => {
return(

PayPal.initialize(PayPal.NO_NETWORK, "<your-client-id>");
PayPal.pay({
  price: '40.70',
  currency: 'USD',
  description: 'Your description goes here',
}).then(confirm => console.log(confirm))
  .catch(error => console.log(error));
  
  );
}

export default App;
