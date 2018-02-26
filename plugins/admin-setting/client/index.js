import MyPlugin from './containers/MyPlugin';
import translations from './translations.yml';

export default {
  translations,
  slots: {
    'adminStreamSettings': [MyPlugin]
  }
};