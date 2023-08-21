import React from 'react';

function New() {
    return (
      <div>
          <h1>New Pokemon Page</h1>
  
          <form action="/pokemon" method='POST'>
              Name:<input type="text" name='name'/> <br />
              url: <input type="url" name='url'/> <br />
              <input type="submit" value="create Pokemon" />
          </form>
      </div>
    )
  }
  
  module.exports = New