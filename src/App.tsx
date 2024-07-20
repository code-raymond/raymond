import './App.css'
import { Grid, Typography } from '@mui/material'
import Photo from '/src/assets/photo.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PortfolioTabs from './components/tabs/Tabs';
import { CSSProperties, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db, signIn } from './main';
import BG from '/src/assets/11269.jpg';
const styles: Record<string, CSSProperties> = {
  mainGrid: { padding: "1rem", width: "100%", position: "relative", zIndex: 100 },
  imageContainer: { width: "128px", height: "128px", borderRadius: "50%", overflow: "hidden", border: "1px solid #A7A7A7" },
  contactGrid: { display: "flex", flexDirection: "column", alignContent: "flex-end", textAlign: "right", gap: "1rem" },
  commonContact: { width: "100%", textAlign: "right", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.5rem" },
  linkedInTypo: { color: "#0077B5", width: "100%", textAlign: "right" },
  linkedInAnchor: { color: "#0077B5", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.5rem" },
  bgImage: { position: "absolute", zIndex: 0, left: 0, top: 0,width: "100vw",opacity: 0.08 }
};
function App() {
  const [skills, setSkills] = useState<any[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        signIn();
      }
    });
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'skills'));
        const dataList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(dataList);
        setSkills(dataList);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);
  return (<>
    <img src={BG} style={styles.bgImage} />
    <Grid container sx={styles.mainGrid} alignItems={"center"}>
      <Grid item xs={12} sm={12} md={2} lg={1.5}>
        <div style={styles.imageContainer}>
          <img width={"128px"} src={Photo} style={{}} />
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} sx={{ textAlign: "left" }}>
        <Typography variant='h2'>Raymond Thomas</Typography>
        <Typography variant='h4'>Senior software engineer</Typography>
        <Typography variant='body1' className='skills'>Javascript | React JS | Typescript | Express JS | AWS | ASP .Net | Docker | Kubernets | PostgresSQL</Typography>

      </Grid>
      <Grid item xs sm md lg sx={styles.contactGrid}>
        <Typography sx={styles.commonContact}><AlternateEmailIcon color='primary' />raymondmanithara@gmail.com</Typography>
        <Typography sx={styles.commonContact}><LocalPhoneIcon color='primary' />+91 9895191391</Typography>
        <Typography sx={styles.linkedInTypo}><a style={styles.linkedInAnchor} href='www.linkedin.com/in/raymond-thomas-50976211b'><LinkedInIcon />LinkedIn</a></Typography>
      </Grid>
      <Grid xs={12} sx={{height:"100%"}}>
        <PortfolioTabs skills={skills} />
      </Grid>
    </Grid>
  </>

  )
}

export default App
