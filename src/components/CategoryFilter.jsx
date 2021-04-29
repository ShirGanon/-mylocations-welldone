import React,{useState, useEffect, useContext} from "react";
//
import { makeStyles } from "@material-ui/core/styles";
//
import Context from '../Context';

const useStyles = makeStyles({
  categoryItem: {
    border: "solid 1px grey",
    borderRadius: "10px",
    cursor: "pointer",
  },
  categoriesTitle: {
    borderBottom: "1px solid",
  }
});




export default function CategoryFilter() {
  const { editButton, onSelectCategory, categories, setCategories, onEditButton, setSelectedTitle} = useContext(Context);
  const classes = useStyles();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryInput, setCategoryInput] = useState("");

  const onCategoryClick = (category) =>{
    selectedCategory === category.title ? setSelectedCategory(null) : setSelectedCategory(category.title);
    onSelectCategory(category);
  }

  const handleKeyDown = (event, id) => {
    if (event.key === 'Enter') {
      let arr = categories;
      let item = arr.find(i => i.id === id);
      item.title = categoryInput;
      setCategories(arr);
      setSelectedCategory(categoryInput);
      //
      setSelectedTitle(categoryInput);
      //
      onEditButton();
    }
  }


  useEffect(() => {
    setCategoryInput(selectedCategory);
  }, [selectedCategory])



  return (
    <div>
        <h3 className={classes.categoriesTitle}>Categories</h3>
      {categories.map((i) => (
        <div key={i.title} className={classes.categoryItem} onClick={() => !editButton && onCategoryClick(i)}>
          {(editButton && selectedCategory === i.title) ?
            <input type="text" value={categoryInput} id="fname" name="categoryName" onChange={(e)=>setCategoryInput(e.target.value)} onKeyDown={(e)=>handleKeyDown(e, i.id)}/>
            :
            <a style={{color: selectedCategory === i.title ? "red" : "black"}}>
              {i.title}
            </a>
          }
        </div>
      ))}
    </div>
  );
}
