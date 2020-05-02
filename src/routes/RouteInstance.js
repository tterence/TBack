/**
 * @typedef {import("express").Router} Router
 */
/** RouteInstance should be used in routes/* & server/routes */
export default class RouteInstance {
    /**
     * Create a RouteInstance instance
     * @param {Router} router - An Express middleware 
     * @param  {...string} instances - A list of instances using this router 
     */
    constructor(router, ...instances) {
        this.router = router;
        this.instances = instances;
        this.instance = process.env.NODE_APP_INSTANCE;
    }

    /**
     * Returns the route for this instance or not
     * @returns {Router|false}
     */
    get middleware() {
        return this.instances.some(instance => this.instance === instance)
            && this.router;
    }
}