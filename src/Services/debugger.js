import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import {NativeModules} from 'react-native';

let scriptHostname;
if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
  console.log = Reactotron.log;
}

const reactotron = Reactotron.configure({
  // host: scriptHostname,
  name: 'Provider App',
})
  .useReactNative({
    asyncStorage: true, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
    editor: true, // there are more options to editor
    errors: {veto: stackFrame => false}, // or turn it off with false
    overlay: true, // just turning off overlay
  })
  .use(reactotronRedux())
  .connect();

export default reactotron;
