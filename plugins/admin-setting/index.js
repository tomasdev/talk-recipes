const { APIError } = require('errors');
const SettingModel = require('models/setting');

module.exports = {

  typeDefs: `
    input PluginMetadataInput {
      myPluginEnable: Boolean
    }

    input UpdateSettingsInput {
      metadata: PluginMetadataInput
    }

    type PluginMetadata {
      myPluginEnable: Boolean
    }

    type Settings {
      metadata: PluginMetadata
    }
  `,

  loaders: context => ({
    Metadata: {
      load: () => SettingModel.findOne()
    }
  }),

  mutators: context => ({
    Settings: {
      extend: async (metadata) => {
        // From services/setting.js
        const selector = { id: '1' };
        await SettingModel.findOneAndUpdate(selector, { $set: { metadata } });
      }
    }
  }),

  resolvers: {
    Settings: {
      metadata(setting) {
        return setting.metadata || null;
      }
    },
    RootQuery: {
      settings(obj, args, { loaders: { Metadata } }) {
        return Metadata.load();
      }
    },
    RootMutation: {
      updateSettings(obj, { input: { metadata } }, { mutators: { Settings } }) {
        return Settings.extend(metadata);
      }
    }
  }
};