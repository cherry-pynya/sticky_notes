import React, { useState } from "react";

export default function AddButton() {
  let [state, setState] = useState(false)
  return (
    <React.Fragment>
      <div className="btn_container">
        <button className="add_btn" onClick={()=> setState(true)}>
            <p className='plus_text'>+</p>
        </button>
      </div>
      {state && <div className='modal'>
          <div className='modal_body'>
              <h2>Заголовок</h2>
              <input style={{width: '100%'}} maxLength="30" />
              <h2>Текст</h2>
              <textarea className='modal_text' maxLength="400" />
              <div className='modal_btn_container'>
                  <button className='modal_btn'onClick={()=> setState(false)}>Опубликовать</button>
                  <button className='modal_btn' onClick={()=> setState(false)}>Отменить</button>
              </div>
          </div>
          </div>}
    </React.Fragment>
  );
}
