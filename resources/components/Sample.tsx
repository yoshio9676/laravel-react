import React from 'react'
import '../scss/sample.scss';

const Sample = () => {
    const title: string = 'Sample Page Title'
    const obj: {
        name: string,
        age: number
    } = {
        name: '宮本 吉甫',
        age: 27
    }
  return (
    <div className='sample'>
        <h1 className="sample-title">{title}</h1>
        <p>Name: {obj.name}</p>
        <p>Age: {obj.age}</p>
        <p><a href="/">laravel routing test</a></p>
    </div>
  )
}

export default Sample