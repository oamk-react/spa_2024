import React from 'react'

export default function Logout({setUser}) {
  setUser(null)
  return (
    <p>You have logged out.</p>
  )
}
