var Browser = require('zombie') 
var assert = require('assert')
var app = require('../helloworld')

describe('main page', function() { 
  it('should say hello world')
})

describe('main page', function() {
before(function() {
   this.browser = new Browser({ site: 'http://54.163.148.5:7777' })
})

it('should say hello world')
})

describe('main page', function() { 
  before(function() { 
    this.browser = new Browser({ site: 'http://54.163.148.5:7777' }) 
  })
 
  before(function(done) {
    this.browser.visit('/', done)
  })
 
  it('should say hello world') 
})

describe('main page', function() { 
  before(function() {
    this.browser = new Browser({ site: 'http://54.163.148.5:7777' })
  })
  before(function(done) {
    this.browser.visit('/', done)
  })
  it('should say hello world', function() { 
    assert.ok(this.browser.success)
    assert.equal(this.browser.text(), "Hello World")
  })
}) 
