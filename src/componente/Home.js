import * as React from 'react';
import img3 from './foto/img3.jpeg'
import Button from '@mui/material/Button';
import { Rating } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import img4 from './foto/img4.jpeg'
import Grid from '@mui/material/Grid';
import img2 from './foto/img2.jpeg'
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper,TextField, } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Unip '}
      <Link color="inherit" href="">
        Criado por Carlos
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3];

const theme = createTheme();

export default function Album() {

    const paperStyle={
        backgroundcolor:'#000',
        margin:'50px 0',
    }
    const botaoStyle={
        align:'center',
        flex:1
    }
    const [value, setValue] = React.useState(2);


  return (
    <ThemeProvider theme={theme}>
     
     <Paper align='right' elevation={3} style={{marginRight:'30px',marginLeft:'30px'}}>
                <Button style={botaoStyle} href="/Login" variant="text" size="large"> Login</Button>
                <Button style={botaoStyle} href="/Home" variant="text" size="large"> Menu</Button>
                <Button style={botaoStyle} href="/Ajuda" variant="text" size="large"> Ajuda</Button>           
            </Paper>
      <main>
        {/* Hero unit */}
        <Paper align='center' elevation={30} style={paperStyle} >
                <TextField id="outlined-basic" label='Entrada' variant="outlined" InputLabelProps={{ shrink: true }} size="small" type='date' style={{marginRight:'10px'}}/>
                <TextField id="outlined-basic" label='Saida' variant="outlined" InputLabelProps={{ shrink: true }} size="small" type='date' style={{marginRight:'10px'}}/>
                <TextField id="outlined-basic" label="Lugares" variant="outlined" size="small" /> 
                <Button>Pesquisar</Button>
          </Paper>
      
          
        <Container sx={{ py: 10 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            
              <Grid item  xs={20} sm={3} md={4}>
                <Card
                  sx={{ height: '100%', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '1.25%',
                    }}
                    image={img2}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Nome do Hotel
                    </Typography>
                    <Typography>
                     Descrição do Hotel.
                    </Typography>
                    <Rating name="read-only" value={value} readOnly style={{marginTop:5}} />
                  </CardContent>
                  <CardActions>
                 
                    <Button size="small">Mais informaçoes</Button>
                    <Button size="small" variant='contained'>Alugar</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={20} sm={3} md={4}>
                <Card
                  sx={{ height: '100%', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '1.25%',
                    }}
                    image={img3}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Nome do Hotel
                    </Typography>
                    <Typography>
                     Descrição do Hotel.
                    </Typography>
                    <Rating name="read-only" value={value} readOnly style={{marginTop:5}} />
                  </CardContent>
                  <CardActions>
                    <Button size="small">Mais informaçoes</Button>
                    <Button size="small" variant='contained'>Alugar</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={20} sm={3} md={4}>
                <Card
                  sx={{ height: '100%', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '1.25%',
                    }}
                    image={img4}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Nome do Hotel
                    </Typography>
                    <Rating name="read-only" value={value} readOnly style={{marginTop:5}} />
                    <Typography>
                     Descrição do Hotel.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Mais informaçoes</Button>
                    <Button size="small" variant='contained'>Alugar</Button>
                  </CardActions>
                </Card>
              </Grid>
           
          </Grid>
          
        </Container>
        
        
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Home criado para trabalho de Pim da UNIP SJC
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}