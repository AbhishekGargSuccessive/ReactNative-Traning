# ReactNative-Traning (Google Login)

Goto Firebase Website for Creating a Project to Authenticate:-

https://console.firebase.google.com

In Firebase Website we have to follow some Steps:-

Create a Project
Enter your Project Name
Follow 3 Steps to Create
In your Project Go to some Folders to check the package and then paste - 
1. Android - 2. app - 3. src - 4. main - 5. “AndroidMeniFest.xml” (file name)


Paste - package = “ ” (like “com.typescript”)
Download the file “google-services.json” (file name)
Then paste this file on your project folder like 1. Android - 2. app -
Open cmd as run administrator.
Paste the jdk folder path like (C:\Program Files\Java\jre1.8.0_311\bin)


Here is the key:-
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000


Follow the React Native doc to generating an Upload Key. Here is the link - 
https://reactnative.dev/docs/signed-apk-android
Then type KeyStore Password:
Give some Basic Details.
Then check the jdk folder to check one file “my-upload-key.keystore” (file name)
Then paste this file on your project folder like Android - app - paste file
Then Go to your Project - 
1. Android - 2. app - 3. “build.gradle” (file name)
Then Go to one Dependencies: “signingConfigs”
 Then edit dependencies - 

signingConfigs {
        debug {
            storeFile file('my-upload-key.keystore')
            storePassword '123456'
            keyAlias 'my-key-alias'
            keyPassword '123456'
        }
    }


Firstly Install Command in VS Code:-

npm install @react-native-google-sign-in/google-signin

To Create a SHA Key:-

keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android

Here is the Link to follow doc for SHA Key:-

https://stackoverflow.com/questions/15727912/sha-1-fingerprint-of-keystore-certificate/33479550#33479550

cd android && ./gradlew signingReport

