import React, { useContext } from "react";
//
import CategoryFilter from './CategoryFilter'
import ItemList from './ItemList'
//
import Context from '../Context';
//
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    container: {
        padding: "0px",
    },
    item: {
        width: "600px",
      },
});

export default function Main() {
  const classes = useStyles();
  const { viewButton, editButton, selected } = useContext(Context);

  return(
    <div >
        <Container className={classes.container} maxWidth="sm">
            <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
            spacing={1}
            >
                <Grid item className={classes.item}>
                    <Paper elevation={3}>
                        <CategoryFilter  editButton={editButton} />
                    </Paper>
                </Grid>
                {viewButton &&
                    <Grid item className={classes.item}>
                        <Paper elevation={3}>
                            <ItemList selected={selected} />
                        </Paper>
                    </Grid>
                }
            </Grid>  
        </Container>
        
    </div>
  )
}
