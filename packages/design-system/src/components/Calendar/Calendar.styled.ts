import styled from 'styled-components'

export namespace CSS {
  const listStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    margin: '0 auto',
    padding: 0,
    width: '100%'
  }

  export const Calendar = styled.div`
    header {
      display: flex;
      align-items: center;
      font-size: calc(16px + (26 - 16) * ((100vw - 300px) / (1600 - 300)));
      justify-content: space-between;
      padding-left: 20px;
      padding-right: 20px;
      margin-bottom: 2em;
      color: #111;
      min-height: 10vh;
      text-align: center;
    }

    ol {
      ${listStyle}
    }

    ul {
      ${listStyle}
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      margin-left: 0;
      font-size: calc(16px + (21 - 16) * ((100vw - 300px) / (1600 - 300)));
    }

    ul.weekdays {
      margin-bottom: 1em;
      border: none;
      font-weight: 800;
      text-decoration: none;
    }

    ol.dayGrid li {
      background-color: #fff;
      border-bottom: 1px solid #eaeaea;
      width: 100%;
      height: 200px;
      position: relative;

      .dayNumber {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 14px;
      }

      .event,
      .nextEvent {
        color: white;
        width: 100%;
        height: 35px;
        line-height: 35px;
        text-align: left;
        font-size: 14px;
        margin-top: -100px;
        padding: 5px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: flex;
      }

      .event {
        background: #ff960f;
      }

      .start {
        margin-left: 4px;
      }

      .start b {
        align-items: center;
        line-height: 45px;
        background: #003a66;
        display: inline-block;
        width: 30px;
        height: 60px;
        margin-top: -5px;
        margin-left: -5px;
        text-indent: 5px;
        margin-right: 5px;
        padding-right: 8px;
      }

      .past {
        background: #4fca0c;
      }

      .same:not(:first-child) {
        color: transparent;
      }

      .nextEvent {
        background: #002f52;
      }
    }

    ol.dayGrid li.today {
      background: #ffebbd;
    }

    ol.dayGrid li.previousMonth .dayNumber {
      color: #999;
    }

    ol.dayGrid li.nextMonth .dayNumber {
      color: #999;
    }

    ol.dayGrid li.previousMonth,
    ol.dayGrid li.nextMonth .event {
      opacity: 0.5;
    }
  `
}
