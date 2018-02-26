import React from 'react';
import ConfigureCard from 'coral-framework/components/ConfigureCard';
import t from 'coral-framework/services/i18n';
import { Textfield } from 'react-mdl';

const getContentSelector = () => {};

class MyPlugin extends React.Component {

  updateMetadata = () => {
    const updater = {
      metadata: {
        $set: {
          myPluginEnable: !this.props.settings.metadata.myPluginEnable
        }
      }
    };
    this.props.updatePending({ updater });
  }

  render() {
    const { settings, data, root, errors, updatePending } = this.props;

    settings.metadata = {
      myPluginEnable: false,
      ...settings.metadata
    };

    return (
      <ConfigureCard
        checked={settings.metadata.myPluginEnable}
        onCheckbox={this.updateMetadata}
        title={t('configure.my_plugin_enable')}
      >
      </ConfigureCard>
    );
  }

}

export default MyPlugin;