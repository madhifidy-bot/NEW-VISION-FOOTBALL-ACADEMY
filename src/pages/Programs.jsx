import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Programs.css';

const ProgramDetail = ({ id, title, duration, ageGroup, location: loc, description }) => (
  <div id={id} className="program-detail">
    <h3>{title}</h3>
    <div className="program-meta">
      <span>📅 {duration}</span>
      <span>👥 {ageGroup}</span>
      <span>📍 {loc}</span>
    </div>
    <p>{description}</p>
  </div>
);

const Programs = () => {
  const location = useLocation();
  const [showGallery, setShowGallery] = useState(false);

  // Gallery images – add as many as you like (replace with your own URLs)
 const galleryImages = [
  // Previously provided URLs (9)
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/598860259_1216436883886455_8455742546060352054_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s720x720&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG3xfiMHOMqkk6DitkgLixXIvbVwYI77d4i9tXBgjvt3s6rQrjhqMBYeWdFsEvBDXaCGs0d90bd1-Y_LdpVLuKR&_nc_ohc=ddZKJaqtRi8Q7kNvwGKutG7&_nc_oc=Adqt-8HjSIH3VxUNb_hg5x1oD8JR2vLUrVpGntxdDX2Zs7FBrFyQYDBolMHe1GyhI8E&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=4uvkssdIAzkN3z933d4gPg&_nc_ss=7b2a8&oh=00_AQCbkule5Y4IEGiD0XkgPw0GJGHl-SC0vj7v_mzUPWjAdQ&oe=6A4D6001',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/591740753_1210805494449594_1054902077645437712_n.jpg?stp=cp6_dst-jpegr_tt6&cstp=mx762x1016&ctp=s590x590&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeErQsNZWKKwnTzKNnRAzb8fEUfQ09UmUt0RR9DT1SZS3UOrgj-pcq8qRzIs-dG8vAb7EqDnTexX2hU1ANgZ9gP0&_nc_ohc=3KjmIsWuBqYQ7kNvwF8QC8U&_nc_oc=AdqfFNQRgBGb9TtUZU0hxoU-YLTI0ZFjIrjNMvTzKrFKY7kMOeIHfPhOSvPqTskcZqQ&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=pqQ84hXEsNL1OSiwvWkNKg&_nc_ss=7b2a8&oh=00_AQC4oSM_QTat_ETCIjqv8HEYHY4t3ghA9Jmxgb-D8NVIMA&oe=6A4D4E98',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/593427785_1210806964449447_5346565694777006983_n.jpg?stp=dst-jpegr_tt6&cstp=mx2048x1536&ctp=s590x590&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHf8Ys3h2XxoBygwooG1hhm1-tmds5GjO7X62Z2zkaM7qu6XHH1I--GfTijslHbHIYYnnt5Y1XEpuzutjt2cc3f&_nc_ohc=IXCfcWAlH7wQ7kNvwGUBFCj&_nc_oc=AdovBtKO8tektl16DnQKb4T--A2odGDb2D0fKAAmPT2nQVaDNGyC8Ay7wynfaaI6IpA&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=pqQ84hXEsNL1OSiwvWkNKg&_nc_ss=7b2a8&oh=00_AQAil4AzqcC4wlp0xacN_ZFF4tHvNluu5INI-j436Ew2TQ&oe=6A4D59A3',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/593502095_1210807481116062_1564668612319756550_n.jpg?stp=dst-jpegr_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF5OZhYyoItVlhb4i4UCxdUdkqYhCSosWN2SpiEJKixY5Xbepe2Ao8JlJXwmw_nlE5wELmSB-U9IsqLESg5Lewf&_nc_ohc=siqf9ZcmSK8Q7kNvwEidnkv&_nc_oc=AdohmtzNXdo6bZ27UMTL4GBQYcIrhanrsFRgVs0Vf1v3mZIyxth4UrD-V3kH1h3enEE&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=dM38S6pXHNcY6PpvJ6fAHQ&_nc_ss=7b2a8&oh=00_AQDLHzvhdAvTN2bpPpBv6u9cEBt5nsLi_cyQssACwC4ktQ&oe=6A4D38DB',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/591739033_1210807657782711_6901267263189974608_n.jpg?stp=dst-jpegr_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeENl8sP_J51f3lOmY0jRxphTWbGBLQF_cJNZsYEtAX9wn2rVwp27eO2XO1H1kh2XQMt1xUlmUVTHiaPDso52fh7&_nc_ohc=CyXfv2MosiUQ7kNvwEMmhqe&_nc_oc=AdrR0y15fYfQPA1DkGlrM2c1k9E4yuHM0i83PqdkfopDS9jkSFf7SjaKkOIm9ImQpq4&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=gpOM7J2NuYG-GXiaCjiBAQ&_nc_ss=7b2a8&oh=00_AQABuUAhaE0uZv4saD9szwAzzHmaakAEzmf6IKq2tcvwxA&oe=6A4D68EE',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/583112606_1196070202589790_8644914875880175560_n.jpg?stp=dst-jpegr_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeExnTRHS5OcmGQ5FQ505zbazAEbKbPNipzMARsps82KnPYsYa1ndhWYUp7Bl4-y-jgwaLCw3BsWwWP1-wmnGtSZ&_nc_ohc=y9ByLuuUnv0Q7kNvwFAW0X3&_nc_oc=AdrzC0cr1D7E_xp53UnsHnqxxfXb5RUxl5RsVKSIow-rDF8nHAR8vk_aJDTSJsTAQt0&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=5Pj2ThfmRpwgm-UGNSBGrw&_nc_ss=7b2a8&oh=00_AQCax4LF8cyPreUdv9eanlgg5jQaMmdgEwlYoStggwP-Pg&oe=6A4D59EF',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/583911903_1196068382589972_7891885241917669641_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x1200&ctp=s590x590&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEKQVQ-Jnvk93wPnDgEEgkrosJMYXhDyuqiwkxheEPK6i0HxaQi_cX4Potd7u7xhGOrbLuonpXPjzosnzclbRNv&_nc_ohc=0tLzLVa_ATUQ7kNvwHjVoiv&_nc_oc=Adpdu51m4YvU32Yt-tP99P72KdZYGBRGdmUEev6zc0SgwVbjklFpPB0BSth0R9MLKZM&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=5Pj2ThfmRpwgm-UGNSBGrw&_nc_ss=7b2a8&oh=00_AQDi5R9npb5DvC4yZ1rsUyM57gOzYY5Dm8mcBToJVbSQhg&oe=6A4D6954',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/581386825_1196063155923828_365264033845122667_n.jpg?stp=dst-jpegr_tt6&cstp=mx2048x1536&ctp=s590x590&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFvVH_LLNjQjVq4uVJX0ESm6mZzVddTNLLqZnNV11M0sjK4NVh-UbLPt5VEWQUlKOc15dFvgvU7FZOZOvunKTAi&_nc_ohc=QEikeaOmKBgQ7kNvwE2xycQ&_nc_oc=AdqOvy_EDm9h-cxz3NcSMs6qji0mV5CdCd7sHI0TegIuvPbyA4bXtAXevtq2CkrOARQ&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=5Pj2ThfmRpwgm-UGNSBGrw&_nc_ss=7b2a8&oh=00_AQCNNFlUlGNv3pqcmaWs11R8ampk9IhfXjXNYPloRid9yA&oe=6A4D3C4F',
  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/582050144_1196054635924680_5888018613720540480_n.jpg?stp=dst-jpg_tt6&cstp=mx720x959&ctp=p526x296&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH4rxj8gpt_i-olMi9GY0jVPsf7i7rAqRQ-x_uLusCpFJhAZAPseD3zzrZertc5Iqvo6jvtz_XnR1oyuEpz9ze0&_nc_ohc=hZbpFOMUx4YQ7kNvwEtWv4p&_nc_oc=AdrdJFX4zLd-MbtHg8TnFGOK0VFtHFOu1z_KKeGh00WIOP6FleDzNDGehchZESTshek&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=BiWP5UpQDjR9oOsD2TmS2w&_nc_ss=7b2a8&oh=00_AQCrXEmFQ8or5QUF9_5j9NHP1976Eis75aATNNVch9mAzA&oe=6A4D5B0B',

  // Newly added URLs (5)
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/709509217_1352374090292733_1254645477229687549_n.jpg?stp=dst-jpg_tt6&cstp=mx720x1600&ctp=p526x296&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFe0HfqVvWafxtaBl_OvulsECX1W0bdMK4QJfVbRt0wrs4qoSENM4qmENnQdq7BrahsaX3Ghxj7qxzXfZW7U0RZ&_nc_ohc=Y8D96lcpnWcQ7kNvwHNq1m1&_nc_oc=AdoVaTG_d4AeSiotzhfhpW4mq19v59gfCyVHhobnQKOjquuaE5LvZhL70QNwJfOeJlQ&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=3zLTcDnbxo2ol65tiJInHg&_nc_ss=7b2a8&oh=00_AQBYbo6O6CptcpZqphwtNDGIRWff-bOICGi06yWTVrLhyQ&oe=6A4D4177',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/598825718_1216434203886723_8930279959715107612_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s590x590&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEKVkEMXMuClnNhRA1wKtW2sREH6wFlYdWxEQfrAWVh1an5jN6kOIIWRJACffuDb6entKYF8YqkpsS6izSH0Z7x&_nc_ohc=xLibMHX3VLkQ7kNvwHmbSfN&_nc_oc=AdomLflBV5ImtCKuQ3jZ73pb8ihJg4EVp-5cC4ygl-EMDMbXc9UOBuZhrJsyotZW7rM&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=4uvkssdIAzkN3z933d4gPg&_nc_ss=7b2a8&oh=00_AQDB6A4uXaLUmr_oXFuFmjbncGOJ3AO1skTt7BSwNtC3hA&oe=6A4D63F0',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/595449448_1212285624301581_3922813096834089993_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s590x590&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFNhpqCKIUpg6-SmbTWSOCeHLO4NB1-HRkcs7g0HX4dGT1U025bmkUGPeAXl_MdI447WZ1m8sFSmUhUrNkAF3E2&_nc_ohc=_yia6bfyt34Q7kNvwF1CC1W&_nc_oc=Adp4hzW9clZGACc6W4lgUIEEO5Z17SJSV9fWqx8z7E5BOtCJeo5aO2eV1pgEjt4J9NU&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=VoUiVmsESyDWkugSJ-mFfA&_nc_ss=7b2a8&oh=00_AQCGaKsONU78_unYZN9hHOEBNBWC0uwLAfn4XZx8r5h_QQ&oe=6A4D42F0',
  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/586285407_1201631205367023_6159748062437688246_n.jpg?stp=dst-jpegr_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFyq0KblEFxcW9ZLaMU_D3Q6_K5ZTdR7vrr8rllN1Hu-ilIivZ994bjv6M9VyG1pvMxkORFCb6iLz_8pIC-RWYt&_nc_ohc=zxHgJ3KcNhwQ7kNvwH9bwCB&_nc_oc=AdpVu_KeuL47XvBfNGy-jgYtjq98OtQP52QZi-08GNfEnL0hGLiBuOzZUWfcJi2tjgg&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=kddR5IT1qlf0UxKwZyELYw&_nc_ss=7b2a8&oh=00_AQCJo9xeAldQrxgBium20oX1RYh4zZjLk3X4VMEWP31Ttw&oe=6A4D3F22',
];
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        console.log(`[Programs] Scrolling to ${location.hash}`);
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`[Programs] Element ${location.hash} not found`);
      }
    }
  }, [location]);

  console.log('[Page] Programs rendered');

  return (
    <div className="programs-page">
      <div className="page-hero">
        <h1>ACADEMY PROGRAMS</h1>
        <p>Choose your path to excellence</p>
      </div>
      <div className="programs-content">
        <div className="container">
          {/* EXISTING PROGRAM CARDS – unchanged */}
          <ProgramDetail
            id="u7"
            title="U7 FULL-TIME PROGRAM"
            duration="September - May (8 months)"
            ageGroup="Ages 7-9"
            location="GARDEN ESTATE, NAIROBI"
            description="This elite, season‑long program is designed for BUILDING  players aiming to reach the next level. Daily professional training based on the NewVision philosophy, led by CAFD‑licensed coaches. Includes  meals, language lessons, medical care, and academic support."
          />
          <ProgramDetail
            id="u11"
            title="SENIOR YOUTH CUP"
            duration="Annual Tournament"
            ageGroup="Ages 11-15"
            location="NAIROBI  + Finals in VARIOUS LOCATIONS"
            description="One of the most traditional  youth tournaments. Winners advance to the world finals in kenya. A unique opportunity to be scouted by professional clubs."
          />
          <ProgramDetail
            id="id"
            title="ID PROGRAM"
            duration="Scouting Events"
            ageGroup="Ages 7-15"
            location="COUNTRYWIDE - KENYA"
            description="Our ID Program identifies promising talent through scouting events held across multiple countries. Selected players receive invitations to training camps and potential placement in our full‑time programs."
          />
          <ProgramDetail
            id="camps"
            title="SUMMER & HOLIDAY CAMPS"
            duration="1-4 weeks"
            ageGroup="Ages 7-15"
            location="Multiple Locations"
            description="Beyond football skills, our camps include components that focus on teamwork, leadership, discipline, and sportsmanship. Open to players of all skill levels who want to experience our training methodology."
          />

          {/* NEW GALLERY CARD – exactly your line, no changes */}
          <div onClick={() => setShowGallery(!showGallery)} style={{ cursor: 'pointer' }}>
            <ProgramDetail
              id="gallery"
              title="GALLERY"
              duration=""
              ageGroup=""
              location=""
              description="Explore our gallery to see the vibrant life at NewVision Football Academy. From intense training sessions to unforgettable moments on the pitch, our gallery captures the spirit and passion of our academy community."
            />
          </div>

          {/* PHOTO GRID – appears when gallery card is clicked */}
          {showGallery && (
            <div className="gallery-grid-container">
              <h2 className="gallery-heading">📸 Our Moments</h2>
              <div className="photo-grid">
                {galleryImages.map((img, idx) => (
                  <div className="photo-card" key={idx}>
                    <img src={img} alt={`gallery-${idx + 1}`} loading="lazy" />
                    <div className="photo-caption">⚽🔥</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Programs;