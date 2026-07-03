import React, { useEffect, useRef } from 'react';
import './Carousel.css';

const Carousel = () => {
  const scrollRef = useRef(null);

  // Array of image URLs – replace these with your own images
  const images = [
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/719210486_1359557322907743_301349332672888099_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEzFADLO3G0i5ZfyPaAqk2iWfT-YmPKScNZ9P5iY8pJw6isd-QkFGLgegXLiA4wXP2ENtoCZDI2lKlj1VWc6jx9&_nc_ohc=CFcE2EM1EgAQ7kNvwEBTeoQ&_nc_oc=AdqP8S0eHTAfviv6ny3x660vivPH5_K6OW0v6QoC0pvlP9BiI43sBzZ9fTP23lXbLf4&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=ve2tZI5JM5Q6CpWf0ftUcQ&_nc_ss=7b2a8&oh=00_AQArkyNttX8d3NtPLyxmW7zM046DSSm3kWq4ZgxUXmCphQ&oe=6A4D3EF8',

  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/712227058_1352361023627373_7525721141847341345_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHz5NrHFok8L4QfF4Hj8-at5GZqelN6lGjkZmp6U3qUaP8GdAMBgOugHk7AgMEZbzsPsWp8xz_bYOcxEuN0_n3K&_nc_ohc=XXbcpokBAr8Q7kNvwGy291c&_nc_oc=AdpN7yw4Ni3MhbbD4WTy3fnmaBhgNHwtWcqM9E_qpu0jvIzN65BQH9_4yaPamLBJfvU&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=3zLTcDnbxo2ol65tiJInHg&_nc_ss=7b2a8&oh=00_AQA6c23H_flxSkIXH-V2j0U_7cy2UVy6xnDI6mImpBkceg&oe=6A4D49B6',

  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/701009817_1341424454721030_1234523470250897282_n.jpg?stp=cp6_dst-jpegr_tt6&cstp=mx2048x1536&ctp=s590x590&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFg6FLC1_-SAwhu4AUctd3Wtu8n0xR4W_u27yfTFHhb-9Cs-Cyra_dO--6KEU_Xuhz17MbjQuvtMiOMmkdXAMQj&_nc_ohc=8fHPAzy_CtIQ7kNvwGynw0R&_nc_oc=Adpr98Vxsvk7ftyJgDb3iPf_vv9rsHW0H_450Z74qcdX9tQKwO1uxtIBV52QRRjdu90&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=UAInJmhREZiQ_AEk3aFf-Q&_nc_ss=7b2a8&oh=00_AQBcWF0tf1oS4ZYu4YD9s21S67ZYWkdT83n-2m1KDm6t-w&oe=6A4D5113',

  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/701101742_1341424571387685_397372782852191287_n.jpg?stp=cp6_dst-jpegr_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFZklH5lfWF1sGy_JSit_0FWCNyob7RhQVYI3KhvtGFBQQHZmR08Y4L7TADHTV0EVM_sACgOXMw-_mc1diFEIiI&_nc_ohc=MhsN9UB7I50Q7kNvwHejTcV&_nc_oc=Adqa0j8BYUgfJvwIEZ6hn-DZhs3iOt1Fw4HIPAuvDTOF_pTaL-uSZsyAAA1jXDEZlkk&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=UAInJmhREZiQ_AEk3aFf-Q&_nc_ss=7b2a8&oh=00_AQA2aREDoB0zBsBxcY1yqpBygEIluzdgFKJ8Ip4HSNffGQ&oe=6A4D3A8A',

  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/683756086_1326089029587906_7635868733838178821_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s720x720&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEUwcOgaFownSmVOHuKj9N2ZK55tw_5i0Fkrnm3D_mLQRUG4EqLWBJg9WpPijodi38LAjmK7b-jmuyQnH9CX7ns&_nc_ohc=sS3kghNq370Q7kNvwHus6n0&_nc_oc=AdrXaqrg2UH8VflWue7Ajt9PPobuPCV0rz9OBkznjzgz4MclLYBBgA17jqmgNP-qnGE&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=0dGn9oz-HNEnYHcZz_lBng&_nc_ss=7b2a8&oh=00_AQAz1TzLkGTPOdKOrseTo8vGcQ6E1-FtktEnRbzn-KooXA&oe=6A4D5D6F',

  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/679015815_1323333393196803_9011606052941643281_n.jpg?...',

  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/684283779_1323328403197302_3311801785283702061_n.jpg?...',

  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/648867915_1282236067306536_5418332663883235895_n.jpg?...',

  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/615161087_1240697551460388_943762573096298011_n.jpg?...',

  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/617574647_1240693354794141_8964794504609749467_n.jpg?...',

  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/615321106_1240693801460763_6114568190159893959_n.jpg?...',

  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/597668942_1217886480408162_8318549718125814912_n.jpg?...'
];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const step = 1; // pixels per frame
    const maxScroll = scrollConntainer.scrollWidth - scrollContainer.clientWidth;

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