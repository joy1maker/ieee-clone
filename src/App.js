
import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import Header from './components/header/header.component';
import NavBar from './components/navgation/navgation.component';
import SpreatorSection from './components/spreate-section/spreate-section.component';
import { events } from './data/event-data';
import Event from "./components/event/event.component"
function App() {



  return (
    <div className="App">
      <NavBar />
      <Header />
      <SpreatorSection
        spreate={false}
        title={"Meet our Board."}
        desc={"Hover On The Picture To See The Name And The Position"}
        line={true}
      />
      <CardList />
      <SpreatorSection
        spreate={true}
        title={"Our Awaited Event..."}
        desc={"The Next Event That is Created by IEEE"}
        line={true}
      />
      {
        events.map((eventData, idx) => (
          <React.Fragment key={idx}>
            <Event event={eventData} ltr={true} />
            <SpreatorSection spreate={true} />
          </React.Fragment>
        ))
      }

    </div>
  );
}

export default App;
