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

        let staticData = {
          "systemStorageType": {
            "types": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "S30GB/CentOS7 ：64bit",
                "value": "S30GB_CENTOS7_64"
              },
              {
                "label": "S30GB/CentOS6 :64bit",
                "value": "S30GB_CENTOS6_64"
              },
              {
                "label": "S30GB/RHEL7 ：64bit",
                "value": "S30GB_RHEL7_64"
              },
              {
                "label": "S30GB/RHEL6 ：64bit",
                "value": "S30GB_RHEL6_64"
              },
              {
                "label": "S30GB/Ubuntu16 ：64bit",
                "value": "S30GB_UBUNTU16_64"
              },
              {
                "label": "S30GB/Ubuntu14 ：64bit",
                "value": "S30GB_UBUNTU14_64"
              }
            ]
          },
          "serverType": {
            "types": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "VB0-1",
                "value": "VB0-1"
              },
              {
                "label": "VB1-2",
                "value": "VB1-2"
              },
              {
                "label": "VB2-3",
                "value": "VB2-3"
              },
              {
                "label": "VB4-6",
                "value": "VB4-6"
              },
              {
                "label": "VB8-12",
                "value": "VB8-12"
              },
              {
                "label": "VB12-24",
                "value": "VB12-24"
              },
              {
                "label": "VB1-1",
                "value": "VB1-1"
              },
              {
                "label": "VB2-2",
                "value": "VB2-2"
              },
              {
                "label": "VB4-3",
                "value": "VB4-3"
              },
              {
                "label": "VB8-6",
                "value": "VB8-6"
              },
              {
                "label": "VB12-12",
                "value": "VB12-12"
              },
              {
                "label": "VB0-2",
                "value": "VB0-2"
              },
              {
                "label": "VB1-3",
                "value": "VB1-3"
              },
              {
                "label": "VB2-6",
                "value": "VB2-6"
              },
              {
                "label": "VB4-12",
                "value": "VB4-12"
              },
              {
                "label": "VB8-24",
                "value": "VB8-24"
              },
              {
                "label": "VG1-3",
                "value": "VG1-3"
              },
              {
                "label": "VG2-6",
                "value": "VG2-6"
              },
              {
                "label": "VG4-12",
                "value": "VG4-12"
              },
              {
                "label": "VG6-24",
                "value": "VG6-24"
              },
              {
                "label": "VG8-32",
                "value": "VG8-32"
              },
              {
                "label": "VG12-48",
                "value": "VG12-48"
              },
              {
                "label": "VG2-3",
                "value": "VG2-3"
              },
              {
                "label": "VG4-6",
                "value": "VG4-6"
              },
              {
                "label": "VG6-12",
                "value": "VG6-12"
              },
              {
                "label": "VG8-24",
                "value": "VG8-24"
              },
              {
                "label": "VG12-32",
                "value": "VG12-32"
              },
              {
                "label": "VG1-6",
                "value": "VG1-6"
              },
              {
                "label": "VG2-12",
                "value": "VG2-12"
              },
              {
                "label": "VG4-24",
                "value": "VG4-24"
              },
              {
                "label": "VG6-32",
                "value": "VG6-32"
              },
              {
                "label": "VG8-48",
                "value": "VG8-48"
              },
              {
                "label": "VD16-96-SSD",
                "value": "VD16-96-SSD"
              },
              {
                "label": "VD16-192-FIPX",
                "value": "VD16-192-FIPX"
              },
              {
                "label": "VG1-3",
                "value": "VG1-3"
              },
              {
                "label": "VG2-6",
                "value": "VG2-6"
              },
              {
                "label": "VG4-12",
                "value": "VG4-12"
              },
              {
                "label": "VG6-24",
                "value": "VG6-24"
              },
              {
                "label": "VG8-32",
                "value": "VG8-32"
              },
              {
                "label": "VG12-48",
                "value": "VG12-48"
              },
              {
                "label": "VG2-3",
                "value": "VG2-3"
              },
              {
                "label": "VG4-6",
                "value": "VG4-6"
              },
              {
                "label": "VG6-12",
                "value": "VG6-12"
              },
              {
                "label": "VG8-24",
                "value": "VG8-24"
              },
              {
                "label": "VG12-32",
                "value": "VG12-32"
              },
              {
                "label": "VG1-6",
                "value": "VG1-6"
              },
              {
                "label": "VG2-12",
                "value": "VG2-12"
              },
              {
                "label": "VG4-24",
                "value": "VG4-24"
              },
              {
                "label": "VG6-32",
                "value": "VG6-32"
              },
              {
                "label": "VG8-48",
                "value": "VG8-48"
              },
              {
                "label": "VB0-1",
                "value": "VB0-1"
              },
              {
                "label": "VB1-2",
                "value": "VB1-2"
              },
              {
                "label": "VB2-3",
                "value": "VB2-3"
              },
              {
                "label": "VB4-6",
                "value": "VB4-6"
              },
              {
                "label": "VB8-12",
                "value": "VB8-12"
              },
              {
                "label": "VB12-24",
                "value": "VB12-24"
              },
              {
                "label": "VB1-1",
                "value": "VB1-1"
              },
              {
                "label": "VB2-2",
                "value": "VB2-2"
              },
              {
                "label": "VB4-3",
                "value": "VB4-3"
              },
              {
                "label": "VB8-6",
                "value": "VB8-6"
              },
              {
                "label": "VB12-12",
                "value": "VB12-12"
              },
              {
                "label": "VB0-2",
                "value": "VB0-2"
              },
              {
                "label": "VB1-3",
                "value": "VB1-3"
              },
              {
                "label": "VB2-6",
                "value": "VB2-6"
              },
              {
                "label": "VB4-12",
                "value": "VB4-12"
              },
              {
                "label": "VB8-24",
                "value": "VB8-24"
              },
              {
                "label": "VD16-96-SSD",
                "value": "VD16-96-SSD"
              },
              {
                "label": "VD16-192-FIPX",
                "value": "VD16-192-FIPX"
              }
            ]
          },
          "serverGroup": {
            "groups": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "A",
                "value": "A"
              },
              {
                "label": "B",
                "value": "B"
              }
            ]
          },
          "dataStorageType": {
            "types": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "G100GB：IOPS1000",
                "value": "G100GB_IOPS1000"
              },
              {
                "label": "G100GB：IOPS2000",
                "value": "G100GB_IOPS2000"
              },
              {
                "label": "G300GB：IOPS1000",
                "value": "G300GB_IOPS1000"
              },
              {
                "label": "G300GB：IOPS2000",
                "value": "G300GB_IOPS2000"
              },
              {
                "label": "G300GB：IOPS3000",
                "value": "G300GB_IOPS3000"
              },
              {
                "label": "G500GB：IOPS2000",
                "value": "G500GB_IOPS2000"
              },
              {
                "label": "G500GB：IOPS3000",
                "value": "G500GB_IOPS3000"
              },
              {
                "label": "G500GB：IOPS4000",
                "value": "G500GB_IOPS4000"
              },
              {
                "label": "G1000GB：IOPS3000",
                "value": "G1000GB_IOPS3000"
              },
              {
                "label": "G1000GB：IOPS4000",
                "value": "G1000GB_IOPS4000"
              },
              {
                "label": "G1000GB：IOPS5000",
                "value": "G1000GB_IOPS5000"
              },
              {
                "label": "B100GB",
                "value": "B100GB"
              },
              {
                "label": "B300GB",
                "value": "B300GB"
              },
              {
                "label": "B500GB",
                "value": "B500GB"
              },
              {
                "label": "B1000GB",
                "value": "B1000GB"
              }
            ]
          },
          "storageGroup": {
            "groups": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "Y",
                "value": "Y"
              },
              {
                "label": "Z",
                "value": "Z"
              }
            ]
          }
        };

        this.set('model.static', staticData);
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
        customImage: '', //CustomeImgae ID(format iarXXXXX,nnnnn)
        iar:'',
        customImageId: '',
        //restoreId: '',//Restore

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

      console.debug('customImage=' + this.get('model.%%DRIVERNAME%%Config.customImage'));
      console.debug('iar=' + this.get('model.%%DRIVERNAME%%Config.iar'));
      console.debug('customImageId=' + this.get('model.%%DRIVERNAME%%Config.customImageId'));

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
          this.set('model.%%DRIVERNAME%%Config.customImage', '');
          this.set('model.%%DRIVERNAME%%Config.iar', '');
          this.set('model.%%DRIVERNAME%%Config.customImageId', '');
          break;
        case 'restore' :
          var chkError = false;
          if (!this.get('model.%%DRIVERNAME%%Config.iar')) {
            errors.push('Storage Archive Service Code is required');
            chkError = true;
          }
          if (!this.get('model.%%DRIVERNAME%%Config.customImageId')) {
            errors.push('Storage Archive Image ID is required');
            chkError = true;
          }
          if(chkError) {
            break;
          }
          this.set('model.%%DRIVERNAME%%Config.iba', '');
          this.set('model.%%DRIVERNAME%%Config.imageName', '');
          this.set('model.%%DRIVERNAME%%Config.customImage',
            this.get('model.%%DRIVERNAME%%Config.iar')
            + ","
            +this.get('model.%%DRIVERNAME%%Config.customImageId'));
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
