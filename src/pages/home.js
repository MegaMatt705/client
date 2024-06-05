import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  return (
    <>
    <div>
      <Navbar />
      <div className="home">
          <Post />
        </div>

      <Footerbar />

      </div>

    </>
  );
}

export default Home;
