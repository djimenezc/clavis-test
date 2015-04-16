`import Ember from 'ember'`

AncientsRoute = Ember.Route.extend
  queryParams:
    search:
      refreshModel: true

  setupController: (controller, model) ->
    #if controller.get('search')? and controller.get('search').length > 0 and !controller.get('searchInput')?
    controller.set('searchInput', controller.get('search'))

    controller.set('model', model)

  model: (params) ->
    if params.search? and params.search.length > 0
      @store.find('ancient', {search: params.search})
    else
      @store.findAll('ancient')

`export default AncientsRoute`
