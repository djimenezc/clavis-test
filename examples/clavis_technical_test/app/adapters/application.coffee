`import DS from 'ember-data'`

ApplicationAdapter = DS.RESTAdapter.extend
  host: 'https://athena-7.herokuapp.com'

  buildURL: (record, suffix) ->
    s = this._super(record, suffix)
    s + ".json"


`export default ApplicationAdapter`
