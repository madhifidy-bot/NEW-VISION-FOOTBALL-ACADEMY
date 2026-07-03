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
  // Previously provided URLs (33 total)
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/598860259_1216436883886455_8455742546060352054_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s720x720&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG3xfiMHOMqkk6DitkgLixXIvbVwYI77d4i9tXBgjvt3s6rQrjhqMBYeWdFsEvBDXaCGs0d90bd1-Y_LdpVLuKR&_nc_ohc=ddZKJaqtRi8Q7kNvwGKutG7&_nc_oc=Adqt-8HjSIH3VxUNb_hg5x1oD8JR2vLUrVpGntxdDX2Zs7FBrFyQYDBolMHe1GyhI8E&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=4uvkssdIAzkN3z933d4gPg&_nc_ss=7b2a8&oh=00_AQCbkule5Y4IEGiD0XkgPw0GJGHl-SC0vj7v_mzUPWjAdQ&oe=6A4D6001',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/591740753_1210805494449594_1054902077645437712_n.jpg?stp=cp6_dst-jpegr_tt6&cstp=mx762x1016&ctp=s590x590&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeErQsNZWKKwnTzKNnRAzb8fEUfQ09UmUt0RR9DT1SZS3UOrgj-pcq8qRzIs-dG8vAb7EqDnTexX2hU1ANgZ9gP0&_nc_ohc=3KjmIsWuBqYQ7kNvwF8QC8U&_nc_oc=AdqfFNQRgBGb9TtUZU0hxoU-YLTI0ZFjIrjNMvTzKrFKY7kMOeIHfPhOSvPqTskcZqQ&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=pqQ84hXEsNL1OSiwvWkNKg&_nc_ss=7b2a8&oh=00_AQC4oSM_QTat_ETCIjqv8HEYHY4t3ghA9Jmxgb-D8NVIMA&oe=6A4D4E98',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/593427785_1210806964449447_5346565694777006983_n.jpg?stp=dst-jpegr_tt6&cstp=mx2048x1536&ctp=s590x590&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHf8Ys3h2XxoBygwooG1hhm1-tmds5GjO7X62Z2zkaM7qu6XHH1I--GfTijslHbHIYYnnt5Y1XEpuzutjt2cc3f&_nc_ohc=IXCfcWAlH7wQ7kNvwGUBFCj&_nc_oc=AdovBtKO8tektl16DnQKb4T--A2odGDb2D0fKAAmPT2nQVaDNGyC8Ay7wynfaaI6IpA&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=pqQ84hXEsNL1OSiwvWkNKg&_nc_ss=7b2a8&oh=00_AQAil4AzqcC4wlp0xacN_ZFF4tHvNluu5INI-j436Ew2TQ&oe=6A4D59A3',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/593502095_1210807481116062_1564668612319756550_n.jpg?stp=dst-jpegr_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF5OZhYyoItVlhb4i4UCxdUdkqYhCSosWN2SpiEJKixY5Xbepe2Ao8JlJXwmw_nlE5wELmSB-U9IsqLESg5Lewf&_nc_ohc=siqf9ZcmSK8Q7kNvwEidnkv&_nc_oc=AdohmtzNXdo6bZ27UMTL4GBQYcIrhanrsFRgVs0Vf1v3mZIyxth4UrD-V3kH1h3enEE&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=dM38S6pXHNcY6PpvJ6fAHQ&_nc_ss=7b2a8&oh=00_AQDLHzvhdAvTN2bpPpBv6u9cEBt5nsLi_cyQssACwC4ktQ&oe=6A4D38DB',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/591739033_1210807657782711_6901267263189974608_n.jpg?stp=dst-jpegr_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeENl8sP_J51f3lOmY0jRxphTWbGBLQF_cJNZsYEtAX9wn2rVwp27eO2XO1H1kh2XQMt1xUlmUVTHiaPDso52fh7&_nc_ohc=CyXfv2MosiUQ7kNvwEMmhqe&_nc_oc=AdrR0y15fYfQPA1DkGlrM2c1k9E4yuHM0i83PqdkfopDS9jkSFf7SjaKkOIm9ImQpq4&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=gpOM7J2NuYG-GXiaCjiBAQ&_nc_ss=7b2a8&oh=00_AQABuUAhaE0uZv4saD9szwAzzHmaakAEzmf6IKq2tcvwxA&oe=6A4D68EE',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/583112606_1196070202589790_8644914875880175560_n.jpg?stp=dst-jpegr_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeExnTRHS5OcmGQ5FQ505zbazAEbKbPNipzMARsps82KnPYsYa1ndhWYUp7Bl4-y-jgwaLCw3BsWwWP1-wmnGtSZ&_nc_ohc=y9ByLuuUnv0Q7kNvwFAW0X3&_nc_oc=AdrzC0cr1D7E_xp53UnsHnqxxfXb5RUxl5RsVKSIow-rDF8nHAR8vk_aJDTSJsTAQt0&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=5Pj2ThfmRpwgm-UGNSBGrw&_nc_ss=7b2a8&oh=00_AQCax4LF8cyPreUdv9eanlgg5jQaMmdgEwlYoStggwP-Pg&oe=6A4D59EF',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/583911903_1196068382589972_7891885241917669641_n.jpg?stp=dst-jpg_tt6&cstp=mx1600x1200&ctp=s590x590&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEKQVQ-Jnvk93wPnDgEEgkrosJMYXhDyuqiwkxheEPK6i0HxaQi_cX4Potd7u7xhGOrbLuonpXPjzosnzclbRNv&_nc_ohc=0tLzLVa_ATUQ7kNvwHjVoiv&_nc_oc=Adpdu51m4YvU32Yt-tP99P72KdZYGBRGdmUEev6zc0SgwVbjklFpPB0BSth0R9MLKZM&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=5Pj2ThfmRpwgm-UGNSBGrw&_nc_ss=7b2a8&oh=00_AQDi5R9npb5DvC4yZ1rsUyM57gOzYY5Dm8mcBToJVbSQhg&oe=6A4D6954',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/581386825_1196063155923828_365264033845122667_n.jpg?stp=dst-jpegr_tt6&cstp=mx2048x1536&ctp=s590x590&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFvVH_LLNjQjVq4uVJX0ESm6mZzVddTNLLqZnNV11M0sjK4NVh-UbLPt5VEWQUlKOc15dFvgvU7FZOZOvunKTAi&_nc_ohc=QEikeaOmKBgQ7kNvwE2xycQ&_nc_oc=AdqOvy_EDm9h-cxz3NcSMs6qji0mV5CdCd7sHI0TegIuvPbyA4bXtAXevtq2CkrOARQ&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=5Pj2ThfmRpwgm-UGNSBGrw&_nc_ss=7b2a8&oh=00_AQCNNFlUlGNv3pqcmaWs11R8ampk9IhfXjXNYPloRid9yA&oe=6A4D3C4F',
  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/582050144_1196054635924680_5888018613720540480_n.jpg?stp=dst-jpg_tt6&cstp=mx720x959&ctp=p526x296&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH4rxj8gpt_i-olMi9GY0jVPsf7i7rAqRQ-x_uLusCpFJhAZAPseD3zzrZertc5Iqvo6jvtz_XnR1oyuEpz9ze0&_nc_ohc=hZbpFOMUx4YQ7kNvwEtWv4p&_nc_oc=AdrdJFX4zLd-MbtHg8TnFGOK0VFtHFOu1z_KKeGh00WIOP6FleDzNDGehchZESTshek&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=BiWP5UpQDjR9oOsD2TmS2w&_nc_ss=7b2a8&oh=00_AQCrXEmFQ8or5QUF9_5j9NHP1976Eis75aATNNVch9mAzA&oe=6A4D5B0B',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/709509217_1352374090292733_1254645477229687549_n.jpg?stp=dst-jpg_tt6&cstp=mx720x1600&ctp=p526x296&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFe0HfqVvWafxtaBl_OvulsECX1W0bdMK4QJfVbRt0wrs4qoSENM4qmENnQdq7BrahsaX3Ghxj7qxzXfZW7U0RZ&_nc_ohc=Y8D96lcpnWcQ7kNvwHNq1m1&_nc_oc=AdoVaTG_d4AeSiotzhfhpW4mq19v59gfCyVHhobnQKOjquuaE5LvZhL70QNwJfOeJlQ&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=3zLTcDnbxo2ol65tiJInHg&_nc_ss=7b2a8&oh=00_AQBYbo6O6CptcpZqphwtNDGIRWff-bOICGi06yWTVrLhyQ&oe=6A4D4177',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/598825718_1216434203886723_8930279959715107612_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s590x590&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEKVkEMXMuClnNhRA1wKtW2sREH6wFlYdWxEQfrAWVh1an5jN6kOIIWRJACffuDb6entKYF8YqkpsS6izSH0Z7x&_nc_ohc=xLibMHX3VLkQ7kNvwHmbSfN&_nc_oc=AdomLflBV5ImtCKuQ3jZ73pb8ihJg4EVp-5cC4ygl-EMDMbXc9UOBuZhrJsyotZW7rM&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=4uvkssdIAzkN3z933d4gPg&_nc_ss=7b2a8&oh=00_AQDB6A4uXaLUmr_oXFuFmjbncGOJ3AO1skTt7BSwNtC3hA&oe=6A4D63F0',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/595449448_1212285624301581_3922813096834089993_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s590x590&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFNhpqCKIUpg6-SmbTWSOCeHLO4NB1-HRkcs7g0HX4dGT1U025bmkUGPeAXl_MdI447WZ1m8sFSmUhUrNkAF3E2&_nc_ohc=_yia6bfyt34Q7kNvwF1CC1W&_nc_oc=Adp4hzW9clZGACc6W4lgUIEEO5Z17SJSV9fWqx8z7E5BOtCJeo5aO2eV1pgEjt4J9NU&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=VoUiVmsESyDWkugSJ-mFfA&_nc_ss=7b2a8&oh=00_AQCGaKsONU78_unYZN9hHOEBNBWC0uwLAfn4XZx8r5h_QQ&oe=6A4D42F0',
  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/586285407_1201631205367023_6159748062437688246_n.jpg?stp=dst-jpegr_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFyq0KblEFxcW9ZLaMU_D3Q6_K5ZTdR7vrr8rllN1Hu-ilIivZ994bjv6M9VyG1pvMxkORFCb6iLz_8pIC-RWYt&_nc_ohc=zxHgJ3KcNhwQ7kNvwH9bwCB&_nc_oc=AdpVu_KeuL47XvBfNGy-jgYtjq98OtQP52QZi-08GNfEnL0hGLiBuOzZUWfcJi2tjgg&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=kddR5IT1qlf0UxKwZyELYw&_nc_ss=7b2a8&oh=00_AQCJo9xeAldQrxgBium20oX1RYh4zZjLk3X4VMEWP31Ttw&oe=6A4D3F22',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/586343694_1201630055367138_4197576995189409498_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFTFw2ed596d-QPyIDGedz2c1ZFJYdxEc5zVkUlh3ERzhLENWz6Fxv6uvUsIuICyVyxKw_aQCZ1iF1XYxWqCEy-&_nc_ohc=4fmpW19XORgQ7kNvwHDHQjs&_nc_oc=Adpe4oLOXvkYUfGEYYeSrylcmYa426fMrfqWVJnGiZBrodMekhq3KdUdKRd4zoMFDhE&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=kddR5IT1qlf0UxKwZyELYw&_nc_ss=7b2a8&oh=00_AQCPRyczFsYlVqw9LLeKV8I9dUK2vqPx7NhBD1AGZnV7cg&oe=6A4D5B7E',
  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/566233827_1175151104681700_1188739052070045154_n.jpg?stp=dst-jpg_tt6&cstp=mx1424x2048&ctp=s590x590&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG2Ied5FRYilGQvfbRM3OwKQYhLcYiKNsNBiEtxiIo2wzHbePIv8WmB7JkRqe7fsO8RKmRFNxJ36l91aY1ImNH4&_nc_ohc=aON3jNTkXegQ7kNvwHLE-em&_nc_oc=AdpO-egN8PEzHD2B4kRowvyEF83ZdBPMvh1qtNFJ3-KLSnQSbWhO52GkldQdnZmrFRo&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=xCFAkVSrZ8bvEfMSl2d9mA&_nc_ss=7b2a8&oh=00_AQATMx5csgBimF14exL8XvaOwr_wgrkWjRbbfb3ENQXZmg&oe=6A4D434F',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/565707447_1175139208016223_7648255501950518271_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=p526x296&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHkc_lyM4Wlcw8cGTxg9L6_nBejJ3QubFacF6MndC5sViAE8dVoRUqV2HLzihibXaRXMcEuMDUm8_gd9AWTAbNN&_nc_ohc=8iGoRa4aO5EQ7kNvwF5nkzJ&_nc_oc=AdpLE3Bjoc-pOJMNEzgAjxP2nhdp2IGYXHVSx-sCMqFfLJDLkuweirihK8Pwucf54C8&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=hNiDnkcLCYf70EyC6bF8VQ&_nc_ss=7b2a8&oh=00_AQColX4ADBr9E_yDIF341zv2g2mX2eTbcbaGVMbkZAzgwA&oe=6A4D396A',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/568543636_1175135458016598_3833273960784473649_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=p180x540&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFdwAVQF89Rvde6tY3TGpqSNYCMfqwJbks1gIx-rAluSxgjKZdJsR5jP6KhXfuOcw3kMXBkUPBhc_6gq1_RS6XP&_nc_ohc=FgfB5vIrR1MQ7kNvwHz8Lyz&_nc_oc=Adre1akY3Dh_aEqSiFXy39Y1Qlh9BzaJh7EPcmgFtQ9T_0do9KOtil8NVdHJOJrHFe0&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=hNiDnkcLCYf70EyC6bF8VQ&_nc_ss=7b2a8&oh=00_AQDRsNXIJGDXbikBPf8t_4RlL9kRrirmntekpdRJTRLxqg&oe=6A4D3E33',
  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/565676893_1175134268016717_2232087976971674440_n.jpg?stp=dst-jpegr_tt6&cstp=mx2048x1536&ctp=s590x590&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFv9dnHogKHZ02OJVpWJ6-ywsVPxkWJ3i3CxU_GRYneLefOmmvRAZZjWG8nUPimlf6CWaZf3Cr8TTSRqH30rl4W&_nc_ohc=iQPeMd1By1AQ7kNvwGVSW5j&_nc_oc=AdqAxy_GGs_Dp5JNh6ol6Py1gc59rE3ExlkllHmZsFgcwIJZuGBjZcyuqvovJhFLMQc&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=k2HrlweugnO2GPM_pcotaw&_nc_ss=7b2a8&oh=00_AQCu4wRG2fcI2osxSb5bkkPYtpb_i_OcHKv4_vcH9X6deA&oe=6A4D59DB',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/568427354_1175129911350486_7688471912940881494_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=s590x590&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHMODl7ki3P83KBw_YaQniHJgfOwXzLRSsmB87BfMtFK4CEW4PvFP3O-QpWYPjXLHkKB9r5Sec_hHxRw7nYEZuN&_nc_ohc=AXAYArVSg0sQ7kNvwFjBj8Y&_nc_oc=AdquCJ0dtKsMrQ0BYvieM2Tjai8OhYqBst0bj5TOSmgOFCctH4AmgM3Mt4frDAIY_Os&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=qjI8r9zl8XF_4QoXhBP90w&_nc_ss=7b2a8&oh=00_AQAy1IxO1l9Q07b4q0taUBn-61NIQHs62AysswvTMdAZaA&oe=6A4D65FB',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/568504497_1175129804683830_4306134539278151190_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x1209&ctp=s590x590&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFJp8CF2iLRb4mo1YXusL-3NyNbVxgAAXI3I1tXGAABcqEM6YijKXfo8amtkkQ__MOyFBnDZRGeWug6LS4ZQYBt&_nc_ohc=ty6zp16wOLUQ7kNvwGefMuR&_nc_oc=Ado5LhuXR5JeRYJjxgV8jR9FDVSS8PAW32HPEiQxFlOd-8zwaz88AYMm1G7wB5eiJBo&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=qjI8r9zl8XF_4QoXhBP90w&_nc_ss=7b2a8&oh=00_AQDbpupWx_MmboVuQOoHAeRnW3OHu8k7RjClSrhk6AKa4A&oe=6A4D4733',
  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/569064049_1175129964683814_5656871975904679796_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=s590x590&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFSKiqSqCuLtU8_ZI63MJxuRE5RdQNCjzpETlF1A0KPOp6Vz2u-p3bYufzf1t5IxJ3pdjbKS4nZagMj9k8vzt0l&_nc_ohc=1Imvfe_A7mIQ7kNvwEqrERk&_nc_oc=AdpFyYkYrJtjW1Tq-TUNO1rwaOPgq5x_wCzYdJn4MLcLxD6st4MZv70Rn5ETvs8x-vI&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=qjI8r9zl8XF_4QoXhBP90w&_nc_ss=7b2a8&oh=00_AQB-NgPAnbuizrZIvX_VnAerYRKLG-wqOMEPQm-3J9684Q&oe=6A4D6965',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/564732289_1169109835285827_9065770204981169468_n.jpg?stp=dst-jpg_tt6&cstp=mx720x900&ctp=s640x640&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEV2k6g8vrqHoGhlgY0mmb7alKzAgOY7WVqUrMCA5jtZZ5B4cmQLnyMBVK0cAgFp0UT_fNFohbSxJSwAIg2kgz2&_nc_ohc=WY9Rqm4ZQp4Q7kNvwHY4ARe&_nc_oc=AdqesZctK9BNsStlgqWZ-ypBr7OhNphLGzs15O2jEXRPaGFqSIUYOHE23gY_Ej6AMUg&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=qjI8r9zl8XF_4QoXhBP90w&_nc_ss=7b2a8&oh=00_AQDpiet0oeu7yr-K1b4XyWmRbzYe-pWoExMz1W-VYr6Psg&oe=6A4D5267',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/557997099_1156941659835978_2961884194697255658_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx762x1016&ctp=s590x590&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEp7V2pdroa2fyxMMNTCztR3FHX-6o0novcUdf7qjSei_H71R_sNDMubBK-LuzmzfmG9bED4fcUOSMEERCHkVSD&_nc_ohc=mOHqpVmxoAYQ7kNvwFS-Lf4&_nc_oc=AdpmwK8Fooe6-A9m6j7ucQcbqLTYB3pNG90lxfxABksj_nkSr5Slbg_ZAhO1YKxJ7eQ&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=qjI8r9zl8XF_4QoXhBP90w&_nc_ss=7b2a8&oh=00_AQAygBNgPhS0cYKagSmAWddx_BvIDSvjwHxRtlgguGd0xw&oe=6A4D6B41',
  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/557902683_1156936433169834_2686015680166321499_n.jpg?stp=dst-jpg_tt6&cstp=mx1036x1381&ctp=p526x296&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGUgOU_ckLYgakDLOHaobYjStsB0bWPX-NK2wHRtY9f-zz64Y2LssdR3J76ZoNvP8dlNy73wu3ljVuPttmkUmV&_nc_ohc=UQHTX0PeEeMQ7kNvwEKAJR5&_nc_oc=Adp976JMTUjJakmLDtE5YzjRM44D4Kmk1gTck9-p5Y_GbEg9O09BLpinlnjmGuDrXRs&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=3573m9DqyPibvQQbURMXfg&_nc_ss=7b2a8&oh=00_AQCypays36cF9NV2L2n6TzdM1vC_w5D3yiMqbUKnWiH8ug&oe=6A4D62EC',
  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/552962313_1149448100585334_7822975096070752672_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG2K6bcXeC8LLodZGfnjNKvkPNd5_ik3UqQ813n-KTdSoQxi1REImBkXg5dtPuy3mA2QF2lLjcbWkXGnYauNemv&_nc_ohc=tb8-7YIDmwEQ7kNvwE29uAf&_nc_oc=Adpplk9iNMpKpjwJ-fOxDbUins2u8WU1sMKNCfwD3GQoepN8VqZkwkatQsw4FnpqNHg&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=3573m9DqyPibvQQbURMXfg&_nc_ss=7b2a8&oh=00_AQBwUZVCDRnUqELhNlXE255KxNc1U_2FV-2vZ82J6AVodw&oe=6A4D5538',
  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/548199259_1149440423919435_1916975813658150074_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx762x1016&ctp=p526x296&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHupT97x1vqOCDO6qZWVx2A8B-95ROqYtDwH73lE6pi0LejHyhv2jB-FznLVFKKWDALDmTF2GBRt2EhDINUKsUF&_nc_ohc=YXc7ka3qqZQQ7kNvwHSalsZ&_nc_oc=AdraYZ0kCylASD1Z_Dnoy58twBNorBzC0avSJhdFS3z0qlKf8nlggK3Pk3an1wQAnxg&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=1NG8GF8SP8Gz82mbWU-SzA&_nc_ss=7b2a8&oh=00_AQCJzE8okT_SdFdMKB9cuhrP4wUsoXtT10p66GCLSRpP3g&oe=6A4D5473',
  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/551121051_1149429363920541_5970075629496873173_n.jpg?stp=cp6_dst-jpegr_tt6&cstp=mx762x1016&ctp=s590x590&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF3XEdMZMPFdTuTrY7OUm6PauL7phd8eYJq4vumF3x5grc1ZlKI7I2sr5XQU2w3u82t5lfE2CM2_Ht8CHPyfreX&_nc_ohc=ltvm3vu4ShIQ7kNvwEKIty4&_nc_oc=AdpIsfwRR8dtuXiM-gr8Xe9Cd0RbWMVDimpvcXa-zW8ptJmVUgnW6HqI6b18U8On86E&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=ElvIlL3pjODsvIlURbVaGQ&_nc_ss=7b2a8&oh=00_AQAvjQ6Am_p3GCBNLmrfViMv4o7Z6MmqLSWOGaDCn4rhOw&oe=6A4D4B8D',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/550937276_1148093557387455_1352179849651331349_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx762x1016&ctp=p526x296&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEmDDjB2tmgxZeC_LVCZEtTs7gdN5PQbTSzuB03k9BtNMouoxcAW-uYQA31qhy6gB4B00do4loUVQ_3gxSgGaAY&_nc_ohc=F84Z2cGvnSUQ7kNvwG8kxwn&_nc_oc=AdpWUtwb3lyce_77_Kro_7H6Z4Y4_OnENTTX3TFHh52X9e7wPbhHP2abt2YIl_q8KBs&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=XGhN-qeDm-33sxHdjY180w&_nc_ss=7b2a8&oh=00_AQDVtBf0E9jZf5sr_qE8UClY4IAa8BxGsp2pzuPpFLVKcw&oe=6A4D3E28',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/546223638_1140270301503114_6778379599665300786_n.jpg?stp=dst-jpegr_tt6&cstp=mx2048x1716&ctp=s590x590&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFdTPRIKHQwGH6koPSM75Oj3WAPkNCuWordYA-Q0K5aigoZqbijJybxb9X7i1Z-xlLMocU3qQ2W3LTHnBawAB-S&_nc_ohc=xgKwdsvSjh4Q7kNvwG2d_CO&_nc_oc=Adp2sCIiX_u_J-E08-73f4qRPq6Nt4NTe1ShD7-8kUBS650HJ08wAuzuW2fxRmSPk0s&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=a-l5dD_69BhXHmnUY3jVkg&_nc_ss=7b2a8&oh=00_AQC62JSiqJuND7SXcLFfmqSiaRBo1H5RMoF50tG7h4xc0Q&oe=6A4D423D',
  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/545266323_1140270401503104_2166748171817656787_n.jpg?stp=dst-jpegr_tt6&cstp=mx1424x2048&ctp=s590x590&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGQp1LxaYEJTTyMEZVW5Wo_NbV8u5Arno41tXy7kCuejufjRpHbQno6Z2VrRefTf3STrgJz09VTP8vOfxdmr1jc&_nc_ohc=Ib35HbT6gkwQ7kNvwHfP8yI&_nc_oc=AdrGICKsyAtqVKXMZALfMucixLO2ZEc6qvYeQLonxMYRxws697i5Is_jrhLsvHpeInI&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=a-l5dD_69BhXHmnUY3jVkg&_nc_ss=7b2a8&oh=00_AQAZk7IPyDoA1mBv-3CWciGrn22duWDDtSr0y_0ZRK-F2w&oe=6A4D747C',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/546877543_1140266404836837_8877329708082746076_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx762x1096&ctp=s590x590&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH9hkdJOeEVsytul9a_2AiLpt4-AwQ67Pem3j4DBDrs97FDarVvn6Fjjs2snYoucyxSC5bP8K7EJCw3TVW7TDgV&_nc_ohc=HoWso-mdYncQ7kNvwHNdj51&_nc_oc=AdplyUjAWIpTlQ3s-axNGpZF7-WaLsAbOdbJVk59mqM1j23A-QGkI-TjmOhK7qRIaQU&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=a-l5dD_69BhXHmnUY3jVkg&_nc_ss=7b2a8&oh=00_AQA0Nf_t4BZK2DE4id93NTXeTy7sgi8mhm11zm5MZxYOaA&oe=6A4D4A33',
  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/546047322_1140239421506202_8397654424157278915_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1717&ctp=s590x590&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGnMPgULLJhqj4_57bUfYPnkEje6cu4WKOQSN7py7hYo7CUkdr9y25ajr5hMFmnK0JtIo8IMQZ0H6cQftPAYZY0&_nc_ohc=AC-fZdCU-TQQ7kNvwGAXHAK&_nc_oc=AdrQB-2jH-3Py7Uvic-pbpbt48PVuUa0dyWNClTVMoQVa-RA3WneGBLC5Jl6QfeU8ZE&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=oJZZ9PaVcBHjDytb2KfcTg&_nc_ss=7b2a8&oh=00_AQB-KFaOy2MM0lTzcwJLl-MmFdJeCw68mZXXhYDDLMvDIA&oe=6A4D401D',

  // Newly added URLs (6)
  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/677141965_1317739623756180_6915035872930596169_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFzQByjC3BLepKXC_5997Pgizw2FN97dvCLPDYU33t28Gpr_XXiHivDay_1qM_MzKUrBt5Ifd4i8Kojqc5euBFa&_nc_ohc=ypEDWm_MjMwQ7kNvwEmGodI&_nc_oc=AdpkSV8xmwUWVXsVoyAJ-aEtKylvXCeJGa2KyeBewn2BZ2TrbvvJR_k2sUfiJbdg7tc&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=ewC_gbVrqKSZPfoLa0xZvA&_nc_ss=7b2a8&oh=00_AQCCqJ7q9zq-0lUNdf2UjjfgCiQbWUzqawd2Sg_AZgvdaA&oe=6A4D42B8',
  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/640828389_1272543514942458_584083149031018907_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1536&ctp=p526x296&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHxjTfiAPPVaQwu0gRtkNYRzfVpvb4iAcTN9Wm9viIBxCHfsB8gGgpN0M0AEvBaF-pWu31PjjFeemFLLtI5clM3&_nc_ohc=6jO8lBzytB0Q7kNvwHRe9Xp&_nc_oc=AdrdqAa366wSo7lwCTT9iGE8xfW1O3C6KyaHx6QggtbADIFine0980nBCIMDdIJZjvM&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=tQSXPD_ZLEquOTjvAVIETQ&_nc_ss=7b2a8&oh=00_AQCNvDJ-3AnWBLtppm8LjiZlstguZnfib54_rcM8Pph7UQ&oe=6A4D539B',
  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/615161087_1240697551460388_943762573096298011_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEy6PCnXrk3keMF0WvEECtFaTVy78-qxnVpNXLvz6rGdeUGqruQ7fZ5F2C8XQTUaBzHYO4opw18UptPeoRpybt4&_nc_ohc=YJ8tAPVuU5IQ7kNvwGM-46J&_nc_oc=AdpbtaLki83KXej5uxwFXz3WlUiIcI1Trg3w6-AYR90N-R2NicO0arZ6MEFnjbsF6Ls&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=astIwJwvYjpuaqVfMnZMJA&_nc_ss=7b2a8&oh=00_AQCkQqm5O7_hjOdAvHqe94E_DQtrhZ4zAs7P4xTQVl6u_w&oe=6A4D647C',
  'https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/617574647_1240693354794141_8964794504609749467_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEUunA0kugEzGvkfTxYojrr1LSA0pAMpnfUtIDSkAymdyFjfLeQYw1lrJjjoUylQEDzOtyWlNqCap_k3-Nc17fF&_nc_ohc=zuIt0rmuArYQ7kNvwFTkNrD&_nc_oc=AdrSkJNUFGeH0ozg1zCq_nOHO8PiG1VXbWQVl_uBXQzkDSE68IVPKUXg167Erl3yEaU&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=astIwJwvYjpuaqVfMnZMJA&_nc_ss=7b2a8&oh=00_AQBMP7bCbSPk3OgXDNXAb1rgdiX6P0ZbQLwswGBnmq8sXQ&oe=6A4D4EE8',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/615321106_1240693801460763_6114568190159893959_n.jpg?stp=cp6_dst-jpegr_tt6&cstp=mx2048x1536&ctp=s590x590&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF9yHTUbYQUXXqUjHKMOa44_lfQTQ_V-nv-V9BND9X6e3LVdXJR0r6Tj6O69lZ82EMtK5ZrK_jz7MR_mPUsGDtJ&_nc_ohc=Rlri0HevOZwQ7kNvwHKRta2&_nc_oc=AdqA1sIEMvJ8xpwtddNRbZ3Rp6SUHjsL7CXp6g3ei8TI2qNPXQOer86bXiyWN8-gV9s&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=astIwJwvYjpuaqVfMnZMJA&_nc_ss=7b2a8&oh=00_AQBmaSFRO4sykHP5E6gmOSiH8eeQoCYS7-PS0PkY3ynCjQ&oe=6A4D55D3',
  'https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/614969151_1240693741460769_354622884924726497_n.jpg?stp=cp6_dst-jpegr_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHCT3nPbARrq_zqegCxH7R0Fgmsyr5XEIEWCazKvlcQgf1KhKa0qskgTOCeRhr8MYg5kSzroDH9f3UxKhcXZfSJ&_nc_ohc=FbulNQQ61KUQ7kNvwH6JUm3&_nc_oc=AdpWfGrmRNM1qoG13LPNOTR87q6XtAEhHGeRonepdhnagV-CafSoIFKS-io6G31BvRY&_nc_zt=23&se=-1&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=astIwJwvYjpuaqVfMnZMJA&_nc_ss=7b2a8&oh=00_AQA0r8oWWDAN0x5g5uD375kZpebftbbw1iKCd7TddGiKeA&oe=6A4D59E9'
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