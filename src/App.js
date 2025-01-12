// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import BrowserRouter
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './Header';
// import Footer from './Footer';
// import Login from './Login';
// import SellerList from './SellerList';  // Import SellerList component
// import './App.css';

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   return (
//     <Router>  {/* Wrap everything in BrowserRouter */}
//       <div className="App">
//         <Header />
//         <div className="content container mt-4">
//           <Routes>
//             <Route path="/" element={!loggedIn ? <Login onLogin={() => setLoggedIn(true)} /> : <SellerList />} />
//             <Route path="/sellers" element={<SellerList />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import BrowserRouter
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import SellerList from './SellerList';  // Import SellerList component
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>  {/* Wrap everything in BrowserRouter */}
      <div className="App">
        <Header />
        <div className="content container mt-4">
          <Routes>
            <Route path="/" element={!loggedIn ? <Login onLogin={() => setLoggedIn(true)} /> : <SellerList />} />
            <Route path="/sellers" element={<SellerList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
