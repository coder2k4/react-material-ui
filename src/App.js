import React from 'react';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Save, SaveAlt, Delete, Menu} from "@material-ui/icons"
import {ButtonGroup, IconButton, Toolbar} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import {makeStyles, ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";
import 'fontsource-roboto';
import { Typography } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";



const useStyles = makeStyles( {
    input: {
        color: "white"
    }
})

const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[500]
        }
    }
})

function StyledInput(){
    const classes = useStyles()
    return <TextField
        placeholder={"MMmmm...."}
        InputProps={{
        className: classes.input
    }}/>
}

function App() {

    const [state, setState] = React.useState(true);



    return (
        <div className="App">
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        TITLE M-UI
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <ThemeProvider theme={theme}>
                <Container maxWidth="sm">
                    <Typography variant="h2">Welcome</Typography>
                <Grid container>
                    <Grid container item justify="center">
                        <ButtonGroup variant={"contained"} size={"large"}>
                            <Button startIcon={<Save/>}
                                    endIcon={<SaveAlt/>}
                                    color={"secondary"}>Save</Button>
                            <Button startIcon={<Save/>}
                                    endIcon={<SaveAlt/>}
                                    color="primary">Discard</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item container justify={"center"}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={state}
                                    onChange={()=>setState(prevState => !prevState)}
                                    name="checkedB"
                                    color="primary"
                                    checkedIcon={<Delete/>}
                                    icon={<Delete/>}
                                />
                            }
                            label="Primary"
                        />
                    </Grid>
                    <Grid container item justify={"center"}>
                        <TextField
                                   id="standard-basic"
                                   label="Standard"
                                   type={"email"}
                                   placeholder={"coder2k@mail.ru"}
                        />
                    </Grid>
                    <Grid container item justify={"center"}>
                        <StyledInput/>
                    </Grid>
                </Grid>

                    <Grid container spacing={3} justify={"center"}>
                        <Grid item xs={4}>
                            <Paper style={{ height: 75, width: "100%" }}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper style={{ height: 75, width: "100%" }}/>
                        </Grid>
                        <Grid item xs={2}>
                            <Paper style={{ height: 75, width: "100%" }}/>
                        </Grid>
                    </Grid>

            </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;
