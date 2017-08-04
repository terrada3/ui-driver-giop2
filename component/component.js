/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
define('ui/components/machine/driver-%%DRIVERNAME%%/component', ['exports', 'ember', 'ui/mixins/driver'], function (exports, _ember, _uiMixinsDriver) {

  exports['default'] = _ember['default'].Component.extend(_uiMixinsDriver['default'], {
    driverName: '%%DRIVERNAME%%',
    /* ^--- And here */

    // Write your component here, starting with setting 'model' to a machine with your config populated
    bootstrap: function () {
      let config = this.get('store').createRecord({
        type: '%%DRIVERNAME%%Config',
        gisServiceCode: '',
        accessKey: '',
        secretKey: '',
        ivmServiceCode: '',
        ibaServiceCode: '',
        iPv4: '',
        iPv6: '',
        dockerPort: 2376,
        serverType: 'VB0-1',
        imageName: 'S30GB_CENTOS7_64',
        storageGroup: '',
        serverGroup: '',
        ibbServiceCode: '',
        addStorageType: '',
        privateMode: 'false',
      });

      // let view_state = this.get('store').createRecord(
      //   {
      //   type: 'view_state',
      //   iba_disable: '',
      // });

      let type = 'host';

      if (!this.get('useHost')) {
        type = 'machine';
      }

      this.set('model', this.get('store').createRecord({
        type: type,
        '%%DRIVERNAME%%Config': config,
      }));
    },
    getStatic() {
      let url = 'https://storage-dag.iijgio.com/iij-rancher-ui/static.json';

      let proxyUrl = this.get('app.proxyEndpoint') + '/' + url;

      console.debug('proxyUrl:' + proxyUrl);
      return Ember.$.ajax(
        {
          url: proxyUrl,
          method: 'GET',
          dataType: 'json'
        }).done(function (data) {
          return data;
        }
      );
    },
    staticData: this.getStatic,
    system_storage_disable: '',
    iba_disable: 'disabled',
    restore_image_disable: 'disabled',

    // Add custom validation beyond what can be done from the config API schema
    validate() {
      // Get generic API validation errors
      this._super();
      var errors = this.get('errors') || [];

      // Add more specific errors

      // Check something and add an error entry if it fails:
      if (parseInt(this.get('model.%%DRIVERNAME%%Config.size'), 10) < 1024) {
        errors.push('Size must be at least 1024 MB');
      }

      // Set the array of errors for display,
      // and return true if saving should continue.
      if (errors.get('length')) {
        this.set('errors', errors);
        return false;
      }
      else {
        this.set('errors', null);
        return true;
      }
    },
    actions: {
      storage_assign_method: function (value) {
        switch (value) {
          case 'new':
            this.set('system_storage_disable', '');
            this.set('iba_disable', 'disabled');
            this.set('restore_image_disable', 'disabled');
            break;
          case 'restore':
            this.set('system_storage_disable', 'disabled');
            this.set('iba_disable', 'disabled');
            this.set('restore_image_disable', '');
            break;
          case 'assign':
            this.set('system_storage_disable', 'disabled');
            this.set('iba_disable', '');
            this.set('restore_image_disable', 'disabled');
            break;
        }

        console.debug('fired!' + value + this.getStatic());
      }
    },
  });
});
