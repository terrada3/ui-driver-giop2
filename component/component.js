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

        // Any computed properties or custom logic can go here
    });
});
