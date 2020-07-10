import React from 'react';

function ModeSelector(props) {
  const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

  const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px 0' }}>
      <button onClick={() => props.onSelect(smallUrl)} className="btn btn-success">
        Small-size data
      </button>
      <button onClick={() => props.onSelect(bigUrl)} className="btn btn-danger">
        Big-size data
      </button>
    </div>
  );
}

export default ModeSelector;
