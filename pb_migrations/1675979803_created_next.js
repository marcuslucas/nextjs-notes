migrate((db) => {
  const collection = new Collection({
    "id": "h0xfetbjo66kwbh",
    "created": "2023-02-09 21:56:43.501Z",
    "updated": "2023-02-09 21:56:43.501Z",
    "name": "next",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pssb8x0o",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "w1bil85e",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("h0xfetbjo66kwbh");

  return dao.deleteCollection(collection);
})
