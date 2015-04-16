`import DS from 'ember-data'`

Ancient = DS.Model.extend
  name: DS.attr()
  superpower: DS.attr()
  end_of_an_era: DS.attr()

  uppercaseName: Ember.computed ->
    @get('name').toUpperCase()
  .property('name')

  formattedEndOfEra: Ember.computed ->
    moment(@get('end_of_an_era')).format("dddd, MMMM Do YYYY, h:mm:ss a")
  .property('end_of_an_era')

`export default Ancient`
