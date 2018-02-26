import { gql } from 'react-apollo';
import { withFragments } from 'plugin-api/beta/client/hocs';
import MyPlugin from '../components/MyPlugin';

export default withFragments({
  settings: gql`
    fragment TalkPluginMyPlugin_settings on Settings {
      metadata {
        myPluginEnable
      }
    }
  `
})(MyPlugin);