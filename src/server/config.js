import bodyParser from 'body-parser';
import hpp from 'hpp';
import compression from 'compression';
import helmet from 'helmet';

/**
    * @param app { Function } An Express middleware
    * @param isDev { Boolean } Whether in development env or not
**/
const config = (app, isDev) => {
    app.use(helmet());
    app.use(bodyParser);
    app.use(hpp);
    isDev && app.use(compression);
}
export default config;