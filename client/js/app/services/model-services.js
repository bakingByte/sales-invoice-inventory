(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name modelServices
 * @module
 * @description
 *
 * The `modelServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("modelServices", ['ngResource']);

/**
 * @ngdoc object
 * @name modelServices.THierarchy
 * @header modelServices.THierarchy
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `THierarchy` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "THierarchy",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/tHierarchies/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name modelServices.THierarchy#create
         * @methodOf modelServices.THierarchy
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `THierarchy` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/tHierarchies",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.THierarchy#createMany
         * @methodOf modelServices.THierarchy
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `THierarchy` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/tHierarchies",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.THierarchy#upsert
         * @methodOf modelServices.THierarchy
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `THierarchy` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/tHierarchies",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name modelServices.THierarchy#exists
         * @methodOf modelServices.THierarchy
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/tHierarchies/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.THierarchy#findById
         * @methodOf modelServices.THierarchy
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `THierarchy` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/tHierarchies/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.THierarchy#find
         * @methodOf modelServices.THierarchy
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `THierarchy` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/tHierarchies",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.THierarchy#findOne
         * @methodOf modelServices.THierarchy
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `THierarchy` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/tHierarchies/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.THierarchy#updateAll
         * @methodOf modelServices.THierarchy
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/tHierarchies/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.THierarchy#deleteById
         * @methodOf modelServices.THierarchy
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `THierarchy` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/tHierarchies/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name modelServices.THierarchy#count
         * @methodOf modelServices.THierarchy
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/tHierarchies/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.THierarchy#prototype$updateAttributes
         * @methodOf modelServices.THierarchy
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `THierarchy` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/tHierarchies/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name modelServices.THierarchy#createChangeStream
         * @methodOf modelServices.THierarchy
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/tHierarchies/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.THierarchy#getTree
         * @methodOf modelServices.THierarchy
         *
         * @description
         *
         * Gets the tree for he node
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `node` – `{Number}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `tree` – `{Array=}` - 
         */
        "getTree": {
          url: urlBase + "/tHierarchies/getTree",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name modelServices.THierarchy#updateOrCreate
         * @methodOf modelServices.THierarchy
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `THierarchy` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name modelServices.THierarchy#update
         * @methodOf modelServices.THierarchy
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name modelServices.THierarchy#destroyById
         * @methodOf modelServices.THierarchy
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `THierarchy` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name modelServices.THierarchy#removeById
         * @methodOf modelServices.THierarchy
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `THierarchy` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name modelServices.THierarchy#modelName
    * @propertyOf modelServices.THierarchy
    * @description
    * The name of the model represented by this $resource,
    * i.e. `THierarchy`.
    */
    R.modelName = "THierarchy";


    return R;
  }]);

/**
 * @ngdoc object
 * @name modelServices.Person
 * @header modelServices.Person
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Person` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Person",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/People/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Person.hasIdentities.findById() instead.
        "prototype$__findById__hasIdentities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/hasIdentities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.hasIdentities.destroyById() instead.
        "prototype$__destroyById__hasIdentities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/hasIdentities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.hasIdentities.updateById() instead.
        "prototype$__updateById__hasIdentities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/hasIdentities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.hasCredentials.findById() instead.
        "prototype$__findById__hasCredentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/hasCredentials/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.hasCredentials.destroyById() instead.
        "prototype$__destroyById__hasCredentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/hasCredentials/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.hasCredentials.updateById() instead.
        "prototype$__updateById__hasCredentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/hasCredentials/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.accessTokens.findById() instead.
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.accessTokens.destroyById() instead.
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.accessTokens.updateById() instead.
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.identities.findById() instead.
        "prototype$__findById__identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/identities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.identities.destroyById() instead.
        "prototype$__destroyById__identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/identities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.identities.updateById() instead.
        "prototype$__updateById__identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/identities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.credentials.findById() instead.
        "prototype$__findById__credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/credentials/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.credentials.destroyById() instead.
        "prototype$__destroyById__credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/credentials/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.credentials.updateById() instead.
        "prototype$__updateById__credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/credentials/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.hasIdentities() instead.
        "prototype$__get__hasIdentities": {
          isArray: true,
          url: urlBase + "/People/:id/hasIdentities",
          method: "GET"
        },

        // INTERNAL. Use Person.hasIdentities.create() instead.
        "prototype$__create__hasIdentities": {
          url: urlBase + "/People/:id/hasIdentities",
          method: "POST"
        },

        // INTERNAL. Use Person.hasIdentities.destroyAll() instead.
        "prototype$__delete__hasIdentities": {
          url: urlBase + "/People/:id/hasIdentities",
          method: "DELETE"
        },

        // INTERNAL. Use Person.hasIdentities.count() instead.
        "prototype$__count__hasIdentities": {
          url: urlBase + "/People/:id/hasIdentities/count",
          method: "GET"
        },

        // INTERNAL. Use Person.hasCredentials() instead.
        "prototype$__get__hasCredentials": {
          isArray: true,
          url: urlBase + "/People/:id/hasCredentials",
          method: "GET"
        },

        // INTERNAL. Use Person.hasCredentials.create() instead.
        "prototype$__create__hasCredentials": {
          url: urlBase + "/People/:id/hasCredentials",
          method: "POST"
        },

        // INTERNAL. Use Person.hasCredentials.destroyAll() instead.
        "prototype$__delete__hasCredentials": {
          url: urlBase + "/People/:id/hasCredentials",
          method: "DELETE"
        },

        // INTERNAL. Use Person.hasCredentials.count() instead.
        "prototype$__count__hasCredentials": {
          url: urlBase + "/People/:id/hasCredentials/count",
          method: "GET"
        },

        // INTERNAL. Use Person.accessTokens() instead.
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/People/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use Person.accessTokens.create() instead.
        "prototype$__create__accessTokens": {
          url: urlBase + "/People/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use Person.accessTokens.destroyAll() instead.
        "prototype$__delete__accessTokens": {
          url: urlBase + "/People/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use Person.accessTokens.count() instead.
        "prototype$__count__accessTokens": {
          url: urlBase + "/People/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Person.identities() instead.
        "prototype$__get__identities": {
          isArray: true,
          url: urlBase + "/People/:id/identities",
          method: "GET"
        },

        // INTERNAL. Use Person.identities.create() instead.
        "prototype$__create__identities": {
          url: urlBase + "/People/:id/identities",
          method: "POST"
        },

        // INTERNAL. Use Person.identities.destroyAll() instead.
        "prototype$__delete__identities": {
          url: urlBase + "/People/:id/identities",
          method: "DELETE"
        },

        // INTERNAL. Use Person.identities.count() instead.
        "prototype$__count__identities": {
          url: urlBase + "/People/:id/identities/count",
          method: "GET"
        },

        // INTERNAL. Use Person.credentials() instead.
        "prototype$__get__credentials": {
          isArray: true,
          url: urlBase + "/People/:id/credentials",
          method: "GET"
        },

        // INTERNAL. Use Person.credentials.create() instead.
        "prototype$__create__credentials": {
          url: urlBase + "/People/:id/credentials",
          method: "POST"
        },

        // INTERNAL. Use Person.credentials.destroyAll() instead.
        "prototype$__delete__credentials": {
          url: urlBase + "/People/:id/credentials",
          method: "DELETE"
        },

        // INTERNAL. Use Person.credentials.count() instead.
        "prototype$__count__credentials": {
          url: urlBase + "/People/:id/credentials/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.Person#create
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/People",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.Person#createMany
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/People",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.Person#upsert
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/People",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name modelServices.Person#exists
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/People/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.Person#findById
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/People/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.Person#find
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/People",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.Person#findOne
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/People/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.Person#updateAll
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/People/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.Person#deleteById
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/People/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name modelServices.Person#count
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/People/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.Person#prototype$updateAttributes
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/People/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name modelServices.Person#createChangeStream
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/People/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.Person#login
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/People/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.Person#logout
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/People/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.Person#confirm
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/People/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.Person#resetPassword
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/People/reset",
          method: "POST"
        },

        // INTERNAL. Use PersonIdentity.belongsToPerson() instead.
        "::get::PersonIdentity::belongsToPerson": {
          url: urlBase + "/PersonIdentities/:id/belongsToPerson",
          method: "GET"
        },

        // INTERNAL. Use PersonIdentity.user() instead.
        "::get::PersonIdentity::user": {
          url: urlBase + "/PersonIdentities/:id/user",
          method: "GET"
        },

        // INTERNAL. Use PersonCredential.belongsToPerson() instead.
        "::get::PersonCredential::belongsToPerson": {
          url: urlBase + "/PersonCredentials/:id/belongsToPerson",
          method: "GET"
        },

        // INTERNAL. Use PersonCredential.user() instead.
        "::get::PersonCredential::user": {
          url: urlBase + "/PersonCredentials/:id/user",
          method: "GET"
        },

        // INTERNAL. Use PersonAccessToken.Person() instead.
        "::get::PersonAccessToken::Person": {
          url: urlBase + "/PersonAccessTokens/:id/Person",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.Person#getCurrent
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/People" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name modelServices.Person#updateOrCreate
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name modelServices.Person#update
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name modelServices.Person#destroyById
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name modelServices.Person#removeById
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name modelServices.Person#getCachedCurrent
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link modelServices.Person#login} or
         * {@link modelServices.Person#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Person instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name modelServices.Person#isAuthenticated
         * @methodOf modelServices.Person
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name modelServices.Person#getCurrentId
         * @methodOf modelServices.Person
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name modelServices.Person#modelName
    * @propertyOf modelServices.Person
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Person`.
    */
    R.modelName = "Person";

    /**
     * @ngdoc object
     * @name modelServices.Person.hasIdentities
     * @header modelServices.Person.hasIdentities
     * @object
     * @description
     *
     * The object `Person.hasIdentities` groups methods
     * manipulating `PersonIdentity` instances related to `Person`.
     *
     * Call {@link modelServices.Person#hasIdentities Person.hasIdentities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name modelServices.Person#hasIdentities
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Queries hasIdentities of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        R.hasIdentities = function() {
          var TargetResource = $injector.get("PersonIdentity");
          var action = TargetResource["::get::Person::hasIdentities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.hasIdentities#count
         * @methodOf modelServices.Person.hasIdentities
         *
         * @description
         *
         * Counts hasIdentities of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.hasIdentities.count = function() {
          var TargetResource = $injector.get("PersonIdentity");
          var action = TargetResource["::count::Person::hasIdentities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.hasIdentities#create
         * @methodOf modelServices.Person.hasIdentities
         *
         * @description
         *
         * Creates a new instance in hasIdentities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        R.hasIdentities.create = function() {
          var TargetResource = $injector.get("PersonIdentity");
          var action = TargetResource["::create::Person::hasIdentities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.hasIdentities#createMany
         * @methodOf modelServices.Person.hasIdentities
         *
         * @description
         *
         * Creates a new instance in hasIdentities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        R.hasIdentities.createMany = function() {
          var TargetResource = $injector.get("PersonIdentity");
          var action = TargetResource["::createMany::Person::hasIdentities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.hasIdentities#destroyAll
         * @methodOf modelServices.Person.hasIdentities
         *
         * @description
         *
         * Deletes all hasIdentities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.hasIdentities.destroyAll = function() {
          var TargetResource = $injector.get("PersonIdentity");
          var action = TargetResource["::delete::Person::hasIdentities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.hasIdentities#destroyById
         * @methodOf modelServices.Person.hasIdentities
         *
         * @description
         *
         * Delete a related item by id for hasIdentities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for hasIdentities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.hasIdentities.destroyById = function() {
          var TargetResource = $injector.get("PersonIdentity");
          var action = TargetResource["::destroyById::Person::hasIdentities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.hasIdentities#findById
         * @methodOf modelServices.Person.hasIdentities
         *
         * @description
         *
         * Find a related item by id for hasIdentities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for hasIdentities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        R.hasIdentities.findById = function() {
          var TargetResource = $injector.get("PersonIdentity");
          var action = TargetResource["::findById::Person::hasIdentities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.hasIdentities#updateById
         * @methodOf modelServices.Person.hasIdentities
         *
         * @description
         *
         * Update a related item by id for hasIdentities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for hasIdentities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        R.hasIdentities.updateById = function() {
          var TargetResource = $injector.get("PersonIdentity");
          var action = TargetResource["::updateById::Person::hasIdentities"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name modelServices.Person.hasCredentials
     * @header modelServices.Person.hasCredentials
     * @object
     * @description
     *
     * The object `Person.hasCredentials` groups methods
     * manipulating `PersonCredential` instances related to `Person`.
     *
     * Call {@link modelServices.Person#hasCredentials Person.hasCredentials()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name modelServices.Person#hasCredentials
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Queries hasCredentials of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        R.hasCredentials = function() {
          var TargetResource = $injector.get("PersonCredential");
          var action = TargetResource["::get::Person::hasCredentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.hasCredentials#count
         * @methodOf modelServices.Person.hasCredentials
         *
         * @description
         *
         * Counts hasCredentials of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.hasCredentials.count = function() {
          var TargetResource = $injector.get("PersonCredential");
          var action = TargetResource["::count::Person::hasCredentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.hasCredentials#create
         * @methodOf modelServices.Person.hasCredentials
         *
         * @description
         *
         * Creates a new instance in hasCredentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        R.hasCredentials.create = function() {
          var TargetResource = $injector.get("PersonCredential");
          var action = TargetResource["::create::Person::hasCredentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.hasCredentials#createMany
         * @methodOf modelServices.Person.hasCredentials
         *
         * @description
         *
         * Creates a new instance in hasCredentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        R.hasCredentials.createMany = function() {
          var TargetResource = $injector.get("PersonCredential");
          var action = TargetResource["::createMany::Person::hasCredentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.hasCredentials#destroyAll
         * @methodOf modelServices.Person.hasCredentials
         *
         * @description
         *
         * Deletes all hasCredentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.hasCredentials.destroyAll = function() {
          var TargetResource = $injector.get("PersonCredential");
          var action = TargetResource["::delete::Person::hasCredentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.hasCredentials#destroyById
         * @methodOf modelServices.Person.hasCredentials
         *
         * @description
         *
         * Delete a related item by id for hasCredentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for hasCredentials
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.hasCredentials.destroyById = function() {
          var TargetResource = $injector.get("PersonCredential");
          var action = TargetResource["::destroyById::Person::hasCredentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.hasCredentials#findById
         * @methodOf modelServices.Person.hasCredentials
         *
         * @description
         *
         * Find a related item by id for hasCredentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for hasCredentials
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        R.hasCredentials.findById = function() {
          var TargetResource = $injector.get("PersonCredential");
          var action = TargetResource["::findById::Person::hasCredentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.hasCredentials#updateById
         * @methodOf modelServices.Person.hasCredentials
         *
         * @description
         *
         * Update a related item by id for hasCredentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for hasCredentials
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        R.hasCredentials.updateById = function() {
          var TargetResource = $injector.get("PersonCredential");
          var action = TargetResource["::updateById::Person::hasCredentials"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name modelServices.Person.accessTokens
     * @header modelServices.Person.accessTokens
     * @object
     * @description
     *
     * The object `Person.accessTokens` groups methods
     * manipulating `PersonAccessToken` instances related to `Person`.
     *
     * Call {@link modelServices.Person#accessTokens Person.accessTokens()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name modelServices.Person#accessTokens
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Queries accessTokens of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonAccessToken` object.)
         * </em>
         */
        R.accessTokens = function() {
          var TargetResource = $injector.get("PersonAccessToken");
          var action = TargetResource["::get::Person::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.accessTokens#count
         * @methodOf modelServices.Person.accessTokens
         *
         * @description
         *
         * Counts accessTokens of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.accessTokens.count = function() {
          var TargetResource = $injector.get("PersonAccessToken");
          var action = TargetResource["::count::Person::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.accessTokens#create
         * @methodOf modelServices.Person.accessTokens
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonAccessToken` object.)
         * </em>
         */
        R.accessTokens.create = function() {
          var TargetResource = $injector.get("PersonAccessToken");
          var action = TargetResource["::create::Person::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.accessTokens#createMany
         * @methodOf modelServices.Person.accessTokens
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonAccessToken` object.)
         * </em>
         */
        R.accessTokens.createMany = function() {
          var TargetResource = $injector.get("PersonAccessToken");
          var action = TargetResource["::createMany::Person::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.accessTokens#destroyAll
         * @methodOf modelServices.Person.accessTokens
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyAll = function() {
          var TargetResource = $injector.get("PersonAccessToken");
          var action = TargetResource["::delete::Person::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.accessTokens#destroyById
         * @methodOf modelServices.Person.accessTokens
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyById = function() {
          var TargetResource = $injector.get("PersonAccessToken");
          var action = TargetResource["::destroyById::Person::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.accessTokens#findById
         * @methodOf modelServices.Person.accessTokens
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonAccessToken` object.)
         * </em>
         */
        R.accessTokens.findById = function() {
          var TargetResource = $injector.get("PersonAccessToken");
          var action = TargetResource["::findById::Person::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.accessTokens#updateById
         * @methodOf modelServices.Person.accessTokens
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonAccessToken` object.)
         * </em>
         */
        R.accessTokens.updateById = function() {
          var TargetResource = $injector.get("PersonAccessToken");
          var action = TargetResource["::updateById::Person::accessTokens"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name modelServices.Person.identities
     * @header modelServices.Person.identities
     * @object
     * @description
     *
     * The object `Person.identities` groups methods
     * manipulating `PersonIdentity` instances related to `Person`.
     *
     * Call {@link modelServices.Person#identities Person.identities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name modelServices.Person#identities
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Queries identities of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        R.identities = function() {
          var TargetResource = $injector.get("PersonIdentity");
          var action = TargetResource["::get::Person::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.identities#count
         * @methodOf modelServices.Person.identities
         *
         * @description
         *
         * Counts identities of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.identities.count = function() {
          var TargetResource = $injector.get("PersonIdentity");
          var action = TargetResource["::count::Person::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.identities#create
         * @methodOf modelServices.Person.identities
         *
         * @description
         *
         * Creates a new instance in identities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        R.identities.create = function() {
          var TargetResource = $injector.get("PersonIdentity");
          var action = TargetResource["::create::Person::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.identities#createMany
         * @methodOf modelServices.Person.identities
         *
         * @description
         *
         * Creates a new instance in identities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        R.identities.createMany = function() {
          var TargetResource = $injector.get("PersonIdentity");
          var action = TargetResource["::createMany::Person::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.identities#destroyAll
         * @methodOf modelServices.Person.identities
         *
         * @description
         *
         * Deletes all identities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.identities.destroyAll = function() {
          var TargetResource = $injector.get("PersonIdentity");
          var action = TargetResource["::delete::Person::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.identities#destroyById
         * @methodOf modelServices.Person.identities
         *
         * @description
         *
         * Delete a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.identities.destroyById = function() {
          var TargetResource = $injector.get("PersonIdentity");
          var action = TargetResource["::destroyById::Person::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.identities#findById
         * @methodOf modelServices.Person.identities
         *
         * @description
         *
         * Find a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        R.identities.findById = function() {
          var TargetResource = $injector.get("PersonIdentity");
          var action = TargetResource["::findById::Person::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.identities#updateById
         * @methodOf modelServices.Person.identities
         *
         * @description
         *
         * Update a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        R.identities.updateById = function() {
          var TargetResource = $injector.get("PersonIdentity");
          var action = TargetResource["::updateById::Person::identities"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name modelServices.Person.credentials
     * @header modelServices.Person.credentials
     * @object
     * @description
     *
     * The object `Person.credentials` groups methods
     * manipulating `PersonCredential` instances related to `Person`.
     *
     * Call {@link modelServices.Person#credentials Person.credentials()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name modelServices.Person#credentials
         * @methodOf modelServices.Person
         *
         * @description
         *
         * Queries credentials of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        R.credentials = function() {
          var TargetResource = $injector.get("PersonCredential");
          var action = TargetResource["::get::Person::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.credentials#count
         * @methodOf modelServices.Person.credentials
         *
         * @description
         *
         * Counts credentials of Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.credentials.count = function() {
          var TargetResource = $injector.get("PersonCredential");
          var action = TargetResource["::count::Person::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.credentials#create
         * @methodOf modelServices.Person.credentials
         *
         * @description
         *
         * Creates a new instance in credentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        R.credentials.create = function() {
          var TargetResource = $injector.get("PersonCredential");
          var action = TargetResource["::create::Person::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.credentials#createMany
         * @methodOf modelServices.Person.credentials
         *
         * @description
         *
         * Creates a new instance in credentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        R.credentials.createMany = function() {
          var TargetResource = $injector.get("PersonCredential");
          var action = TargetResource["::createMany::Person::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.credentials#destroyAll
         * @methodOf modelServices.Person.credentials
         *
         * @description
         *
         * Deletes all credentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.credentials.destroyAll = function() {
          var TargetResource = $injector.get("PersonCredential");
          var action = TargetResource["::delete::Person::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.credentials#destroyById
         * @methodOf modelServices.Person.credentials
         *
         * @description
         *
         * Delete a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.credentials.destroyById = function() {
          var TargetResource = $injector.get("PersonCredential");
          var action = TargetResource["::destroyById::Person::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.credentials#findById
         * @methodOf modelServices.Person.credentials
         *
         * @description
         *
         * Find a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        R.credentials.findById = function() {
          var TargetResource = $injector.get("PersonCredential");
          var action = TargetResource["::findById::Person::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Person.credentials#updateById
         * @methodOf modelServices.Person.credentials
         *
         * @description
         *
         * Update a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        R.credentials.updateById = function() {
          var TargetResource = $injector.get("PersonCredential");
          var action = TargetResource["::updateById::Person::credentials"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name modelServices.PersonIdentity
 * @header modelServices.PersonIdentity
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `PersonIdentity` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "PersonIdentity",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/PersonIdentities/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use PersonIdentity.belongsToPerson() instead.
        "prototype$__get__belongsToPerson": {
          url: urlBase + "/PersonIdentities/:id/belongsToPerson",
          method: "GET"
        },

        // INTERNAL. Use PersonIdentity.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/PersonIdentities/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonIdentity#create
         * @methodOf modelServices.PersonIdentity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/PersonIdentities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonIdentity#createMany
         * @methodOf modelServices.PersonIdentity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/PersonIdentities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonIdentity#upsert
         * @methodOf modelServices.PersonIdentity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/PersonIdentities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonIdentity#exists
         * @methodOf modelServices.PersonIdentity
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/PersonIdentities/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonIdentity#findById
         * @methodOf modelServices.PersonIdentity
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/PersonIdentities/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonIdentity#find
         * @methodOf modelServices.PersonIdentity
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/PersonIdentities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonIdentity#findOne
         * @methodOf modelServices.PersonIdentity
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/PersonIdentities/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonIdentity#updateAll
         * @methodOf modelServices.PersonIdentity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/PersonIdentities/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonIdentity#deleteById
         * @methodOf modelServices.PersonIdentity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/PersonIdentities/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonIdentity#count
         * @methodOf modelServices.PersonIdentity
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/PersonIdentities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonIdentity#prototype$updateAttributes
         * @methodOf modelServices.PersonIdentity
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - UserIdentity id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/PersonIdentities/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonIdentity#createChangeStream
         * @methodOf modelServices.PersonIdentity
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/PersonIdentities/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Person.hasIdentities.findById() instead.
        "::findById::Person::hasIdentities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/hasIdentities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.hasIdentities.destroyById() instead.
        "::destroyById::Person::hasIdentities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/hasIdentities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.hasIdentities.updateById() instead.
        "::updateById::Person::hasIdentities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/hasIdentities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.identities.findById() instead.
        "::findById::Person::identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/identities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.identities.destroyById() instead.
        "::destroyById::Person::identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/identities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.identities.updateById() instead.
        "::updateById::Person::identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/identities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.hasIdentities() instead.
        "::get::Person::hasIdentities": {
          isArray: true,
          url: urlBase + "/People/:id/hasIdentities",
          method: "GET"
        },

        // INTERNAL. Use Person.hasIdentities.create() instead.
        "::create::Person::hasIdentities": {
          url: urlBase + "/People/:id/hasIdentities",
          method: "POST"
        },

        // INTERNAL. Use Person.hasIdentities.createMany() instead.
        "::createMany::Person::hasIdentities": {
          isArray: true,
          url: urlBase + "/People/:id/hasIdentities",
          method: "POST"
        },

        // INTERNAL. Use Person.hasIdentities.destroyAll() instead.
        "::delete::Person::hasIdentities": {
          url: urlBase + "/People/:id/hasIdentities",
          method: "DELETE"
        },

        // INTERNAL. Use Person.hasIdentities.count() instead.
        "::count::Person::hasIdentities": {
          url: urlBase + "/People/:id/hasIdentities/count",
          method: "GET"
        },

        // INTERNAL. Use Person.identities() instead.
        "::get::Person::identities": {
          isArray: true,
          url: urlBase + "/People/:id/identities",
          method: "GET"
        },

        // INTERNAL. Use Person.identities.create() instead.
        "::create::Person::identities": {
          url: urlBase + "/People/:id/identities",
          method: "POST"
        },

        // INTERNAL. Use Person.identities.createMany() instead.
        "::createMany::Person::identities": {
          isArray: true,
          url: urlBase + "/People/:id/identities",
          method: "POST"
        },

        // INTERNAL. Use Person.identities.destroyAll() instead.
        "::delete::Person::identities": {
          url: urlBase + "/People/:id/identities",
          method: "DELETE"
        },

        // INTERNAL. Use Person.identities.count() instead.
        "::count::Person::identities": {
          url: urlBase + "/People/:id/identities/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name modelServices.PersonIdentity#updateOrCreate
         * @methodOf modelServices.PersonIdentity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name modelServices.PersonIdentity#update
         * @methodOf modelServices.PersonIdentity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name modelServices.PersonIdentity#destroyById
         * @methodOf modelServices.PersonIdentity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name modelServices.PersonIdentity#removeById
         * @methodOf modelServices.PersonIdentity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonIdentity` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name modelServices.PersonIdentity#modelName
    * @propertyOf modelServices.PersonIdentity
    * @description
    * The name of the model represented by this $resource,
    * i.e. `PersonIdentity`.
    */
    R.modelName = "PersonIdentity";


        /**
         * @ngdoc method
         * @name modelServices.PersonIdentity#belongsToPerson
         * @methodOf modelServices.PersonIdentity
         *
         * @description
         *
         * Fetches belongsTo relation belongsToPerson.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - UserIdentity id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        R.belongsToPerson = function() {
          var TargetResource = $injector.get("Person");
          var action = TargetResource["::get::PersonIdentity::belongsToPerson"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.PersonIdentity#user
         * @methodOf modelServices.PersonIdentity
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - UserIdentity id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("Person");
          var action = TargetResource["::get::PersonIdentity::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name modelServices.PersonCredential
 * @header modelServices.PersonCredential
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `PersonCredential` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "PersonCredential",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/PersonCredentials/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use PersonCredential.belongsToPerson() instead.
        "prototype$__get__belongsToPerson": {
          url: urlBase + "/PersonCredentials/:id/belongsToPerson",
          method: "GET"
        },

        // INTERNAL. Use PersonCredential.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/PersonCredentials/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonCredential#create
         * @methodOf modelServices.PersonCredential
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/PersonCredentials",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonCredential#createMany
         * @methodOf modelServices.PersonCredential
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/PersonCredentials",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonCredential#upsert
         * @methodOf modelServices.PersonCredential
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/PersonCredentials",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonCredential#exists
         * @methodOf modelServices.PersonCredential
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/PersonCredentials/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonCredential#findById
         * @methodOf modelServices.PersonCredential
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/PersonCredentials/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonCredential#find
         * @methodOf modelServices.PersonCredential
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/PersonCredentials",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonCredential#findOne
         * @methodOf modelServices.PersonCredential
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/PersonCredentials/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonCredential#updateAll
         * @methodOf modelServices.PersonCredential
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/PersonCredentials/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonCredential#deleteById
         * @methodOf modelServices.PersonCredential
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/PersonCredentials/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonCredential#count
         * @methodOf modelServices.PersonCredential
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/PersonCredentials/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonCredential#prototype$updateAttributes
         * @methodOf modelServices.PersonCredential
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - UserCredential id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/PersonCredentials/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonCredential#createChangeStream
         * @methodOf modelServices.PersonCredential
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/PersonCredentials/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Person.hasCredentials.findById() instead.
        "::findById::Person::hasCredentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/hasCredentials/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.hasCredentials.destroyById() instead.
        "::destroyById::Person::hasCredentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/hasCredentials/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.hasCredentials.updateById() instead.
        "::updateById::Person::hasCredentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/hasCredentials/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.credentials.findById() instead.
        "::findById::Person::credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/credentials/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.credentials.destroyById() instead.
        "::destroyById::Person::credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/credentials/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.credentials.updateById() instead.
        "::updateById::Person::credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/credentials/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.hasCredentials() instead.
        "::get::Person::hasCredentials": {
          isArray: true,
          url: urlBase + "/People/:id/hasCredentials",
          method: "GET"
        },

        // INTERNAL. Use Person.hasCredentials.create() instead.
        "::create::Person::hasCredentials": {
          url: urlBase + "/People/:id/hasCredentials",
          method: "POST"
        },

        // INTERNAL. Use Person.hasCredentials.createMany() instead.
        "::createMany::Person::hasCredentials": {
          isArray: true,
          url: urlBase + "/People/:id/hasCredentials",
          method: "POST"
        },

        // INTERNAL. Use Person.hasCredentials.destroyAll() instead.
        "::delete::Person::hasCredentials": {
          url: urlBase + "/People/:id/hasCredentials",
          method: "DELETE"
        },

        // INTERNAL. Use Person.hasCredentials.count() instead.
        "::count::Person::hasCredentials": {
          url: urlBase + "/People/:id/hasCredentials/count",
          method: "GET"
        },

        // INTERNAL. Use Person.credentials() instead.
        "::get::Person::credentials": {
          isArray: true,
          url: urlBase + "/People/:id/credentials",
          method: "GET"
        },

        // INTERNAL. Use Person.credentials.create() instead.
        "::create::Person::credentials": {
          url: urlBase + "/People/:id/credentials",
          method: "POST"
        },

        // INTERNAL. Use Person.credentials.createMany() instead.
        "::createMany::Person::credentials": {
          isArray: true,
          url: urlBase + "/People/:id/credentials",
          method: "POST"
        },

        // INTERNAL. Use Person.credentials.destroyAll() instead.
        "::delete::Person::credentials": {
          url: urlBase + "/People/:id/credentials",
          method: "DELETE"
        },

        // INTERNAL. Use Person.credentials.count() instead.
        "::count::Person::credentials": {
          url: urlBase + "/People/:id/credentials/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name modelServices.PersonCredential#updateOrCreate
         * @methodOf modelServices.PersonCredential
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name modelServices.PersonCredential#update
         * @methodOf modelServices.PersonCredential
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name modelServices.PersonCredential#destroyById
         * @methodOf modelServices.PersonCredential
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name modelServices.PersonCredential#removeById
         * @methodOf modelServices.PersonCredential
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonCredential` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name modelServices.PersonCredential#modelName
    * @propertyOf modelServices.PersonCredential
    * @description
    * The name of the model represented by this $resource,
    * i.e. `PersonCredential`.
    */
    R.modelName = "PersonCredential";


        /**
         * @ngdoc method
         * @name modelServices.PersonCredential#belongsToPerson
         * @methodOf modelServices.PersonCredential
         *
         * @description
         *
         * Fetches belongsTo relation belongsToPerson.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - UserCredential id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        R.belongsToPerson = function() {
          var TargetResource = $injector.get("Person");
          var action = TargetResource["::get::PersonCredential::belongsToPerson"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.PersonCredential#user
         * @methodOf modelServices.PersonCredential
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - UserCredential id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("Person");
          var action = TargetResource["::get::PersonCredential::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name modelServices.Test
 * @header modelServices.Test
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Test` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Test",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/tests/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Test.tests.findById() instead.
        "prototype$__findById__tests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tests/:id/tests/:fk",
          method: "GET"
        },

        // INTERNAL. Use Test.tests.destroyById() instead.
        "prototype$__destroyById__tests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tests/:id/tests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Test.tests.updateById() instead.
        "prototype$__updateById__tests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tests/:id/tests/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Test.tests() instead.
        "prototype$__get__tests": {
          isArray: true,
          url: urlBase + "/tests/:id/tests",
          method: "GET"
        },

        // INTERNAL. Use Test.tests.create() instead.
        "prototype$__create__tests": {
          url: urlBase + "/tests/:id/tests",
          method: "POST"
        },

        // INTERNAL. Use Test.tests.destroyAll() instead.
        "prototype$__delete__tests": {
          url: urlBase + "/tests/:id/tests",
          method: "DELETE"
        },

        // INTERNAL. Use Test.tests.count() instead.
        "prototype$__count__tests": {
          url: urlBase + "/tests/:id/tests/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.Test#create
         * @methodOf modelServices.Test
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Test` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/tests",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.Test#createMany
         * @methodOf modelServices.Test
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Test` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/tests",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.Test#upsert
         * @methodOf modelServices.Test
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Test` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/tests",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name modelServices.Test#exists
         * @methodOf modelServices.Test
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/tests/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.Test#findById
         * @methodOf modelServices.Test
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Test` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/tests/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.Test#find
         * @methodOf modelServices.Test
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Test` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/tests",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.Test#findOne
         * @methodOf modelServices.Test
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Test` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/tests/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.Test#updateAll
         * @methodOf modelServices.Test
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/tests/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.Test#deleteById
         * @methodOf modelServices.Test
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Test` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/tests/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name modelServices.Test#count
         * @methodOf modelServices.Test
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/tests/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.Test#prototype$updateAttributes
         * @methodOf modelServices.Test
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - UserCredential id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Test` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/tests/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name modelServices.Test#createChangeStream
         * @methodOf modelServices.Test
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/tests/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Test.tests.findById() instead.
        "::findById::test::tests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tests/:id/tests/:fk",
          method: "GET"
        },

        // INTERNAL. Use Test.tests.destroyById() instead.
        "::destroyById::test::tests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tests/:id/tests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Test.tests.updateById() instead.
        "::updateById::test::tests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tests/:id/tests/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Test.tests() instead.
        "::get::test::tests": {
          isArray: true,
          url: urlBase + "/tests/:id/tests",
          method: "GET"
        },

        // INTERNAL. Use Test.tests.create() instead.
        "::create::test::tests": {
          url: urlBase + "/tests/:id/tests",
          method: "POST"
        },

        // INTERNAL. Use Test.tests.createMany() instead.
        "::createMany::test::tests": {
          isArray: true,
          url: urlBase + "/tests/:id/tests",
          method: "POST"
        },

        // INTERNAL. Use Test.tests.destroyAll() instead.
        "::delete::test::tests": {
          url: urlBase + "/tests/:id/tests",
          method: "DELETE"
        },

        // INTERNAL. Use Test.tests.count() instead.
        "::count::test::tests": {
          url: urlBase + "/tests/:id/tests/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name modelServices.Test#updateOrCreate
         * @methodOf modelServices.Test
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Test` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name modelServices.Test#update
         * @methodOf modelServices.Test
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name modelServices.Test#destroyById
         * @methodOf modelServices.Test
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Test` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name modelServices.Test#removeById
         * @methodOf modelServices.Test
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Test` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name modelServices.Test#modelName
    * @propertyOf modelServices.Test
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Test`.
    */
    R.modelName = "Test";

    /**
     * @ngdoc object
     * @name modelServices.Test.tests
     * @header modelServices.Test.tests
     * @object
     * @description
     *
     * The object `Test.tests` groups methods
     * manipulating `Test` instances related to `Test`.
     *
     * Call {@link modelServices.Test#tests Test.tests()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name modelServices.Test#tests
         * @methodOf modelServices.Test
         *
         * @description
         *
         * Queries tests of test.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - UserCredential id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Test` object.)
         * </em>
         */
        R.tests = function() {
          var TargetResource = $injector.get("Test");
          var action = TargetResource["::get::test::tests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Test.tests#count
         * @methodOf modelServices.Test.tests
         *
         * @description
         *
         * Counts tests of test.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - UserCredential id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.tests.count = function() {
          var TargetResource = $injector.get("Test");
          var action = TargetResource["::count::test::tests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Test.tests#create
         * @methodOf modelServices.Test.tests
         *
         * @description
         *
         * Creates a new instance in tests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - UserCredential id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Test` object.)
         * </em>
         */
        R.tests.create = function() {
          var TargetResource = $injector.get("Test");
          var action = TargetResource["::create::test::tests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Test.tests#createMany
         * @methodOf modelServices.Test.tests
         *
         * @description
         *
         * Creates a new instance in tests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - UserCredential id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Test` object.)
         * </em>
         */
        R.tests.createMany = function() {
          var TargetResource = $injector.get("Test");
          var action = TargetResource["::createMany::test::tests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Test.tests#destroyAll
         * @methodOf modelServices.Test.tests
         *
         * @description
         *
         * Deletes all tests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - UserCredential id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tests.destroyAll = function() {
          var TargetResource = $injector.get("Test");
          var action = TargetResource["::delete::test::tests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Test.tests#destroyById
         * @methodOf modelServices.Test.tests
         *
         * @description
         *
         * Delete a related item by id for tests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - UserCredential id
         *
         *  - `fk` – `{*}` - Foreign key for tests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tests.destroyById = function() {
          var TargetResource = $injector.get("Test");
          var action = TargetResource["::destroyById::test::tests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Test.tests#findById
         * @methodOf modelServices.Test.tests
         *
         * @description
         *
         * Find a related item by id for tests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - UserCredential id
         *
         *  - `fk` – `{*}` - Foreign key for tests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Test` object.)
         * </em>
         */
        R.tests.findById = function() {
          var TargetResource = $injector.get("Test");
          var action = TargetResource["::findById::test::tests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name modelServices.Test.tests#updateById
         * @methodOf modelServices.Test.tests
         *
         * @description
         *
         * Update a related item by id for tests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - UserCredential id
         *
         *  - `fk` – `{*}` - Foreign key for tests
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Test` object.)
         * </em>
         */
        R.tests.updateById = function() {
          var TargetResource = $injector.get("Test");
          var action = TargetResource["::updateById::test::tests"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name modelServices.PersonAccessToken
 * @header modelServices.PersonAccessToken
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `PersonAccessToken` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "PersonAccessToken",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/PersonAccessTokens/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name modelServices.PersonAccessToken#prototype$__get__user
         * @methodOf modelServices.PersonAccessToken
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - AccessToken id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonAccessToken` object.)
         * </em>
         */
        "prototype$__get__user": {
          url: urlBase + "/PersonAccessTokens/:id/user",
          method: "GET"
        },

        // INTERNAL. Use PersonAccessToken.Person() instead.
        "prototype$__get__Person": {
          url: urlBase + "/PersonAccessTokens/:id/Person",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonAccessToken#create
         * @methodOf modelServices.PersonAccessToken
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonAccessToken` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/PersonAccessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonAccessToken#createMany
         * @methodOf modelServices.PersonAccessToken
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonAccessToken` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/PersonAccessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonAccessToken#upsert
         * @methodOf modelServices.PersonAccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonAccessToken` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/PersonAccessTokens",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonAccessToken#exists
         * @methodOf modelServices.PersonAccessToken
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/PersonAccessTokens/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonAccessToken#findById
         * @methodOf modelServices.PersonAccessToken
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonAccessToken` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/PersonAccessTokens/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonAccessToken#find
         * @methodOf modelServices.PersonAccessToken
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonAccessToken` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/PersonAccessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonAccessToken#findOne
         * @methodOf modelServices.PersonAccessToken
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonAccessToken` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/PersonAccessTokens/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonAccessToken#updateAll
         * @methodOf modelServices.PersonAccessToken
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/PersonAccessTokens/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonAccessToken#deleteById
         * @methodOf modelServices.PersonAccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonAccessToken` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/PersonAccessTokens/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonAccessToken#count
         * @methodOf modelServices.PersonAccessToken
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/PersonAccessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonAccessToken#prototype$updateAttributes
         * @methodOf modelServices.PersonAccessToken
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - AccessToken id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonAccessToken` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/PersonAccessTokens/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name modelServices.PersonAccessToken#createChangeStream
         * @methodOf modelServices.PersonAccessToken
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/PersonAccessTokens/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Person.accessTokens.findById() instead.
        "::findById::Person::accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use Person.accessTokens.destroyById() instead.
        "::destroyById::Person::accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Person.accessTokens.updateById() instead.
        "::updateById::Person::accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/People/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Person.accessTokens() instead.
        "::get::Person::accessTokens": {
          isArray: true,
          url: urlBase + "/People/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use Person.accessTokens.create() instead.
        "::create::Person::accessTokens": {
          url: urlBase + "/People/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use Person.accessTokens.createMany() instead.
        "::createMany::Person::accessTokens": {
          isArray: true,
          url: urlBase + "/People/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use Person.accessTokens.destroyAll() instead.
        "::delete::Person::accessTokens": {
          url: urlBase + "/People/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use Person.accessTokens.count() instead.
        "::count::Person::accessTokens": {
          url: urlBase + "/People/:id/accessTokens/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name modelServices.PersonAccessToken#updateOrCreate
         * @methodOf modelServices.PersonAccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonAccessToken` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name modelServices.PersonAccessToken#update
         * @methodOf modelServices.PersonAccessToken
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name modelServices.PersonAccessToken#destroyById
         * @methodOf modelServices.PersonAccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonAccessToken` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name modelServices.PersonAccessToken#removeById
         * @methodOf modelServices.PersonAccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PersonAccessToken` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name modelServices.PersonAccessToken#modelName
    * @propertyOf modelServices.PersonAccessToken
    * @description
    * The name of the model represented by this $resource,
    * i.e. `PersonAccessToken`.
    */
    R.modelName = "PersonAccessToken";


        /**
         * @ngdoc method
         * @name modelServices.PersonAccessToken#Person
         * @methodOf modelServices.PersonAccessToken
         *
         * @description
         *
         * Fetches belongsTo relation Person.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - AccessToken id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Person` object.)
         * </em>
         */
        R.Person = function() {
          var TargetResource = $injector.get("Person");
          var action = TargetResource["::get::PersonAccessToken::Person"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name modelServices.LoopBackResourceProvider
   * @header modelServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name modelServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf modelServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name modelServices.LoopBackResourceProvider#setUrlBase
     * @methodOf modelServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name modelServices.LoopBackResourceProvider#getUrlBase
     * @methodOf modelServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
