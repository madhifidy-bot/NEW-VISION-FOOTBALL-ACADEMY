import React, { useEffect, useRef } from 'react';
import './Carousel.css';

const Carousel = () => {
  const scrollRef = useRef(null);

  // Array of image URLs – replace these with your own images
  const images = [
  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/727519069_1371737905023018_6850974867133678804_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHtQIbUkkZf3N2z-2MlOdYDJw2paeswE9cnDalp6zAT12uFegHuIkjyBWz0hSelTmz9m_Xia2aoNCBH-BDf002b&_nc_ohc=io_6aPsVkrcQ7kNvwE0Rs-G&_nc_oc=Ado8QIrIlRIjk1LTc-LHjBSoFfhQ2gnsnWN8_jq6lEdi-LImbxufjWixruK4YOpTtzo&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=i7z6RrBudv8ymQT4XtPylw&_nc_ss=7b2a8&oh=00_AQAc_PNM_72MrV-g2H567QrscICOqfRuObLnLieMKOyReg&oe=6A4D2C3B',

  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/727519069_1371737905023018_6850974867133678804_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHtQIbUkkZf3N2z-2MlOdYDJw2paeswE9cnDalp6zAT12uFegHuIkjyBWz0hSelTmz9m_Xia2aoNCBH-BDf002b&_nc_ohc=io_6aPsVkrcQ7kNvwE0Rs-G&_nc_oc=Ado8QIrIlRIjk1LTc-LHjBSoFfhQ2gnsnWN8_jq6lEdi-LImbxufjWixruK4YOpTtzo&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=i7z6RrBudv8ymQT4XtPylw&_nc_ss=7b2a8&oh=00_AQAc_PNM_72MrV-g2H567QrscICOqfRuObLnLieMKOyReg&oe=6A4D2C3B',

  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/719210486_1359557322907743_301349332672888099_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEzFADLO3G0i5ZfyPaAqk2iWfT-YmPKScNZ9P5iY8pJw6isd-QkFGLgegXLiA4wXP2ENtoCZDI2lKlj1VWc6jx9&_nc_ohc=CFcE2EM1EgAQ7kNvwEBTeoQ&_nc_oc=AdqP8S0eHTAfviv6ny3x660vivPH5_K6OW0v6QoC0pvlP9BiI43sBzZ9fTP23lXbLf4&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=ve2tZI5JM5Q6CpWf0ftUcQ&_nc_ss=7b2a8&oh=00_AQArkyNttX8d3NtPLyxmW7zM046DSSm3kWq4ZgxUXmCphQ&oe=6A4D3EF8',

  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/712227058_1352361023627373_7525721141847341345_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHz5NrHFok8L4QfF4Hj8-at5GZqelN6lGjkZmp6U3qUaP8GdAMBgOugHk7AgMEZbzsPsWp8xz_bYOcxEuN0_n3K&_nc_ohc=XXbcpokBAr8Q7kNvwGy291c&_nc_oc=AdpN7yw4Ni3MhbbD4WTy3fnmaBhgNHwtWcqM9E_qpu0jvIzN65BQH9_4yaPamLBJfvU&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=3zLTcDnbxo2ol65tiJInHg&_nc_ss=7b2a8&oh=00_AQA6c23H_flxSkIXH-V2j0U_7cy2UVy6xnDI6mImpBkceg&oe=6A4D49B6',

  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/701009817_1341424454721030_1234523470250897282_n.jpg?stp=cp6_dst-jpegr_tt6&cstp=mx2048x1536&ctp=s590x590&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFg6FLC1_-SAwhu4AUctd3Wtu8n0xR4W_u27yfTFHhb-9Cs-Cyra_dO--6KEU_Xuhz17MbjQuvtMiOMmkdXAMQj&_nc_ohc=8fHPAzy_CtIQ7kNvwGynw0R&_nc_oc=Adpr98Vxsvk7ftyJgDb3iPf_vv9rsHW0H_450Z74qcdX9tQKwO1uxtIBV52QRRjdu90&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=UAInJmhREZiQ_AEk3aFf-Q&_nc_ss=7b2a8&oh=00_AQBcWF0tf1oS4ZYu4YD9s21S67ZYWkdT83n-2m1KDm6t-w&oe=6A4D5113',

  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/701101742_1341424571387685_397372782852191287_n.jpg?stp=cp6_dst-jpegr_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFZklH5lfWF1sGy_JSit_0FWCNyob7RhQVYI3KhvtGFBQQHZmR08Y4L7TADHTV0EVM_sACgOXMw-_mc1diFEIiI&_nc_ohc=MhsN9UB7I50Q7kNvwHejTcV&_nc_oc=Adqa0j8BYUgfJvwIEZ6hn-DZhs3iOt1Fw4HIPAuvDTOF_pTaL-uSZsyAAA1jXDEZlkk&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=UAInJmhREZiQ_AEk3aFf-Q&_nc_ss=7b2a8&oh=00_AQA2aREDoB0zBsBxcY1yqpBygEIluzdgFKJ8Ip4HSNffGQ&oe=6A4D3A8A',

  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/683756086_1326089029587906_7635868733838178821_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s720x720&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEUwcOgaFownSmVOHuKj9N2ZK55tw_5i0Fkrnm3D_mLQRUG4EqLWBJg9WpPijodi38LAjmK7b-jmuyQnH9CX7ns&_nc_ohc=sS3kghNq370Q7kNvwHus6n0&_nc_oc=AdrXaqrg2UH8VflWue7Ajt9PPobuPCV0rz9OBkznjzgz4MclLYBBgA17jqmgNP-qnGE&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=0dGn9oz-HNEnYHcZz_lBng&_nc_ss=7b2a8&oh=00_AQAz1TzLkGTPOdKOrseTo8vGcQ6E1-FtktEnRbzn-KooXA&oe=6A4D5D6F',

  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/679015815_1323333393196803_9011606052941643281_n.jpg?stp=cp6_dst-jpegr_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEiVuS1Sezt0o8JJk7dk3Cx8nVMJnxmaJnydUwmfGZomRsxI5THb1BsHoz1FH1iHPPbLZzD2tKeAUlq8FVj_qxc&_nc_ohc=qqxxiBZZTNUQ7kNvwEvMENC&_nc_oc=Adoj-78EayOawPjh9traE8JZJ2qpc62q1eBk6YRI5nQq_KTqaJ0t0V92eaX8E45Ew8k&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=F_HYVt1frSOHdFr3aniETQ&_nc_ss=7b2a8&oh=00_AQAwodrggMoGTNSuroxsCjn3YzppVf0ASdlylzSVYZtZlw&oe=6A4D2FB1',

  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/684283779_1323328403197302_3311801785283702061_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFF0UX8FceXSXT1ynldJNnl7OdjgJZNTwLs52OAlk1PAptf24Dupy7dEDQwwMgHzBXaFROHWV4t7gTh3F2wf6eB&_nc_ohc=vAiIWqQ_9_0Q7kNvwG_xvDO&_nc_oc=Adq8eiq4vr-E3YE1AhLZfcZ6sVrPo28zr5ZLsZLUWUGk6Np3aS6AuCeMiBzKGH7TfZ4&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=F_HYVt1frSOHdFr3aniETQ&_nc_ss=7b2a8&oh=00_AQBSM6TVUydKXFkFZ5GSr9TneZiaQgVeupUao571rc85nQ&oe=6A4D3C0B'
];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const step = 1; // pixels per frame
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const animate = () => {
      if (scrollContainer) {
        scrollAmount += step;
        if (scrollAmount >= maxScroll) scrollAmount = 0;
        scrollContainer.scrollLeft = scrollAmount;
        requestAnimationFrame(animate);
      }
    };
    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-track" ref={scrollRef}>
        {images.map((src, index) => (
          <div className="carousel-slide" key={index}>
            <img src={src} alt={`Academy moment ${index + 1}`} />
          </div>
        ))}
        {/* Optional: duplicate a few slides for seamless loop */}
        {images.slice(0, 3).map((src, index) => (
          <div className="carousel-slide" key={`dup-${index}`}>
            <img src={src} alt={`Duplicate ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;