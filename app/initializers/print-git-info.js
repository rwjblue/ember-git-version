import config from '../config/environment';

export default {
  name: 'print-git-info',

  initialize: function() {
    if(config.environment !== 'test') {
      console.log(config.currentRevision);
    }
  }
}
