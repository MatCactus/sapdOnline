import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from "@/component/layout";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <div className={styles.dashboardContainer}>
          <p>Accueil</p>
          <div className={styles.dashboardContent}>
            <div className={styles.dashboardContentLeft}>
              <Fab color="primary" aria-label="add" className={styles.addButton} onClick={handleClickOpen}>
                <i className="fas fa-plus fa-lg"></i>
              </Fab>
              <p>News</p>
              <div className={styles.newsContainer}>
                <div className={styles.news}>
                  <div className={styles.newsHead}>
                    <p>Communiqué officielle 78</p>
                  </div>
                  <div className={styles.newsBody}>
                    <p>Messieurs votre très chers camarade 69 est mort cette nuit ne pleurer pas sa mort soyer heureux blablablablablablabl a
                      blablablab lablablablabl ablablablablablablabla blablablablablab lablabla blablabla blablablab  lablablabla blabl abl abla</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.dashboardContentMiddle}>
              <p>Haut gradé</p>
              <div className={styles.dashboardContentMiddleContainer}>
                <div className={styles.imgContainer}>
                  <Tooltip title="Commandant | 73" arrow placement={"top"}>
                    <img src="https://media.discordapp.net/attachments/1065673195442683975/1065678547492012032/20230119175521_1.jpg?width=586&height=609" alt="LSPD" className={styles.lspdLogo}/>
                  </Tooltip>
                </div>
                <div className={styles.imgContainer}>
                  <Tooltip title="Commandant | 73" arrow placement={"top"}>
                    <img src="https://media.discordapp.net/attachments/1065673195442683975/1065678547492012032/20230119175521_1.jpg?width=586&height=609" alt="LSPD" className={styles.lspdLogo}/>
                  </Tooltip>
                </div>
                <div className={styles.imgContainer}>
                  <Tooltip title="Commandant | 73" arrow placement={"top"}>
                    <img src="https://media.discordapp.net/attachments/1065673195442683975/1065678547492012032/20230119175521_1.jpg?width=586&height=609" alt="LSPD" className={styles.lspdLogo}/>
                  </Tooltip>
                </div>
                <div className={styles.imgContainer}>
                  <Tooltip title="Commandant | 73" arrow placement={"top"}>
                    <img src="https://media.discordapp.net/attachments/1065673195442683975/1065678547492012032/20230119175521_1.jpg?width=586&height=609" alt="LSPD" className={styles.lspdLogo}/>
                  </Tooltip>
                </div>
              </div>
            </div>

            <div className={styles.dashboardContentRight}>
              <Fab color="primary" aria-label="add" className={styles.addButton} onClick={handleClickOpen2}>
                <i className="fas fa-plus fa-lg"></i>
              </Fab>
              <p>Ressources</p>
              <div className={styles.ressourcesContainer}>
                <div className={styles.ressource}>
                  <div className={styles.ressourceHead}>
                    <p>Trello</p>
                  </div>
                  <div className={styles.ressourceBody}>
                    <p>Modif la partie ressource</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Ajouter une News</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Ajouter une news concernant la LSPD ou la ville de Los Santos. (Max 500 caractères)
              </DialogContentText>
              <TextField
                  autoFocus
                  margin="dense"
                  id="outlined-basic"
                  label="Titre de la News"
                  type="text"
                  fullWidth
                  variant="outlined"
              />
              <TextField
                  id="outlined-multiline-static"
                  label="Contenue de la news"
                  margin="dense"
                  multiline
                  rows={4}
                  fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color={"error"}>Annuler</Button>
              <Button onClick={handleClose} color={"success"}>Enregistrer</Button>
            </DialogActions>
          </Dialog>

          <Dialog open={open2} onClose={handleClose2}>
            <DialogTitle>Ajouter une Ressources</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Ajouter une ressources pour la LSPD (URL, Discord, etc...)
              </DialogContentText>
              <TextField
                  autoFocus
                  margin="dense"
                  id="outlined-basic"
                  label="Titre de la Ressource"
                  type="text"
                  fullWidth
                  variant="outlined"
              />
              <TextField
                  id="outlined-multiline-static"
                  label="Contenue de la Ressource"
                  margin="dense"
                  multiline
                  rows={4}
                  fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose2} color={"error"}>Annuler</Button>
              <Button onClick={handleClose2} color={"success"}>Enregistrer</Button>
            </DialogActions>
          </Dialog>
        </div>
      </Layout>
    </>
  )
}
