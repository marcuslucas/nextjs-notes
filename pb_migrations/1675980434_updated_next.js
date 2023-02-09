migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0xfetbjo66kwbh")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0xfetbjo66kwbh")

  collection.name = "next"

  return dao.saveCollection(collection)
})
