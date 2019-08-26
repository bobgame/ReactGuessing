import React from 'react'

const ResultBoxUi = (props) => {
  return (
    <div className="number-result-box mbh-3">
      {
        props.list.map((item, index) => {
          if (item.numbers !== '') {
            return <div className="result-item" key={'number-result' + index}>{item.numbers}: {item.result}</div>
          } else {
            return <div className="empty-item" key={'number-result' + index}></div>
          }
        })
      }
    </div>
  )
}

export default ResultBoxUi
