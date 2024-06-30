import { createContext,useState } from "react";


const DataContext = createContext();

const DataProvider = ({children})=>{
    const [data,setData]=useState([
        {
          id:1,
          brand: 'Dlce & Gabbana',
          description: ' cropped leaf-print shirt',
          price: '$796',
          image:"https://cdn-images.farfetch-contents.com/14/82/97/77/14829777_26844957_1000.jpg"
        },
        {
          id:2,
          brand: 'Dlce & Gabbana',
          description: ' cropped leaf-print shirt',
          price: '$600',
          image:"https://cdn-images.farfetch-contents.com/14/82/97/77/14829777_26844957_1000.jpg"
        },
        {
          id:3,
          brand: 'Dlce & Gabbana',
          description: ' cropped leaf-print shirt',
          price: '$499',
          image:"https://cdn-images.farfetch-contents.com/14/82/97/77/14829777_26844957_1000.jpg"
        }
      ])

      return (
        <DataContext.Provider value={{data,setData}}>
            {children}
        </DataContext.Provider>
      )
};

export {DataProvider, DataContext};

