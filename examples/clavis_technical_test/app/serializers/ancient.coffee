`import DS from 'ember-data'`

#this serializer is used to transform the api into a format that is understood by the ember rest adapter
AncientSerializer = DS.RESTSerializer.extend
  extract: (store, primaryType, payload, id, requestType) ->
    if !payload.ancients?
      #if the payload has a length property, then we know it's an array
      if payload.length
        i = 0
        while i < payload.length
          record = payload[i]
          @mapRecord record
          i++
      else
        # payload is a single object instead of an array
        @mapRecord payload

      payloadWithRoot = {}
      payloadWithRoot['ancients'] = payload
    else
      #if the payload has a length property, then we know it's an array
      if payload.ancients.length
        i = 0
        while i < payload.ancients.length
          record = payload.ancients[i]
          @mapRecord record
          i++
      else
        # payload is a single object instead of an array
        @mapRecord payload.ancients

      payloadWithRoot = payload

    @_super store, primaryType, payloadWithRoot, id, requestType

  mapRecord: (recordJSON) ->
    recordJSON.id = recordJSON.name

`export default AncientSerializer`
