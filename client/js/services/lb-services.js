// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Candidate
 * @header lbServices.Candidate
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Candidate` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Candidate",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Candidates/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Candidate.educations.findById() instead.
            "prototype$__findById__educations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Candidates/:id/educations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Candidate.educations.destroyById() instead.
            "prototype$__destroyById__educations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Candidates/:id/educations/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Candidate.educations.updateById() instead.
            "prototype$__updateById__educations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Candidates/:id/educations/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Candidate.employments.findById() instead.
            "prototype$__findById__employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Candidates/:id/employments/:fk",
              method: "GET",
            },

            // INTERNAL. Use Candidate.employments.destroyById() instead.
            "prototype$__destroyById__employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Candidates/:id/employments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Candidate.employments.updateById() instead.
            "prototype$__updateById__employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Candidates/:id/employments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Candidate.candidateSkillLevels.findById() instead.
            "prototype$__findById__candidateSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Candidates/:id/candidateSkillLevels/:fk",
              method: "GET",
            },

            // INTERNAL. Use Candidate.candidateSkillLevels.destroyById() instead.
            "prototype$__destroyById__candidateSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Candidates/:id/candidateSkillLevels/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Candidate.candidateSkillLevels.updateById() instead.
            "prototype$__updateById__candidateSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Candidates/:id/candidateSkillLevels/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Candidate.educations() instead.
            "prototype$__get__educations": {
              isArray: true,
              url: urlBase + "/Candidates/:id/educations",
              method: "GET",
            },

            // INTERNAL. Use Candidate.educations.create() instead.
            "prototype$__create__educations": {
              url: urlBase + "/Candidates/:id/educations",
              method: "POST",
            },

            // INTERNAL. Use Candidate.educations.destroyAll() instead.
            "prototype$__delete__educations": {
              url: urlBase + "/Candidates/:id/educations",
              method: "DELETE",
            },

            // INTERNAL. Use Candidate.educations.count() instead.
            "prototype$__count__educations": {
              url: urlBase + "/Candidates/:id/educations/count",
              method: "GET",
            },

            // INTERNAL. Use Candidate.employments() instead.
            "prototype$__get__employments": {
              isArray: true,
              url: urlBase + "/Candidates/:id/employments",
              method: "GET",
            },

            // INTERNAL. Use Candidate.employments.create() instead.
            "prototype$__create__employments": {
              url: urlBase + "/Candidates/:id/employments",
              method: "POST",
            },

            // INTERNAL. Use Candidate.employments.destroyAll() instead.
            "prototype$__delete__employments": {
              url: urlBase + "/Candidates/:id/employments",
              method: "DELETE",
            },

            // INTERNAL. Use Candidate.employments.count() instead.
            "prototype$__count__employments": {
              url: urlBase + "/Candidates/:id/employments/count",
              method: "GET",
            },

            // INTERNAL. Use Candidate.candidateSkillLevels() instead.
            "prototype$__get__candidateSkillLevels": {
              isArray: true,
              url: urlBase + "/Candidates/:id/candidateSkillLevels",
              method: "GET",
            },

            // INTERNAL. Use Candidate.candidateSkillLevels.create() instead.
            "prototype$__create__candidateSkillLevels": {
              url: urlBase + "/Candidates/:id/candidateSkillLevels",
              method: "POST",
            },

            // INTERNAL. Use Candidate.candidateSkillLevels.destroyAll() instead.
            "prototype$__delete__candidateSkillLevels": {
              url: urlBase + "/Candidates/:id/candidateSkillLevels",
              method: "DELETE",
            },

            // INTERNAL. Use Candidate.candidateSkillLevels.count() instead.
            "prototype$__count__candidateSkillLevels": {
              url: urlBase + "/Candidates/:id/candidateSkillLevels/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Candidate#create
             * @methodOf lbServices.Candidate
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
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Candidates",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Candidate#createMany
             * @methodOf lbServices.Candidate
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
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Candidates",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Candidate#patchOrCreate
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Candidates",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Candidate#replaceOrCreate
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Candidates/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Candidate#upsertWithWhere
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Candidates/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Candidate#exists
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Candidates/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Candidate#findById
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Candidates/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Candidate#replaceById
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Candidates/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Candidate#find
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Candidates",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Candidate#findOne
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Candidates/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Candidate#updateAll
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Candidates/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Candidate#deleteById
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Candidates/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Candidate#count
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
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
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Candidates/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Candidate#prototype$patchAttributes
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Candidates/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Candidate#createChangeStream
             * @methodOf lbServices.Candidate
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
              url: urlBase + "/Candidates/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Candidate#topTenSkills
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Returns top ten skills of all users
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
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
             *  - `topSkills` – `{*=}` -
             */
            "topTenSkills": {
              url: urlBase + "/Candidates/topTenSkills",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Candidate#prototype$topThreeSkills
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Returns top three skills of user
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{string}` - candidate id
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
             *  - `topThreeSkills` – `{*=}` -
             */
            "prototype$topThreeSkills": {
              url: urlBase + "/Candidates/:id/topThreeSkills",
              method: "GET",
            },

            // INTERNAL. Use Education.candidate() instead.
            "::get::Education::candidate": {
              url: urlBase + "/Education/:id/candidate",
              method: "GET",
            },

            // INTERNAL. Use Employment.candidate() instead.
            "::get::Employment::candidate": {
              url: urlBase + "/Employments/:id/candidate",
              method: "GET",
            },

            // INTERNAL. Use CandidateSkillLevel.candidate() instead.
            "::get::CandidateSkillLevel::candidate": {
              url: urlBase + "/CandidateSkillLevels/:id/candidate",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Candidate#upsert
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Candidate#updateOrCreate
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Candidate#patchOrCreateWithWhere
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Candidate#update
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Candidate#destroyById
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Candidate#removeById
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Candidate#prototype$updateAttributes
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Candidate#modelName
        * @propertyOf lbServices.Candidate
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Candidate`.
        */
        R.modelName = "Candidate";

    /**
     * @ngdoc object
     * @name lbServices.Candidate.educations
     * @header lbServices.Candidate.educations
     * @object
     * @description
     *
     * The object `Candidate.educations` groups methods
     * manipulating `Education` instances related to `Candidate`.
     *
     * Call {@link lbServices.Candidate#educations Candidate.educations()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Candidate#educations
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Queries educations of Candidate.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R.educations = function() {
          var TargetResource = $injector.get("Education");
          var action = TargetResource["::get::Candidate::educations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.educations#count
             * @methodOf lbServices.Candidate.educations
             *
             * @description
             *
             * Counts educations of Candidate.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
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
             *  - `count` – `{number=}` -
             */
        R.educations.count = function() {
          var TargetResource = $injector.get("Education");
          var action = TargetResource["::count::Candidate::educations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.educations#create
             * @methodOf lbServices.Candidate.educations
             *
             * @description
             *
             * Creates a new instance in educations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R.educations.create = function() {
          var TargetResource = $injector.get("Education");
          var action = TargetResource["::create::Candidate::educations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.educations#createMany
             * @methodOf lbServices.Candidate.educations
             *
             * @description
             *
             * Creates a new instance in educations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R.educations.createMany = function() {
          var TargetResource = $injector.get("Education");
          var action = TargetResource["::createMany::Candidate::educations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.educations#destroyAll
             * @methodOf lbServices.Candidate.educations
             *
             * @description
             *
             * Deletes all educations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
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
             * This method returns no data.
             */
        R.educations.destroyAll = function() {
          var TargetResource = $injector.get("Education");
          var action = TargetResource["::delete::Candidate::educations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.educations#destroyById
             * @methodOf lbServices.Candidate.educations
             *
             * @description
             *
             * Delete a related item by id for educations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for educations
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
             * This method returns no data.
             */
        R.educations.destroyById = function() {
          var TargetResource = $injector.get("Education");
          var action = TargetResource["::destroyById::Candidate::educations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.educations#findById
             * @methodOf lbServices.Candidate.educations
             *
             * @description
             *
             * Find a related item by id for educations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for educations
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R.educations.findById = function() {
          var TargetResource = $injector.get("Education");
          var action = TargetResource["::findById::Candidate::educations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.educations#updateById
             * @methodOf lbServices.Candidate.educations
             *
             * @description
             *
             * Update a related item by id for educations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `fk` – `{*}` - Foreign key for educations
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R.educations.updateById = function() {
          var TargetResource = $injector.get("Education");
          var action = TargetResource["::updateById::Candidate::educations"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Candidate.employments
     * @header lbServices.Candidate.employments
     * @object
     * @description
     *
     * The object `Candidate.employments` groups methods
     * manipulating `Employment` instances related to `Candidate`.
     *
     * Call {@link lbServices.Candidate#employments Candidate.employments()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Candidate#employments
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Queries employments of Candidate.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R.employments = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::get::Candidate::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.employments#count
             * @methodOf lbServices.Candidate.employments
             *
             * @description
             *
             * Counts employments of Candidate.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
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
             *  - `count` – `{number=}` -
             */
        R.employments.count = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::count::Candidate::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.employments#create
             * @methodOf lbServices.Candidate.employments
             *
             * @description
             *
             * Creates a new instance in employments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R.employments.create = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::create::Candidate::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.employments#createMany
             * @methodOf lbServices.Candidate.employments
             *
             * @description
             *
             * Creates a new instance in employments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R.employments.createMany = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::createMany::Candidate::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.employments#destroyAll
             * @methodOf lbServices.Candidate.employments
             *
             * @description
             *
             * Deletes all employments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
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
             * This method returns no data.
             */
        R.employments.destroyAll = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::delete::Candidate::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.employments#destroyById
             * @methodOf lbServices.Candidate.employments
             *
             * @description
             *
             * Delete a related item by id for employments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for employments
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
             * This method returns no data.
             */
        R.employments.destroyById = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::destroyById::Candidate::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.employments#findById
             * @methodOf lbServices.Candidate.employments
             *
             * @description
             *
             * Find a related item by id for employments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for employments
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R.employments.findById = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::findById::Candidate::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.employments#updateById
             * @methodOf lbServices.Candidate.employments
             *
             * @description
             *
             * Update a related item by id for employments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `fk` – `{*}` - Foreign key for employments
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R.employments.updateById = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::updateById::Candidate::employments"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Candidate.candidateSkillLevels
     * @header lbServices.Candidate.candidateSkillLevels
     * @object
     * @description
     *
     * The object `Candidate.candidateSkillLevels` groups methods
     * manipulating `CandidateSkillLevel` instances related to `Candidate`.
     *
     * Call {@link lbServices.Candidate#candidateSkillLevels Candidate.candidateSkillLevels()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Candidate#candidateSkillLevels
             * @methodOf lbServices.Candidate
             *
             * @description
             *
             * Queries candidateSkillLevels of Candidate.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
        R.candidateSkillLevels = function() {
          var TargetResource = $injector.get("CandidateSkillLevel");
          var action = TargetResource["::get::Candidate::candidateSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.candidateSkillLevels#count
             * @methodOf lbServices.Candidate.candidateSkillLevels
             *
             * @description
             *
             * Counts candidateSkillLevels of Candidate.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
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
             *  - `count` – `{number=}` -
             */
        R.candidateSkillLevels.count = function() {
          var TargetResource = $injector.get("CandidateSkillLevel");
          var action = TargetResource["::count::Candidate::candidateSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.candidateSkillLevels#create
             * @methodOf lbServices.Candidate.candidateSkillLevels
             *
             * @description
             *
             * Creates a new instance in candidateSkillLevels of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
        R.candidateSkillLevels.create = function() {
          var TargetResource = $injector.get("CandidateSkillLevel");
          var action = TargetResource["::create::Candidate::candidateSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.candidateSkillLevels#createMany
             * @methodOf lbServices.Candidate.candidateSkillLevels
             *
             * @description
             *
             * Creates a new instance in candidateSkillLevels of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
        R.candidateSkillLevels.createMany = function() {
          var TargetResource = $injector.get("CandidateSkillLevel");
          var action = TargetResource["::createMany::Candidate::candidateSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.candidateSkillLevels#destroyAll
             * @methodOf lbServices.Candidate.candidateSkillLevels
             *
             * @description
             *
             * Deletes all candidateSkillLevels of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
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
             * This method returns no data.
             */
        R.candidateSkillLevels.destroyAll = function() {
          var TargetResource = $injector.get("CandidateSkillLevel");
          var action = TargetResource["::delete::Candidate::candidateSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.candidateSkillLevels#destroyById
             * @methodOf lbServices.Candidate.candidateSkillLevels
             *
             * @description
             *
             * Delete a related item by id for candidateSkillLevels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for candidateSkillLevels
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
             * This method returns no data.
             */
        R.candidateSkillLevels.destroyById = function() {
          var TargetResource = $injector.get("CandidateSkillLevel");
          var action = TargetResource["::destroyById::Candidate::candidateSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.candidateSkillLevels#findById
             * @methodOf lbServices.Candidate.candidateSkillLevels
             *
             * @description
             *
             * Find a related item by id for candidateSkillLevels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for candidateSkillLevels
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
        R.candidateSkillLevels.findById = function() {
          var TargetResource = $injector.get("CandidateSkillLevel");
          var action = TargetResource["::findById::Candidate::candidateSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Candidate.candidateSkillLevels#updateById
             * @methodOf lbServices.Candidate.candidateSkillLevels
             *
             * @description
             *
             * Update a related item by id for candidateSkillLevels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Candidate id
             *
             *  - `fk` – `{*}` - Foreign key for candidateSkillLevels
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
        R.candidateSkillLevels.updateById = function() {
          var TargetResource = $injector.get("CandidateSkillLevel");
          var action = TargetResource["::updateById::Candidate::candidateSkillLevels"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Education
 * @header lbServices.Education
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Education` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Education",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Education/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Education.candidate() instead.
            "prototype$__get__candidate": {
              url: urlBase + "/Education/:id/candidate",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#create
             * @methodOf lbServices.Education
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
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Education",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#createMany
             * @methodOf lbServices.Education
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
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Education",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#patchOrCreate
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Education",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#replaceOrCreate
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Education/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#upsertWithWhere
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Education/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#exists
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Education/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#findById
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Education/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#replaceById
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Education/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#find
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Education",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#findOne
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Education/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#updateAll
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Education/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#deleteById
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Education/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#count
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
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
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Education/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#prototype$patchAttributes
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Education id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Education/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#createChangeStream
             * @methodOf lbServices.Education
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
              url: urlBase + "/Education/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Candidate.educations.findById() instead.
            "::findById::Candidate::educations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Candidates/:id/educations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Candidate.educations.destroyById() instead.
            "::destroyById::Candidate::educations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Candidates/:id/educations/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Candidate.educations.updateById() instead.
            "::updateById::Candidate::educations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Candidates/:id/educations/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Candidate.educations() instead.
            "::get::Candidate::educations": {
              isArray: true,
              url: urlBase + "/Candidates/:id/educations",
              method: "GET",
            },

            // INTERNAL. Use Candidate.educations.create() instead.
            "::create::Candidate::educations": {
              url: urlBase + "/Candidates/:id/educations",
              method: "POST",
            },

            // INTERNAL. Use Candidate.educations.createMany() instead.
            "::createMany::Candidate::educations": {
              isArray: true,
              url: urlBase + "/Candidates/:id/educations",
              method: "POST",
            },

            // INTERNAL. Use Candidate.educations.destroyAll() instead.
            "::delete::Candidate::educations": {
              url: urlBase + "/Candidates/:id/educations",
              method: "DELETE",
            },

            // INTERNAL. Use Candidate.educations.count() instead.
            "::count::Candidate::educations": {
              url: urlBase + "/Candidates/:id/educations/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Education#upsert
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Education#updateOrCreate
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Education#patchOrCreateWithWhere
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Education#update
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Education#destroyById
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Education#removeById
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Education#prototype$updateAttributes
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Education id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Education#modelName
        * @propertyOf lbServices.Education
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Education`.
        */
        R.modelName = "Education";


            /**
             * @ngdoc method
             * @name lbServices.Education#candidate
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Fetches belongsTo relation candidate.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Education id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
        R.candidate = function() {
          var TargetResource = $injector.get("Candidate");
          var action = TargetResource["::get::Education::candidate"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Employment
 * @header lbServices.Employment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Employment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Employment",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Employments/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Employment.candidate() instead.
            "prototype$__get__candidate": {
              url: urlBase + "/Employments/:id/candidate",
              method: "GET",
            },

            // INTERNAL. Use Employment.employmentSkills.findById() instead.
            "prototype$__findById__employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Employments/:id/employmentSkills/:fk",
              method: "GET",
            },

            // INTERNAL. Use Employment.employmentSkills.destroyById() instead.
            "prototype$__destroyById__employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Employments/:id/employmentSkills/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Employment.employmentSkills.updateById() instead.
            "prototype$__updateById__employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Employments/:id/employmentSkills/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Employment.employmentSkills() instead.
            "prototype$__get__employmentSkills": {
              isArray: true,
              url: urlBase + "/Employments/:id/employmentSkills",
              method: "GET",
            },

            // INTERNAL. Use Employment.employmentSkills.create() instead.
            "prototype$__create__employmentSkills": {
              url: urlBase + "/Employments/:id/employmentSkills",
              method: "POST",
            },

            // INTERNAL. Use Employment.employmentSkills.destroyAll() instead.
            "prototype$__delete__employmentSkills": {
              url: urlBase + "/Employments/:id/employmentSkills",
              method: "DELETE",
            },

            // INTERNAL. Use Employment.employmentSkills.count() instead.
            "prototype$__count__employmentSkills": {
              url: urlBase + "/Employments/:id/employmentSkills/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#create
             * @methodOf lbServices.Employment
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
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Employments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#createMany
             * @methodOf lbServices.Employment
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
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Employments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#patchOrCreate
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Employments",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#replaceOrCreate
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Employments/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#upsertWithWhere
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Employments/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#exists
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Employments/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#findById
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Employments/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#replaceById
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Employments/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#find
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Employments",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#findOne
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Employments/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#updateAll
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Employments/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#deleteById
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Employments/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#count
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
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
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Employments/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#prototype$patchAttributes
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Employment id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Employments/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#createChangeStream
             * @methodOf lbServices.Employment
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
              url: urlBase + "/Employments/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Candidate.employments.findById() instead.
            "::findById::Candidate::employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Candidates/:id/employments/:fk",
              method: "GET",
            },

            // INTERNAL. Use Candidate.employments.destroyById() instead.
            "::destroyById::Candidate::employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Candidates/:id/employments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Candidate.employments.updateById() instead.
            "::updateById::Candidate::employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Candidates/:id/employments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Candidate.employments() instead.
            "::get::Candidate::employments": {
              isArray: true,
              url: urlBase + "/Candidates/:id/employments",
              method: "GET",
            },

            // INTERNAL. Use Candidate.employments.create() instead.
            "::create::Candidate::employments": {
              url: urlBase + "/Candidates/:id/employments",
              method: "POST",
            },

            // INTERNAL. Use Candidate.employments.createMany() instead.
            "::createMany::Candidate::employments": {
              isArray: true,
              url: urlBase + "/Candidates/:id/employments",
              method: "POST",
            },

            // INTERNAL. Use Candidate.employments.destroyAll() instead.
            "::delete::Candidate::employments": {
              url: urlBase + "/Candidates/:id/employments",
              method: "DELETE",
            },

            // INTERNAL. Use Candidate.employments.count() instead.
            "::count::Candidate::employments": {
              url: urlBase + "/Candidates/:id/employments/count",
              method: "GET",
            },

            // INTERNAL. Use EmploymentSkill.employment() instead.
            "::get::EmploymentSkill::employment": {
              url: urlBase + "/EmploymentSkills/:id/employment",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Employment#upsert
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Employment#updateOrCreate
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Employment#patchOrCreateWithWhere
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Employment#update
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Employment#destroyById
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Employment#removeById
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Employment#prototype$updateAttributes
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Employment id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Employment#modelName
        * @propertyOf lbServices.Employment
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Employment`.
        */
        R.modelName = "Employment";


            /**
             * @ngdoc method
             * @name lbServices.Employment#candidate
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Fetches belongsTo relation candidate.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Employment id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
        R.candidate = function() {
          var TargetResource = $injector.get("Candidate");
          var action = TargetResource["::get::Employment::candidate"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Employment.employmentSkills
     * @header lbServices.Employment.employmentSkills
     * @object
     * @description
     *
     * The object `Employment.employmentSkills` groups methods
     * manipulating `EmploymentSkill` instances related to `Employment`.
     *
     * Call {@link lbServices.Employment#employmentSkills Employment.employmentSkills()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Employment#employmentSkills
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Queries employmentSkills of Employment.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Employment id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::get::Employment::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employment.employmentSkills#count
             * @methodOf lbServices.Employment.employmentSkills
             *
             * @description
             *
             * Counts employmentSkills of Employment.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Employment id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
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
             *  - `count` – `{number=}` -
             */
        R.employmentSkills.count = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::count::Employment::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employment.employmentSkills#create
             * @methodOf lbServices.Employment.employmentSkills
             *
             * @description
             *
             * Creates a new instance in employmentSkills of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Employment id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills.create = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::create::Employment::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employment.employmentSkills#createMany
             * @methodOf lbServices.Employment.employmentSkills
             *
             * @description
             *
             * Creates a new instance in employmentSkills of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Employment id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills.createMany = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::createMany::Employment::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employment.employmentSkills#destroyAll
             * @methodOf lbServices.Employment.employmentSkills
             *
             * @description
             *
             * Deletes all employmentSkills of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Employment id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
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
             * This method returns no data.
             */
        R.employmentSkills.destroyAll = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::delete::Employment::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employment.employmentSkills#destroyById
             * @methodOf lbServices.Employment.employmentSkills
             *
             * @description
             *
             * Delete a related item by id for employmentSkills.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Employment id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for employmentSkills
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
             * This method returns no data.
             */
        R.employmentSkills.destroyById = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::destroyById::Employment::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employment.employmentSkills#findById
             * @methodOf lbServices.Employment.employmentSkills
             *
             * @description
             *
             * Find a related item by id for employmentSkills.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Employment id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for employmentSkills
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills.findById = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::findById::Employment::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employment.employmentSkills#updateById
             * @methodOf lbServices.Employment.employmentSkills
             *
             * @description
             *
             * Update a related item by id for employmentSkills.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Employment id
             *
             *  - `fk` – `{*}` - Foreign key for employmentSkills
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills.updateById = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::updateById::Employment::employmentSkills"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Skill
 * @header lbServices.Skill
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Skill` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Skill",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Skills/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Skill.candidateSkillLevels.findById() instead.
            "prototype$__findById__candidateSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Skills/:id/candidateSkillLevels/:fk",
              method: "GET",
            },

            // INTERNAL. Use Skill.candidateSkillLevels.destroyById() instead.
            "prototype$__destroyById__candidateSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Skills/:id/candidateSkillLevels/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.candidateSkillLevels.updateById() instead.
            "prototype$__updateById__candidateSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Skills/:id/candidateSkillLevels/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Skill.employmentSkills.findById() instead.
            "prototype$__findById__employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Skills/:id/employmentSkills/:fk",
              method: "GET",
            },

            // INTERNAL. Use Skill.employmentSkills.destroyById() instead.
            "prototype$__destroyById__employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Skills/:id/employmentSkills/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.employmentSkills.updateById() instead.
            "prototype$__updateById__employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Skills/:id/employmentSkills/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Skill.candidateSkillLevels() instead.
            "prototype$__get__candidateSkillLevels": {
              isArray: true,
              url: urlBase + "/Skills/:id/candidateSkillLevels",
              method: "GET",
            },

            // INTERNAL. Use Skill.candidateSkillLevels.create() instead.
            "prototype$__create__candidateSkillLevels": {
              url: urlBase + "/Skills/:id/candidateSkillLevels",
              method: "POST",
            },

            // INTERNAL. Use Skill.candidateSkillLevels.destroyAll() instead.
            "prototype$__delete__candidateSkillLevels": {
              url: urlBase + "/Skills/:id/candidateSkillLevels",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.candidateSkillLevels.count() instead.
            "prototype$__count__candidateSkillLevels": {
              url: urlBase + "/Skills/:id/candidateSkillLevels/count",
              method: "GET",
            },

            // INTERNAL. Use Skill.employmentSkills() instead.
            "prototype$__get__employmentSkills": {
              isArray: true,
              url: urlBase + "/Skills/:id/employmentSkills",
              method: "GET",
            },

            // INTERNAL. Use Skill.employmentSkills.create() instead.
            "prototype$__create__employmentSkills": {
              url: urlBase + "/Skills/:id/employmentSkills",
              method: "POST",
            },

            // INTERNAL. Use Skill.employmentSkills.destroyAll() instead.
            "prototype$__delete__employmentSkills": {
              url: urlBase + "/Skills/:id/employmentSkills",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.employmentSkills.count() instead.
            "prototype$__count__employmentSkills": {
              url: urlBase + "/Skills/:id/employmentSkills/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#create
             * @methodOf lbServices.Skill
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
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Skills",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#createMany
             * @methodOf lbServices.Skill
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
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Skills",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#patchOrCreate
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Skills",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#replaceOrCreate
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Skills/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#upsertWithWhere
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Skills/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#exists
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Skills/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#findById
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Skills/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#replaceById
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Skills/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#find
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Skills",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#findOne
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Skills/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#updateAll
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Skills/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#deleteById
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Skills/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#count
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
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
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Skills/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#prototype$patchAttributes
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Skills/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#createChangeStream
             * @methodOf lbServices.Skill
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
              url: urlBase + "/Skills/change-stream",
              method: "POST",
            },

            // INTERNAL. Use CandidateSkillLevel.skill() instead.
            "::get::CandidateSkillLevel::skill": {
              url: urlBase + "/CandidateSkillLevels/:id/skill",
              method: "GET",
            },

            // INTERNAL. Use EmploymentSkill.skill() instead.
            "::get::EmploymentSkill::skill": {
              url: urlBase + "/EmploymentSkills/:id/skill",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Skill#upsert
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Skill#updateOrCreate
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Skill#patchOrCreateWithWhere
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Skill#update
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Skill#destroyById
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Skill#removeById
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Skill#prototype$updateAttributes
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Skill#modelName
        * @propertyOf lbServices.Skill
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Skill`.
        */
        R.modelName = "Skill";

    /**
     * @ngdoc object
     * @name lbServices.Skill.candidateSkillLevels
     * @header lbServices.Skill.candidateSkillLevels
     * @object
     * @description
     *
     * The object `Skill.candidateSkillLevels` groups methods
     * manipulating `CandidateSkillLevel` instances related to `Skill`.
     *
     * Call {@link lbServices.Skill#candidateSkillLevels Skill.candidateSkillLevels()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Skill#candidateSkillLevels
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Queries candidateSkillLevels of Skill.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
        R.candidateSkillLevels = function() {
          var TargetResource = $injector.get("CandidateSkillLevel");
          var action = TargetResource["::get::Skill::candidateSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.candidateSkillLevels#count
             * @methodOf lbServices.Skill.candidateSkillLevels
             *
             * @description
             *
             * Counts candidateSkillLevels of Skill.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
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
             *  - `count` – `{number=}` -
             */
        R.candidateSkillLevels.count = function() {
          var TargetResource = $injector.get("CandidateSkillLevel");
          var action = TargetResource["::count::Skill::candidateSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.candidateSkillLevels#create
             * @methodOf lbServices.Skill.candidateSkillLevels
             *
             * @description
             *
             * Creates a new instance in candidateSkillLevels of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Skill id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
        R.candidateSkillLevels.create = function() {
          var TargetResource = $injector.get("CandidateSkillLevel");
          var action = TargetResource["::create::Skill::candidateSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.candidateSkillLevels#createMany
             * @methodOf lbServices.Skill.candidateSkillLevels
             *
             * @description
             *
             * Creates a new instance in candidateSkillLevels of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Skill id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
        R.candidateSkillLevels.createMany = function() {
          var TargetResource = $injector.get("CandidateSkillLevel");
          var action = TargetResource["::createMany::Skill::candidateSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.candidateSkillLevels#destroyAll
             * @methodOf lbServices.Skill.candidateSkillLevels
             *
             * @description
             *
             * Deletes all candidateSkillLevels of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
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
             * This method returns no data.
             */
        R.candidateSkillLevels.destroyAll = function() {
          var TargetResource = $injector.get("CandidateSkillLevel");
          var action = TargetResource["::delete::Skill::candidateSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.candidateSkillLevels#destroyById
             * @methodOf lbServices.Skill.candidateSkillLevels
             *
             * @description
             *
             * Delete a related item by id for candidateSkillLevels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for candidateSkillLevels
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
             * This method returns no data.
             */
        R.candidateSkillLevels.destroyById = function() {
          var TargetResource = $injector.get("CandidateSkillLevel");
          var action = TargetResource["::destroyById::Skill::candidateSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.candidateSkillLevels#findById
             * @methodOf lbServices.Skill.candidateSkillLevels
             *
             * @description
             *
             * Find a related item by id for candidateSkillLevels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for candidateSkillLevels
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
        R.candidateSkillLevels.findById = function() {
          var TargetResource = $injector.get("CandidateSkillLevel");
          var action = TargetResource["::findById::Skill::candidateSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.candidateSkillLevels#updateById
             * @methodOf lbServices.Skill.candidateSkillLevels
             *
             * @description
             *
             * Update a related item by id for candidateSkillLevels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Skill id
             *
             *  - `fk` – `{*}` - Foreign key for candidateSkillLevels
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
        R.candidateSkillLevels.updateById = function() {
          var TargetResource = $injector.get("CandidateSkillLevel");
          var action = TargetResource["::updateById::Skill::candidateSkillLevels"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Skill.employmentSkills
     * @header lbServices.Skill.employmentSkills
     * @object
     * @description
     *
     * The object `Skill.employmentSkills` groups methods
     * manipulating `EmploymentSkill` instances related to `Skill`.
     *
     * Call {@link lbServices.Skill#employmentSkills Skill.employmentSkills()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Skill#employmentSkills
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Queries employmentSkills of Skill.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::get::Skill::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employmentSkills#count
             * @methodOf lbServices.Skill.employmentSkills
             *
             * @description
             *
             * Counts employmentSkills of Skill.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
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
             *  - `count` – `{number=}` -
             */
        R.employmentSkills.count = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::count::Skill::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employmentSkills#create
             * @methodOf lbServices.Skill.employmentSkills
             *
             * @description
             *
             * Creates a new instance in employmentSkills of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Skill id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills.create = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::create::Skill::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employmentSkills#createMany
             * @methodOf lbServices.Skill.employmentSkills
             *
             * @description
             *
             * Creates a new instance in employmentSkills of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Skill id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills.createMany = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::createMany::Skill::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employmentSkills#destroyAll
             * @methodOf lbServices.Skill.employmentSkills
             *
             * @description
             *
             * Deletes all employmentSkills of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
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
             * This method returns no data.
             */
        R.employmentSkills.destroyAll = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::delete::Skill::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employmentSkills#destroyById
             * @methodOf lbServices.Skill.employmentSkills
             *
             * @description
             *
             * Delete a related item by id for employmentSkills.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for employmentSkills
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
             * This method returns no data.
             */
        R.employmentSkills.destroyById = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::destroyById::Skill::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employmentSkills#findById
             * @methodOf lbServices.Skill.employmentSkills
             *
             * @description
             *
             * Find a related item by id for employmentSkills.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for employmentSkills
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills.findById = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::findById::Skill::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employmentSkills#updateById
             * @methodOf lbServices.Skill.employmentSkills
             *
             * @description
             *
             * Update a related item by id for employmentSkills.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Skill id
             *
             *  - `fk` – `{*}` - Foreign key for employmentSkills
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills.updateById = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::updateById::Skill::employmentSkills"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.CandidateSkillLevel
 * @header lbServices.CandidateSkillLevel
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CandidateSkillLevel` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "CandidateSkillLevel",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/CandidateSkillLevels/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use CandidateSkillLevel.candidate() instead.
            "prototype$__get__candidate": {
              url: urlBase + "/CandidateSkillLevels/:id/candidate",
              method: "GET",
            },

            // INTERNAL. Use CandidateSkillLevel.skill() instead.
            "prototype$__get__skill": {
              url: urlBase + "/CandidateSkillLevels/:id/skill",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#create
             * @methodOf lbServices.CandidateSkillLevel
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
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/CandidateSkillLevels",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#createMany
             * @methodOf lbServices.CandidateSkillLevel
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
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/CandidateSkillLevels",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#patchOrCreate
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/CandidateSkillLevels",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#replaceOrCreate
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/CandidateSkillLevels/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#upsertWithWhere
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/CandidateSkillLevels/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#exists
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/CandidateSkillLevels/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#findById
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/CandidateSkillLevels/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#replaceById
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/CandidateSkillLevels/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#find
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/CandidateSkillLevels",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#findOne
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/CandidateSkillLevels/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#updateAll
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/CandidateSkillLevels/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#deleteById
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/CandidateSkillLevels/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#count
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
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
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/CandidateSkillLevels/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#prototype$patchAttributes
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CandidateSkillLevel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/CandidateSkillLevels/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#createChangeStream
             * @methodOf lbServices.CandidateSkillLevel
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
              url: urlBase + "/CandidateSkillLevels/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Candidate.candidateSkillLevels.findById() instead.
            "::findById::Candidate::candidateSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Candidates/:id/candidateSkillLevels/:fk",
              method: "GET",
            },

            // INTERNAL. Use Candidate.candidateSkillLevels.destroyById() instead.
            "::destroyById::Candidate::candidateSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Candidates/:id/candidateSkillLevels/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Candidate.candidateSkillLevels.updateById() instead.
            "::updateById::Candidate::candidateSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Candidates/:id/candidateSkillLevels/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Candidate.candidateSkillLevels() instead.
            "::get::Candidate::candidateSkillLevels": {
              isArray: true,
              url: urlBase + "/Candidates/:id/candidateSkillLevels",
              method: "GET",
            },

            // INTERNAL. Use Candidate.candidateSkillLevels.create() instead.
            "::create::Candidate::candidateSkillLevels": {
              url: urlBase + "/Candidates/:id/candidateSkillLevels",
              method: "POST",
            },

            // INTERNAL. Use Candidate.candidateSkillLevels.createMany() instead.
            "::createMany::Candidate::candidateSkillLevels": {
              isArray: true,
              url: urlBase + "/Candidates/:id/candidateSkillLevels",
              method: "POST",
            },

            // INTERNAL. Use Candidate.candidateSkillLevels.destroyAll() instead.
            "::delete::Candidate::candidateSkillLevels": {
              url: urlBase + "/Candidates/:id/candidateSkillLevels",
              method: "DELETE",
            },

            // INTERNAL. Use Candidate.candidateSkillLevels.count() instead.
            "::count::Candidate::candidateSkillLevels": {
              url: urlBase + "/Candidates/:id/candidateSkillLevels/count",
              method: "GET",
            },

            // INTERNAL. Use Skill.candidateSkillLevels.findById() instead.
            "::findById::Skill::candidateSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Skills/:id/candidateSkillLevels/:fk",
              method: "GET",
            },

            // INTERNAL. Use Skill.candidateSkillLevels.destroyById() instead.
            "::destroyById::Skill::candidateSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Skills/:id/candidateSkillLevels/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.candidateSkillLevels.updateById() instead.
            "::updateById::Skill::candidateSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Skills/:id/candidateSkillLevels/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Skill.candidateSkillLevels() instead.
            "::get::Skill::candidateSkillLevels": {
              isArray: true,
              url: urlBase + "/Skills/:id/candidateSkillLevels",
              method: "GET",
            },

            // INTERNAL. Use Skill.candidateSkillLevels.create() instead.
            "::create::Skill::candidateSkillLevels": {
              url: urlBase + "/Skills/:id/candidateSkillLevels",
              method: "POST",
            },

            // INTERNAL. Use Skill.candidateSkillLevels.createMany() instead.
            "::createMany::Skill::candidateSkillLevels": {
              isArray: true,
              url: urlBase + "/Skills/:id/candidateSkillLevels",
              method: "POST",
            },

            // INTERNAL. Use Skill.candidateSkillLevels.destroyAll() instead.
            "::delete::Skill::candidateSkillLevels": {
              url: urlBase + "/Skills/:id/candidateSkillLevels",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.candidateSkillLevels.count() instead.
            "::count::Skill::candidateSkillLevels": {
              url: urlBase + "/Skills/:id/candidateSkillLevels/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#upsert
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#updateOrCreate
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#patchOrCreateWithWhere
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#update
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#destroyById
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#removeById
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#prototype$updateAttributes
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CandidateSkillLevel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CandidateSkillLevel` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.CandidateSkillLevel#modelName
        * @propertyOf lbServices.CandidateSkillLevel
        * @description
        * The name of the model represented by this $resource,
        * i.e. `CandidateSkillLevel`.
        */
        R.modelName = "CandidateSkillLevel";


            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#candidate
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Fetches belongsTo relation candidate.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CandidateSkillLevel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Candidate` object.)
             * </em>
             */
        R.candidate = function() {
          var TargetResource = $injector.get("Candidate");
          var action = TargetResource["::get::CandidateSkillLevel::candidate"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CandidateSkillLevel#skill
             * @methodOf lbServices.CandidateSkillLevel
             *
             * @description
             *
             * Fetches belongsTo relation skill.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CandidateSkillLevel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
        R.skill = function() {
          var TargetResource = $injector.get("Skill");
          var action = TargetResource["::get::CandidateSkillLevel::skill"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.EmploymentSkill
 * @header lbServices.EmploymentSkill
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `EmploymentSkill` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "EmploymentSkill",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/EmploymentSkills/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use EmploymentSkill.employment() instead.
            "prototype$__get__employment": {
              url: urlBase + "/EmploymentSkills/:id/employment",
              method: "GET",
            },

            // INTERNAL. Use EmploymentSkill.skill() instead.
            "prototype$__get__skill": {
              url: urlBase + "/EmploymentSkills/:id/skill",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#create
             * @methodOf lbServices.EmploymentSkill
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
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/EmploymentSkills",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#createMany
             * @methodOf lbServices.EmploymentSkill
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
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/EmploymentSkills",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#patchOrCreate
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/EmploymentSkills",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#replaceOrCreate
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/EmploymentSkills/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#upsertWithWhere
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/EmploymentSkills/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#exists
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/EmploymentSkills/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#findById
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/EmploymentSkills/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#replaceById
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/EmploymentSkills/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#find
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
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
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/EmploymentSkills",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#findOne
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/EmploymentSkills/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#updateAll
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/EmploymentSkills/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#deleteById
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/EmploymentSkills/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#count
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
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
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/EmploymentSkills/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#prototype$patchAttributes
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - EmploymentSkill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/EmploymentSkills/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#createChangeStream
             * @methodOf lbServices.EmploymentSkill
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
              url: urlBase + "/EmploymentSkills/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Employment.employmentSkills.findById() instead.
            "::findById::Employment::employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Employments/:id/employmentSkills/:fk",
              method: "GET",
            },

            // INTERNAL. Use Employment.employmentSkills.destroyById() instead.
            "::destroyById::Employment::employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Employments/:id/employmentSkills/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Employment.employmentSkills.updateById() instead.
            "::updateById::Employment::employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Employments/:id/employmentSkills/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Employment.employmentSkills() instead.
            "::get::Employment::employmentSkills": {
              isArray: true,
              url: urlBase + "/Employments/:id/employmentSkills",
              method: "GET",
            },

            // INTERNAL. Use Employment.employmentSkills.create() instead.
            "::create::Employment::employmentSkills": {
              url: urlBase + "/Employments/:id/employmentSkills",
              method: "POST",
            },

            // INTERNAL. Use Employment.employmentSkills.createMany() instead.
            "::createMany::Employment::employmentSkills": {
              isArray: true,
              url: urlBase + "/Employments/:id/employmentSkills",
              method: "POST",
            },

            // INTERNAL. Use Employment.employmentSkills.destroyAll() instead.
            "::delete::Employment::employmentSkills": {
              url: urlBase + "/Employments/:id/employmentSkills",
              method: "DELETE",
            },

            // INTERNAL. Use Employment.employmentSkills.count() instead.
            "::count::Employment::employmentSkills": {
              url: urlBase + "/Employments/:id/employmentSkills/count",
              method: "GET",
            },

            // INTERNAL. Use Skill.employmentSkills.findById() instead.
            "::findById::Skill::employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Skills/:id/employmentSkills/:fk",
              method: "GET",
            },

            // INTERNAL. Use Skill.employmentSkills.destroyById() instead.
            "::destroyById::Skill::employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Skills/:id/employmentSkills/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.employmentSkills.updateById() instead.
            "::updateById::Skill::employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Skills/:id/employmentSkills/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Skill.employmentSkills() instead.
            "::get::Skill::employmentSkills": {
              isArray: true,
              url: urlBase + "/Skills/:id/employmentSkills",
              method: "GET",
            },

            // INTERNAL. Use Skill.employmentSkills.create() instead.
            "::create::Skill::employmentSkills": {
              url: urlBase + "/Skills/:id/employmentSkills",
              method: "POST",
            },

            // INTERNAL. Use Skill.employmentSkills.createMany() instead.
            "::createMany::Skill::employmentSkills": {
              isArray: true,
              url: urlBase + "/Skills/:id/employmentSkills",
              method: "POST",
            },

            // INTERNAL. Use Skill.employmentSkills.destroyAll() instead.
            "::delete::Skill::employmentSkills": {
              url: urlBase + "/Skills/:id/employmentSkills",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.employmentSkills.count() instead.
            "::count::Skill::employmentSkills": {
              url: urlBase + "/Skills/:id/employmentSkills/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#upsert
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#updateOrCreate
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#patchOrCreateWithWhere
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#update
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#destroyById
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#removeById
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#prototype$updateAttributes
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - EmploymentSkill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.EmploymentSkill#modelName
        * @propertyOf lbServices.EmploymentSkill
        * @description
        * The name of the model represented by this $resource,
        * i.e. `EmploymentSkill`.
        */
        R.modelName = "EmploymentSkill";


            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#employment
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Fetches belongsTo relation employment.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - EmploymentSkill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R.employment = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::get::EmploymentSkill::employment"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#skill
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Fetches belongsTo relation skill.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - EmploymentSkill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
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
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
        R.skill = function() {
          var TargetResource = $injector.get("Skill");
          var action = TargetResource["::get::EmploymentSkill::skill"];
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
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

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
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
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
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
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
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
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
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
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
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
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

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
