'use strict'

const test = require('ava')

const config = {
  logging: function () {}
}
let db = null
test.beforeEach(async () => {
  const setupDatabase = require('../')
  db = await setupDatabase(config)
})

test('Agent', t => {
  // Con truthy verificamos que exista un valor
  t.truthy(db.Agent, 'Agent service should exist')
})
