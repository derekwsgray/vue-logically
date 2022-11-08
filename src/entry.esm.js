
// Import vue components
import * as components from '@/lib-components/index';

// install function executed by app.use()
const install = (app, options) => {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
};

// Create module definition for app.use()
export default install;

// To allow individual component use, export components
// each can be registered via app.component()
export * from '@/lib-components/index';

