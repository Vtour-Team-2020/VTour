import React from 'react'

export default function getTheme() {
    let theme = {
        global: {
          colors: {
            brand: 'rgb(180, 119, 26)',
            },
          font: {
            color: 'white',
            family: 'Roboto',
            size: '18px',
            height: '20px',
          },
        },
      };

    return theme;
}