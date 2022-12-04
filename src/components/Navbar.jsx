import React from 'react';

const Navbar = ({totalLength}) => {
    return (
        <nav>
          <h2>{totalLength}</h2>
        </nav>
    );
}

export default Navbar;