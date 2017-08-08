/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
define('ui/components/machine/driver-%%DRIVERNAME%%/component', ['exports', 'ember', 'ui/mixins/driver'], function (exports, _ember, _uiMixinsDriver) {

  exports['default'] = _ember['default'].Component.extend(_uiMixinsDriver['default'], {
    /* ^--- And here */

    // Write your component here, starting with setting 'model' to a machine with your config populated

    driverName: '%%DRIVERNAME%%',

    //state manage variables of static data.
    gotStaticData: false,

    //assign method
    systemStorageAssign: 'new',
    dataStorageAssign: 'new',
    //view control.
    systemStorageDisable: '',
    ibaDisable: 'disabled',
    restoreImageDisable: 'disabled',
    ibbDisable: 'disabled',
    dataStorageDisable: '',

    willRender() {

      if (!this.get('gotStaticData')) {

        let url = 'https://storage-dag.iijgio.com/iij-rancher-ui/static.json';
        let proxyUrl = this.get('app.proxyEndpoint') + '/' + url;
        console.debug('proxyUrl:' + proxyUrl);

        $.getJSON(proxyUrl).then(data => {
          this.set('model.static', data);
        });

        this.set('gotStaticData', true)
      }
    },

    bootstrap: function () {
      let config = this.get('store').createRecord({
        type: '%%DRIVERNAME%%Config',
        //Account
        gis: '',
        accessKey: '',
        secretKey: '',

        //Instance
        serverType: '',
        serverGroup: '',
        ivm: '', //dose not set value.

        //storage group
        storageGroup: '',

        //System Dtorage
        imageName: '',//NEW SYSTEM Image
        iba: '', //Attach Already existing storage
        restoreId: '',//Restore

        //Data Storage
        ibb: '',
        dataStorage: '',

        //Network
        privateMode: 'false',
        dockerPort: 2376,
      });

      let type = 'host';
      if (!this.get('useHost')) {
        type = 'machine';
      }

      this.set('model', this.get('store').createRecord({
        type: type,
        '%%DRIVERNAME%%Config': config,
      }));
    },
    // Add custom validation beyond what can be done from the config API schema
    validate() {
      // Get generic API validation errors
      this._super();
      var errors = this.get('errors') || [];

      //for debug
      console.debug('gis=' + this.get('model.%%DRIVERNAME%%Config.gis'));
      console.debug('accessKey=' + this.get('model.%%DRIVERNAME%%Config.accessKey'));
      console.debug('secretKey=' + this.get('model.%%DRIVERNAME%%Config.secretKey'));
      console.debug('serverType=' + this.get('model.%%DRIVERNAME%%Config.serverType'));
      console.debug('serverGroup=' + this.get('model.%%DRIVERNAME%%Config.serverGroup'));
      console.debug('ivm=' + this.get('model.%%DRIVERNAME%%Config.ivm'));
      console.debug('storageGroup=' + this.get('model.%%DRIVERNAME%%Config.storageGroup'));
      console.debug('imageName=' + this.get('model.%%DRIVERNAME%%Config.imageName'));
      console.debug('iba=' + this.get('model.%%DRIVERNAME%%Config.iba'));
      console.debug('restoreId=' + this.get('model.%%DRIVERNAME%%Config.restoreId'));
      console.debug('ibb=' + this.get('model.%%DRIVERNAME%%Config.ibb'));
      console.debug('dataStorage=' + this.get('model.%%DRIVERNAME%%Config.dataStorage'));
      console.debug('privateMode=' + this.get('model.%%DRIVERNAME%%Config.privateMode'));
      console.debug('iba=' + this.get('model.%%DRIVERNAME%%Config.iba'));
      console.debug('dockerPort=' + this.get('model.%%DRIVERNAME%%Config.dockerPort'));

      // Add more specific errors

      // mandatory
      if (!this.get('model.%%DRIVERNAME%%Config.gis')) {
        errors.push('Service Code is required');
      }

      if (!this.get('model.%%DRIVERNAME%%Config.accessKey')) {
        errors.push('Access Key ID is required');
      }

      if (!this.get('model.%%DRIVERNAME%%Config.secretKey')) {
        errors.push('Secret Key is required');
      }

      var systemStorageAssignMethod = this.get('systemStorageAssign');

      switch (systemStorageAssignMethod) {
        case 'new' :
          this.set('model.%%DRIVERNAME%%Config.iba', '');
          this.set('model.%%DRIVERNAME%%Config.restoreId', '');
          break;
        case 'restore' :
          if (!this.get('model.%%DRIVERNAME%%Config.restoreId')) {
            errors.push('Storage Archive ID is required');
            break;
          }
          this.set('model.%%DRIVERNAME%%Config.iba', '');
          this.set('model.%%DRIVERNAME%%Config.imageName', '');
          this.$('#systemStorageSB').each(function () {
            this.selectedIndex = 0;
          });
          break;
        case 'assign' :
          if (!this.get('model.%%DRIVERNAME%%Config.iba')) {
            errors.push('System Storage Service Code is required');
            break;
          }
          this.set('model.%%DRIVERNAME%%Config.imageName', '');
          this.set('model.%%DRIVERNAME%%Config.restoreId', '');
          this.$('#systemStorageSB').each(function () {
            this.selectedIndex = 0;
          });
          break;
      }

      var dataStorageAssignMethod = this.get('dataStorageAssign');

      switch (dataStorageAssignMethod) {
        case 'new' :
          this.set('model.%%DRIVERNAME%%Config.ibb', '');
          break;
        case 'assign' :
          if (!this.get('model.%%DRIVERNAME%%Config.ibb')) {
            errors.push('Data Storage Type is required');
            break;
          }
          this.set('model.%%DRIVERNAME%%Config.imageName', '');
          this.$('#dataStorageSB').each(function () {
            this.selectedIndex = 0;
          });
          break;
      }

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
      selectStorageAttach: function (value) {
        switch (value) {
          case 'new':
            this.set('systemStorageAssign', value);
            this.set('systemStorageDisable', '');
            this.set('ibaDisable', 'disabled');
            this.set('restoreImageDisable', 'disabled');
            break;
          case 'restore':
            this.set('systemStorageAssign', value);
            this.set('systemStorageDisable', 'disabled');
            this.set('ibaDisable', 'disabled');
            this.set('restoreImageDisable', '');
            break;
          case 'assign':
            this.set('systemStorageAssign', value);
            this.set('systemStorageDisable', 'disabled');
            this.set('ibaDisable', '');
            this.set('restoreImageDisable', 'disabled');
            break;
        }
      },
      selectDataStorageAttach: function (value) {
        switch (value) {
          case 'new':
            this.set('dataStorageAssign', value);
            this.set('dataStorageDisable', '');
            this.set('ibbDisable', 'disabled');
            break;
          case 'assign':
            this.set('dataStorageAssign', value);
            this.set('dataStorageDisable', 'disabled');
            this.set('ibbDisable', '');
            break;
        }
      },
      selectImageType: function (value) {
        console.debug('imageType=' + value);
        this.set('model.%%DRIVERNAME%%Config.imageName', value)
      },
      selectServerType: function (value) {
        console.debug('serverType=' + value);
        this.set('model.%%DRIVERNAME%%Config.serverType', value)
      },
      selectServerGroup: function (value) {
        //console.debug('serverGroup=' + value);
        this.set('model.%%DRIVERNAME%%Config.serverGroup', value)
      },
      selectStorageGroup: function (value) {
        console.debug('storageGroup=' + value);
        this.set('model.%%DRIVERNAME%%Config.storageGroup', value)
      },
      selectDataStorageType: function (value) {
        console.debug('dataStorageType=' + value);
        this.set('model.%%DRIVERNAME%%Config.dataStorage', value)
      }
    },
  });
});
