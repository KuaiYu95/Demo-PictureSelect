import React from 'react';
import PictureSelect from './PictureSelect'
import './App.css';

function App() {
  
  const [value, setValue] = React.useState(['1']);
  const pictures = [
    {
      id: '1',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '2',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '3',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
  ];

  function hangleChange() {
    if (value.length === pictures.length) {
      setValue([])
    } else {
      const data = []
      pictures.map(it => data.push(it.id))
      setValue(data)
    }
  }
  
  return (
    <div className="contain">
      <div className="total">
        <input type="checkbox" id="cb" onChange={() => hangleChange()} 
          checked={value.length === pictures.length ? true : false} />
        <label for="cb"><span>已选中{value.length}个图片</span></label>
      </div>
      <PictureSelect pictures={pictures} value={value} onChange={(value) => setValue(value)} />
    </div>
  )
}

export default App;
