import React, {useEffect, useContext, useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
//
import Context from '../Context';

const useStyles = makeStyles({
    toolBar: {
        justifyContent: "center",
      },
});

export default function MainToolbar(props) {
    const {onViewButton, onEditButton} = props;
    const { categories, setCategories, selectedTitle, setSelectedTitle, newCategory, setNewCategory, onSelectCategory, selected } = useContext(Context);
    const [input, setInput] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl);

    const onSubmit = () =>{
        if(input !== ""){
            let arr = categories;
            const lastId = arr[arr.length - 1].id; 
            arr.push({title: input, id: (lastId + 1)})
            setCategories(arr);
            setNewCategory(!newCategory);
            setInput("");
            setAnchorEl(null);
        }

    }

    const onDelete = () =>{
        let arr = categories;

        arr = arr.filter(function( obj ) {
            return obj.id !== selected;
        });
        setCategories(arr);
        onSelectCategory(null);
        setNewCategory(!newCategory);

    }



    useEffect(() => {
        setAnchorEl(null);
        if(selected === null) setSelectedTitle("Categories");
        else{
            setSelectedTitle(categories.find(i => i.id === selected).title)
        }
    }, [selected])

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.toolBar}>
                    <a>{selectedTitle}</a>
                    {selected !== null ?
                    <div>
                        <Button variant="contained" onClick={()=>onViewButton()}>View</Button>
                        <Button variant="contained" onClick={()=>onEditButton()}>Edit</Button>
                        <Button variant="contained" onClick={()=>onDelete()}>Delete</Button>
                    </div>
                    :
                    <Button variant="contained" color="secondary" onClick={handleClick}>New Category</Button>
                    }
                   <Popper open={open} anchorEl={anchorEl}>
                        <Paper elevation={3} >
                            <div>
                            <input type="text" value={input} name="newategory" onChange={(e)=>setInput(e.target.value)} />
                            <Button variant="outlined" onClick={onSubmit}>Submit</Button>
                            </div>
                        </Paper>
                    </Popper>
                </Toolbar>
            </AppBar>
        </div>
    )
}
