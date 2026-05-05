import React, { useEffect, useRef } from 'react';
import './Carousel.css';

const Carousel = () => {
  const scrollRef = useRef(null);

  // Array of image URLs – replace these with your own images
  const images = [
    'https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/591740753_1210805494449594_1054902077645437712_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeErQsNZWKKwnTzKNnRAzb8fEUfQ09UmUt0RR9DT1SZS3UOrgj-pcq8qRzIs-dG8vAb7EqDnTexX2hU1ANgZ9gP0&_nc_ohc=HNDvKKBizvoQ7kNvwFPcqFP&_nc_oc=Adrxd9CHqxZpXjfmPdL6A71VsgJD_UN1T66eAQc3UM1sDsxS20Ik9Ks89DkKn8CiVec&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=MAP6RNdEWV8aXa8RkI9VjA&_nc_ss=7b2a8&oh=00_Af6U6OrepxlRIw3c6rB_Axb2OE9fcYU7HfM1X7qCq-fnjg&oe=69FF8618',  // football-like (camera)
    'https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/596629904_1212285914301552_2076146226243947901_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGPNnLNVTkX-s6uxMDGNpIqflBubHv5GZ1-UG5se_kZnTLkSgAZnywyb0DfPOrZrEb5OIOyGVBG0VsAJfb7uDoU&_nc_ohc=hDG09riUzbYQ7kNvwEu3pYo&_nc_oc=AdomkWa6Ydz7qh8XHjZOJ56CobJUHOhC6HJidAhGFCD2luvzcSMD_pONDjve6sSjbqI&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=OVMxwa7wCw_TERnN6k8NVQ&_nc_ss=7b2a8&oh=00_Af4QldrkQfS1cGd1mU7Uyutv4G1UcgALiBjfcb8oyGpOuQ&oe=69FF98F8',  // green field
    'https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/598860259_1216436883886455_8455742546060352054_n.jpg?stp=cp6_dst-jpg_s720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeG3xfiMHOMqkk6DitkgLixXIvbVwYI77d4i9tXBgjvt3s6rQrjhqMBYeWdFsEvBDXaCGs0d90bd1-Y_LdpVLuKR&_nc_ohc=l3fsvZ7nP7oQ7kNvwF75LIa&_nc_oc=AdrlxfkARuwvcUgQ9tQkJ56ldXVAlGrRVZuo6ODP3vw-U4N6guY3mTXQRzB4M_1EhOk&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=8Vlgq3GGS19zSW_Np1ohNQ&_nc_ss=7b2a8&oh=00_Af65bAC1KMUVEQJ0a9oFlomuX-F49FkeSuAmDml8F5pQKA&oe=69FF9781',   // kids playing
    'https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/596819009_1216439367219540_7985053860768606507_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeF8onegHFF5U4w4ZIyHeiUbZCo1aPB2KgRkKjVo8HYqBH6WbzO_bEQlnN9xKEbKkCgaNP7M0IgfJweh7faVcdsB&_nc_ohc=pUbTmp8IheQQ7kNvwHWV0q-&_nc_oc=Adr56hql7dDXGHg-AYePI0zzKiq2ChSO0lWWvaoz2WlaSeSd6V0v6axtZ8aTC5mtmBM&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=2EjQ5Uz5WdDjMuLGTyLWbg&_nc_ss=7b2a8&oh=00_Af70eKhW2q2AN-xheQFAxtiHeyLYWyra8NtoU8z3odTmfw&oe=69FF7F3A',   // grass
    'https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/599922199_1216441457219331_3716348302406070665_n.jpg?stp=cp6_dst-jpg_s590x590_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGUfy7sUx20v5i3ts8j7LpOBiIfDvIsybgGIh8O8izJuLste1A3JoYHXEPA5D5K_2jTPX5ChWUDRXbAVp06SOS4&_nc_ohc=0xxLDeU_z28Q7kNvwF-0P3S&_nc_oc=AdohAsNGvQmD9LR33LtIlrq7XOVWRG1sWQkIJjLIt8byjaY-g4ci9ToPhzNiw9vUHh0&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=bQP-2rwW_Ksv7R2UEpkZZw&_nc_ss=7b2a8&oh=00_Af737BANw26dvGghZX7JVnyf-PAnnXtKxw4SX-f2EBjvbQ&oe=69FF70A9',   // water (replace with real trophy photo)
    'https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/597674470_1216443527219124_2811490214722980688_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGunHAIFys_o2nBSm61enGIKFPrIyUgWQ4oU-sjJSBZDjGs7nnNG07Mdt3KMT31YkpGWa2iY9S_i9wZVmxuPxvH&_nc_ohc=zvAtWuSNYZkQ7kNvwHdJGkL&_nc_oc=AdpeCPuDAwCDuAu3j9787z0U9CiOANYuh3F2wNXRy5yXGDJ7P_XqlYidFxkhEsMC6sE&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=N0HOWDc8vJEsJtdTrBYptg&_nc_ss=7b2a8&oh=00_Af5N5ccrDswEAGBMnOH39rPQGmHaNRSqeSIdpvALVnXb_Q&oe=69FF7ED3',   // piano (replace with training)
    'https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/617574647_1240693354794141_8964794504609749467_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEUunA0kugEzGvkfTxYojrr1LSA0pAMpnfUtIDSkAymdyFjfLeQYw1lrJjjoUylQEDzOtyWlNqCap_k3-Nc17fF&_nc_ohc=JryKrPWSrLUQ7kNvwEFuDva&_nc_oc=Ado3edJP9-l50G2PLOOEYji_drZwaVeq_TBVIWqfyzH9jh52X91kdBLM-XhzeIgoJfE&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=MY0uSqT7fh0sWzoMXILGWQ&_nc_ss=7b2a8&oh=00_Af4RCxWOu2zDaqx7KA2IlEiviJo35Hnsa60nIO2oZvdypQ&oe=69FF8668',   // old photo (replace with team)
    'https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/648867915_1282236067306536_5418332663883235895_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH2GkCjaH13ea8pk70pLL3eXxLZeP3_5LZfEtl4_f_kturD27ZaCNici3SLjZStAP1_hJmMoFlIvkEVCwue6hwb&_nc_ohc=kSJ-WIBOX_kQ7kNvwHcb90e&_nc_oc=AdoBHWJb1uqkV8zxmx9I14a0ZVcaTM1cQ7cALm2AFxoHilr2WDSK7yW_pUn3ddC5t_c&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=VSBgTOKeptV1fvk5NkwAaA&_nc_ss=7b2a8&oh=00_Af40kvzmDNfD4hhxnQ9Uhh0ll84SYcVichN-swffmCvdzw&oe=69FF6E09',   // mountains (replace with camp)
    'https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/678291840_1317737967089679_1852804484443231439_n.jpg?stp=cp6_dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH0IuTM79sYUhrfu30ApNoHBwh4Zx6lJAQHCHhnHqUkBCVoqX2cPXVwyY3RaqVibvtwShpZpUj2pveVn9FpDUBd&_nc_ohc=12VqjM7KQAoQ7kNvwHgCRxd&_nc_oc=Adp1ZHLNJvLRwoXRTGescw-6vkU9d3qHeuggP-MLobgWI1AAhEVhdPxGYO3O2n3PqQU&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=E-27uAD-EWL0rcF6qwsW_w&_nc_ss=7b2a8&oh=00_Af5KmUf4YR9Hq_jFu87SE7dYsJ6gEuRcxkTim00-vBcDIQ&oe=69FF716A',   // backpack
    'https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/683756086_1326089029587906_7635868733838178821_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEUwcOgaFownSmVOHuKj9N2ZK55tw_5i0Fkrnm3D_mLQRUG4EqLWBJg9WpPijodi38LAjmK7b-jmuyQnH9CX7ns&_nc_ohc=mcmeaN072tYQ7kNvwFo4mMp&_nc_oc=Adr7aIK2Qt2Iij_RzdTCEmup_Et4TGdboQzhd2FhkFXWiaeixkHI91uKz0Q4nGlYNyY&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=8Yo1uFiNb5OwiAv0r13lfA&_nc_ss=7b2a8&oh=00_Af7GdqHjdNESNAm5JWVoy7fOvxjrTg7C_jpPEGoKw06MOw&oe=69FF94EF',   // statue
    'https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/593427785_1210806964449447_5346565694777006983_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHf8Ys3h2XxoBygwooG1hhm1-tmds5GjO7X62Z2zkaM7qu6XHH1I--GfTijslHbHIYYnnt5Y1XEpuzutjt2cc3f&_nc_ohc=pQIS4hteXWcQ7kNvwFt0nFy&_nc_oc=AdpdtfYUt795wxh5Dq0q8Ku5ZHVZpATVZSmWxICjLcIKqBoaJHdyG3XS3Qh0oWm-KFY&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=6gPh_VlYHAcDNK8_3V5ylw&_nc_ss=7b2a8&oh=00_Af7CXeluOzFc6yWsCGBtjhXHQkY2UAuYrjMLIpF9mDbt2A&oe=69FF9123',   // crowd
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