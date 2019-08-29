import React from 'react';
import './PictureSelect.css'

function PictureSelect(props) {

  let {pictures, value, onChange} = props

  function handleClick (e) {
    const _id = e.target.id
    const idx = value.indexOf(_id)
    if (idx < 0) {
      onChange([...value, _id])
    } else {
      const val = [...value].filter(it => it !== _id)
      onChange(val)
    }
  }

  return (
    <div className="pictures">
      {pictures.map(it => {
        return (
          <div className="container" key={it.id}>
            <input className="cb" type="checkbox" name={it.name} id={it.id} 
              checked={value.indexOf(it.id) < 0 ? false : true} 
              onChange={(e) => handleClick(e)} />
            <label for={it.id}>
              <img style={{width: '100%'}} src={it.url} alt={it.url} />
              <p className="info">{it.id}.jpg</p>
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default PictureSelect