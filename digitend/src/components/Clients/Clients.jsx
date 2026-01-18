import React from 'react';
import styles from './Clients.module.scss';

// Импортируем изображения логотипов
import airbnbLogo from '../../assets/Clients/airbnb.png';
import githubLogo from '../../assets/Clients/github.png';
import huskyLogo from '../../assets/Clients/husky.png';
import spotifyLogo from '../../assets/Clients/spotify.png';

const Clients = () => {
  const clients = [
    { id: 1, name: 'airbnb', logo: airbnbLogo },
    { id: 2, name: 'GitHub', logo: githubLogo },
    { id: 3, name: 'Spotify', logo: spotifyLogo },
    { id: 4, name: 'HUSKY', logo: huskyLogo },
  ];
  
  return (
    <section className={styles.clients}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>OUR CLIENTS</h2>
          <p className={styles.description}>
          Trusted by leading companies worldwide to deliver exceptional digital experiences and measurable results.
          </p>
        </div>
        
        <div className={styles.logosContainer}>
          <div className={styles.logosGrid}>
            {clients.map((client) => (
              <div key={client.id} className={styles.logoItem}>
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className={styles.logoImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;