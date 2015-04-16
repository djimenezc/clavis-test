`import Ember from 'ember'`

AncientsController = Ember.ArrayController.extend
  queryParams:
    search:
      refreshModel: true

  actions:
    submitSearch: ->
      if @get('searchInput')
        @transitionToRoute('ancients', {queryParams: {search: @get('searchInput')}})


`export default AncientsController`
