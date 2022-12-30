import React from 'react'
import { Button, makeStyles, Typography, Grid, Paper } from "@material-ui/core"
import { classicNameResolver } from 'typescript'

const useStyles = makeStyles({
    btnStyles: {
        background: "green",
        padding: "3px 50px"
    },
    typoStyle: {
        color: "blue"
    },
    paperStyle: {
        backgroundColor: "orange",
        height: "50px",
    }
})

const MaterialUi: React.FC = () => {
    const classes = useStyles()
    return (
        <div>
            <Typography color="secondary" className={classes.typoStyle} variant="h1" align="left" gutterBottom noWrap>Hello UI Hello UIHello UIHello UIHello UIHello UIHello UIHello UIHello UI</Typography>

            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.paperStyle}>xs=12</Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paperStyle}>xs=6</Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paperStyle}>xs=6</Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paperStyle}>xs=3</Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paperStyle}>xs=3</Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paperStyle}>xs=3</Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paperStyle}>xs=3</Paper>
                </Grid>




            </Grid>
            <Button className={classes.btnStyles} variant='contained' color="primary">Test</Button>
        </div >
    )
}

export default MaterialUi