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
    descriptionTexts.map((text) => {
      if (direction === 'up' && data === text.step[0]) {
        setData({ data: 0 });
      }
    })
  };

  return (
    <div>
      <div className="descriptions">
        <div>
          <Scrollama
            onStepEnter={onStepEnter}
            onStepExit={onStepExit}
            offset={0.4}
          >
            {descriptionTexts.map((item) => (
              <Step data={item.step} key={item.step}>
                <div className="description">
                  {item.paragraphTop &&
                    <p className="paragraphTop">
                      {item.paragraphTop}
                    </p>
                  }
                  {item.descriptionNumber &&
                    <span className="descriptionNumber" style={{color: item.textColorNumber}}>{item.descriptionNumber}</span>
                  }
                  <p className="descriptionText">
                    {item.defaultText}
                    <br/>
                    <span style={{color: item.textColorSpan}}>{item.colorText}</span>
                  </p>
                  <br />
                  {item.paragraph &&
                    <p className="paragraph">
                      {item.paragraph}
                    </p>
                  }
                  {item.paragraphSecond &&
                    <p className="paragraph">
                      {item.paragraphSecond}
                    </p>
                  }
                  {item.paragraphThird &&
                    <p className="paragraph">
                      {item.paragraphThird}
                    </p>
                  }
                  {item.paragraphFourth &&
                    <p className="paragraph">
                      {item.paragraphFourth}
                    </p>
                  }
                  {item.textSecondary &&
                    <p className="descriptionText">
                      {item.textSecondary}
                    </p>
                  }
                  {item.rowImagesNumber === 1 && (
                    <div className="imageBoxWrapper">
                      {item.imageFPE && (
                        <div className="imageBox">
                          <br />
                          <img src={`images/${item.imageFPE}`} alt={item.imageFPEDescription} />
                          <span>{item.imageFPEDescription}</span>
                        </div>
                      )}
                    {item.imageFPC && (
                      <div className="imageBox">
                        <br />
                        <img src={`images/${item.imageFPC}`} alt={item.imageFPCDescription} />
                        <span>{item.imageFPCDescription}</span>
                      </div>
                      )}
                    {item.imageFPMA && (
                      <div className="imageBox">
                        <br />
                        <img src={`images/${item.imageFPMA}`} alt={item.imageFPMADescription} />
                        <span>{item.imageFPMADescription}</span>
                      </div>
                      )}
                    </div>
                  )}
                     {item.rowImagesNumber === 2 && (
                    <>
                      <div className="imageBoxWrapper">
                        {item.imageFPE && (
                          <div className="imageBox">
                            <br />
                            <img src={`images/${item.imageFPE}`} alt={item.imageFPEDescription} />
                          </div>
                        )}
                        <span className="iconDescriptionNumber">Frente Parlamentar Evangélica (FPE)</span>
                      </div>
                      <div className="imageBoxWrapper">
                      {item.imageFPC && (
                        <div className="imageBox">
                          <br />
                          <img src={`images/${item.imageFPC}`} alt={item.imageFPCDescription} />
                        </div>
                        )}
                        <span className="iconDescriptionNumber">Frente Parlamentar Católica (FPC)</span>
                      </div>
                      <div className="imageBoxWrapper">
                        {item.imageFPMA && (
                          <div className="imageBox">
                            <br />
                            <img src={`images/${item.imageFPMA}`} alt={item.imageFPMADescription} />
                          </div>
                        )}
                        <span className="iconDescriptionNumber">Frente Parlamentar de Povos Tradicionais de Matriz Africana (FPTMA)</span>
                      </div>
                    </>
                  )}
                  {item.rowImagesNumber === 3 && (
                    <>
                      <div className="imageBoxWrapper">
                        {item.imageFPE && (
                          <div className="imageBox">
                            <br />
                            <img src={`images/${item.imageFPE}`} alt={item.imageFPEDescription} />
                            <span>{item.imageFPEDescription}</span>
                          </div>
                        )}
                      {item.imageFPC && (
                        <div className="imageBox">
                          <br />
                          <img src={`images/${item.imageFPC}`} alt={item.imageFPCDescription} />
                          <span>{item.imageFPCDescription}</span>
                        </div>
                        )}
                        <span className="iconDescriptionNumber">31</span>
                      </div>
                      <div className="imageBoxWrapper">
                      {item.imageFPC && (
                        <div className="imageBox">
                          <br />
                          <img src={`images/${item.imageFPC}`} alt={item.imageFPCDescription} />
                          <span>{item.imageFPCDescription}</span>
                        </div>
                        )}
                        {item.imageFPMA && (
                          <div className="imageBox">
                            <br />
                            <img src={`images/${item.imageFPMA}`} alt={item.imageFPMADescription} />
                            <span>{item.imageFPMADescription}</span>
                          </div>
                        )}
                        <span className="iconDescriptionNumber">45</span>
                      </div>
                      <div className="imageBoxWrapper">
                        {item.imageFPE && (
                          <div className="imageBox">
                            <br />
                            <img src={`images/${item.imageFPE}`} alt={item.imageFPEDescription} />
                            <span>{item.imageFPEDescription}</span>
                          </div>
                        )}
                        {item.imageFPMA && (
                          <div className="imageBox">
                            <br />
                            <img src={`images/${item.imageFPMA}`} alt={item.imageFPMADescription} />
                            <span>{item.imageFPMADescription}</span>
                          </div>
                        )}
                        <span className="iconDescriptionNumber">56</span>
                      </div>
                    </>
                  )}
                </div>
              </Step>
            ))}
          </Scrollama>
        </div>
        {descriptionTexts.map((content) => (
          <>
            {currentStepIndex === content.step && (
              <div className="graphsContainer">
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