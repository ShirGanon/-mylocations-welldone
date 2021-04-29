import React, { useState } from "react";
import './App.css';
import MainToolbar from './components/MainToolbar'
import Main from './components/Main'
import Context from './Context';

function App() {
  const [selected, setselected] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("Categories");
  const [viewButton, setViewButton] = useState(false)
  const [editButton, setEditButton] = useState(false)
  const [categories, setCategories] = useState([
    { title: "Category 1", id: 0 },
    { title: "Category 2", id: 1 },
    { title: "Category 3", id: 2 },
  ]);
  const [newCategory, setNewCategory] = useState(false);
  const [items, setItems] = useState([
    { name: "Mahane Yehuda", address: "Agripas St 90, Jerusalem", coordinates:"31.785, 35.212", id: 0, category: { id: 0 } },
    { name: "Jaffa Flea Market", address: "Olei Zion St, Tel Aviv-Yafo", coordinates:"32.053, 34.756", id: 1, category: { id: 0 } },
    { name: "Old Train Station", address: "Kaufmann St, Tel Aviv-Yafo", coordinates:"32.059, 34.762", id: 2, category: { id: 0 } },
    { name: "Sheba Medical Center", address: "Derech Sheba 2, Ramat Gan", coordinates:"32.047, 34.842", id: 3, category: { id: 1 } },
    { name: "HaBama Center", address: "HaCarmel St 20, Ganei Tikva", coordinates:"32.059, 34.879", id: 4, category: { id: 1 } },
    { name: "Country Club Kiryat Hasharon", address: "HaMoran St 7, Netanya", coordinates:"32.302, 34.877", id: 5, category: { id: 2 } },
    { name: "Laniado Hospital", address: "Divrei Khayim St 16, Netanya", coordinates:"32.346, 34.855", id: 6, category: { id: 2 } },
  ]);

  const onViewButton = () =>{
    setViewButton(!viewButton);
  }
  const onEditButton = () => {
    setEditButton(!editButton);
  }
  const onSelect = () =>{
    setViewButton(false);
    setEditButton(false);
  }

  const onSelectCategory = (category) =>{
    if(selected === null){
        setselected(category.id);
    }
    else if(category === null) setselected(null);
    else if(selected === category.id) setselected(null);
    else setselected(category.id);
    onSelect();

  }



  return (
    <Context.Provider value={{ selected, setselected, viewButton, setViewButton, editButton, setEditButton, onSelectCategory, categories, setCategories, onEditButton, selectedTitle, setSelectedTitle, newCategory, setNewCategory, items, setItems }}>
      <div className="App">
        <MainToolbar onViewButton={onViewButton} onEditButton={onEditButton} />
        <Main onSelect={onSelect}/>
      </div>
    </Context.Provider>
  );
}

export default App;
