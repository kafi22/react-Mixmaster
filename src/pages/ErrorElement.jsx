import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {

  const error =  useRouteError()

  return (
    <div>
        {error.status && <h3>Something went wrong</h3>}
    </div>
  )
}

export default ErrorElement