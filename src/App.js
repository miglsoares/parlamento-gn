import React, { useState } from 'react'
import { Scrollama, Step } from 'react-scrollama'

import descriptionTexts from './descriptionTexts'

const App = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [data, setData] = useState({ data: 0 })

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const onStepExit = ({ direction, data }) => {
    {descriptionTexts.map((text) => {
      if (direction === 'up' && data === text.step[0]) {
        setData({ data: 0 });
      }
    })}
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Scrollama
            onStepEnter={onStepEnter}
            onStepExit={onStepExit}
            offset={0.4}
            debug
          >
            {descriptionTexts.map((item) => (
              <Step data={item.step} key={item.step}>
                <div className="description">
                  <span className="descriptionNumber" style={{color: item.textColorNumber}}>{item.descriptionNumber}</span>
                  <p className="descriptionText">{item.defaultText}
                  <br/>
                  <span style={{color: item.textColorSpan}}>{item.colorText}</span></p>
                  <br />
                  <p className="paragraph">
                    {item.paragraph}
                  </p>
                </div>
              </Step>
            ))}
          </Scrollama>
        </div>
        {descriptionTexts.map((content) => (
          <>
            {currentStepIndex === content.step && (
              <div style={{
                flexBasis: '60%',
                position: 'sticky',
                width: '100%',
                height: '60vh',
                top: '20vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {content.graph}
              </div>
            )}
          </>
          ))}
      </div>
    </div>
  )
}

export default App