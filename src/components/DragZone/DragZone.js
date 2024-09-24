import React, { useEffect, useRef, useState } from 'react';
import trioLogo from "../../images/triAtom.png";
import shirt1 from "../../images/clothes/shirt1.png";
import hat1 from "../../images/clothes/hat1.png";
import hat2 from "../../images/clothes/hat2.png";

import shirt4 from "../../images/clothes/shirt4.png";
import shirt5 from "../../images/clothes/shirt5.png";
import shirt6 from "../../images/clothes/shirt6.png";
import shirt3 from "../../images/clothes/shirt3.png";
import pant1 from "../../images/clothes/pant1.png";
import pant5 from "../../images/clothes/pant5.png";
import pant4 from "../../images/clothes/pant4.png";
import pant6 from "../../images/clothes/pant6.png";
import pant7 from "../../images/clothes/pant7.png";

import vest2 from "../../images/clothes/vest2.png";
import pant3 from "../../images/clothes/pant3.png";
import jacket1 from "../../images/clothes/jacket1.png";
import jacket2 from "../../images/clothes/jacket2.png";

import "./DragZone.css";

const DragZone = () => {
  const containerRef = useRef(null);
  const dragItemsRef = useRef([]);
  const [itemStateAndPosition, setItemStateAndPosition] = useState({});

    
    let count = 190;
    const alignItemPosition = (item) => {
    count = count + 50;
    const container = containerRef.current;
    const containerBoundsRect = container.getBoundingClientRect();
    const maxY = containerBoundsRect.height - item.offsetHeight - count;

    item.style.top = `${maxY}px`;
  };

  function randomizeDragItemPosition(items) {
    const container = document.getElementById("container");
    const containerBoundsRect = container.getBoundingClientRect();
  
    const maxX = containerBoundsRect.width - items.offsetWidth;
    const maxY = containerBoundsRect.height - items.offsetHeight;
  
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    items.style.left = `${randomX}px`;
    items.style.top = `${randomY}px`;
  }
  const populateBoxesWithDelay = (items) => {
    items.forEach((item, index) => {
      setTimeout(() => {
        randomizeDragItemPosition(item);
      }, index * 100); //staggered load
    });
  };

  const handleAddMetaData = (e) => {
    e.preventDefault();
   // window.open('https://');
  };

  const startDrag = (moveClientX, moveClientY, index, item) => {
    setItemStateAndPosition((prevState) => ({
      ...prevState,
      [index]: {
        isDragging: true,
        offsetX: moveClientX - item.offsetLeft + 11,
        offsetY: moveClientY - item.offsetTop + 47,
      },
    }));
  };

  const isStateDragging = (moveClientX, moveClientY) => {
    setItemStateAndPosition((prevState) => {
      const newState = { ...prevState };
      Object.keys(newState).forEach((key) => {
        const state = newState[key];
        if (state.isDragging) {
          const item = dragItemsRef.current[key];
          const x = moveClientX - state.offsetX;
          const y = moveClientY - state.offsetY;

          const maxX = containerRef.current.offsetWidth - item.offsetWidth;
          const maxY = containerRef.current.offsetHeight - item.offsetHeight;

          item.style.left = `${Math.min(Math.max(x, 0), maxX)}px`;
          item.style.top = `${Math.min(Math.max(y, 0), maxY)}px`;
        }
      });
      return newState;
    });
  };

  let moved = false;
  let touchedOrClicked = false;
  let itemWasDragged = false;

  const handleMouseDown = (e, index, item) => {
    e.preventDefault();
    touchedOrClicked = true;
    moved = false;
    //item.classList.add('grow-on-drag');
    startDrag(e.clientX, e.clientY, index, item);
  };

  const handleTouchStart = (e, index, item) => {
    e.preventDefault();
    touchedOrClicked = true;
    moved = false;
    //item.classList.add('grow-on-drag');
    startDrag(e.touches[0].clientX, e.touches[0].clientY, index, item);
  };

  useEffect(() => {
    dragItemsRef.current = document.querySelectorAll('.box');
    const container = containerRef.current;

    // Populate boxes with delay on mount
    populateBoxesWithDelay(dragItemsRef.current);

    const handleMouseMove = (e) => {
      e.preventDefault();
      if (touchedOrClicked) {
        itemWasDragged = true;
        moved = true;
        isStateDragging(e.clientX, e.clientY);
      }
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      if (touchedOrClicked) {
        itemWasDragged = true;
        moved = true;
        isStateDragging(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleMouseUp = (e) => {
      e.preventDefault();
      if (itemWasDragged) {
        setItemStateAndPosition((prevState) => {
          const newState = { ...prevState };
          Object.keys(newState).forEach((key) => {
            newState[key].isDragging = false;
          });
          return newState;
        });
      }
      if (!moved) {
        handleAddMetaData(e);
      }
      touchedOrClicked = false;
    };

    const handleTouchEnd = (e) => {
      if (itemWasDragged) {
        setItemStateAndPosition((prevState) => {
          const newState = { ...prevState };
          Object.keys(newState).forEach((key) => {
            newState[key].isDragging = false;
          });
          return newState;
        });
      }
      if (!moved) {
        handleAddMetaData(e);
      }
      touchedOrClicked = false;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('touchend', handleTouchEnd);

    dragItemsRef.current.forEach((item, index) => {
      item.addEventListener('mousedown', (e) => handleMouseDown(e, index, item));
      item.addEventListener('touchstart', (e) => handleTouchStart(e, index, item));
    });

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('touchend', handleTouchEnd);

      dragItemsRef.current.forEach((item, index) => {
        item.removeEventListener('mousedown', (e) => handleMouseDown(e, index, item));
        item.removeEventListener('touchstart', (e) => handleTouchStart(e, index, item));
      });
    };
  }, []);

  return (
      <div id="window-background">
      <div id="container" ref={containerRef}>
        <div className='macos-button-box'>
          <button className="macos-buttons red"></button>
          <button className="macos-buttons green"></button>
          <button className="macos-buttons yellow"></button>
          <span className="macos-text"> Featured Projects</span>
        </div>
        <img className="box pants" src={pant1} alt="logo" />
        <img className="box pants" src={pant3} alt="logo" />
        <img className="box pants" src={pant4} alt="logo" />
        <img className="box pants" src={pant5} alt="logo" />
        <img className="box pants" src={pant6} alt="logo" />
        <img className="box pants" src={pant7} alt="logo" />

  
        <img className="box shirts" src={shirt1} alt="logo" />
        <img className="box shirts" src={shirt4} alt="logo" />
        <img className="box shirts" src={shirt5} alt="logo" />
        <img className="box shirts" src={shirt3} alt="logo" />
        <img className="box shirts" src={shirt6} alt="logo" />

        <img className="box shirts" src={vest2} alt="logo" />

        <img className="box shirts" src={jacket1} alt="logo" />
        <img className="box shirts" src={jacket2} alt="logo" />

        <img className="box shirts" src={hat1} alt="logo" />
        <img className="box shirts" src={hat2} alt="logo" />
       
        {/* Add more boxes as needed */}
      </div>
      </div>
    );

}

export default DragZone