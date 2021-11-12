
import { Grid, Paper,TextField,Checkbox,FormControlLabel,Button, Typography,Link,FormGroup } from "@material-ui/core";
import Logo from "./foto/Logo.png"
import { Switch } from "@material-ui/core";
import React from "react";



const Login = () => {

    const paperStyle= {
        padding:20,
        height:'58vh',
        width:400,
        margin:'100px auto'
    }
    const bntStyle={
        margin:'8px 0'
    }
    const singStyle={
        marginleft:'5px'
    }
    const telaStyle={
        margin:'8px 0',
        backgroundImage: `url(${'./componente/foto/img.jpg'})`,
        height: 800,
        wight:1000
    }

 


    return(
       <Grid style={telaStyle}>
           <Paper elevation={10} style={paperStyle}>
              <Grid align='center'>
              <img src={Logo}/>
              </Grid> 
              <TextField id="standard-basic" label="Usuario" variant="standard" fullWidth required/>
              <TextField id="standard-basic" label="Senha" variant="standard" type='password' fullWidth requird/>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Lembrar-se" />
              <Grid align='center'>
            
              <Button href="/home" variant="contained" fullWidth type="submit" color="primary" style={bntStyle}
               > 
             Entrar 
              </Button>
            
              <Typography align='left'>
              <Link href="#">Esqueceu a senha ?</Link>
              </Typography>
              <FormGroup>
                 <FormControlLabel control={<Switch defaultChecked />} label="Login Admin" />
      
             </FormGroup>
              </Grid> 
           </Paper>
                   

        </Grid>
                       


    );
}

export default Login;