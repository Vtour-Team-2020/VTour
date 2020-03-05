// test gifs
import APANTOAS from "./resource/gif/APANTOAS.gif";
import ASTOB1 from "./resource/gif/ASTOB1.gif";
import ASTOBL from "./resource/gif/ASTOBL.gif";
import ASTOMPC from "./resource/gif/ASTOMPC.gif";
import ASTOPAN from "./resource/gif/ASTOPAN.gif";
import B1TOGG from "./resource/gif/B1TOGG.gif";
import B1TOPRr from "./resource/gif/B1TOPRr.gif";
import BANTOB1 from "./resource/gif/BANTOB1.gif";
import BLTOAS from "./resource/gif/BLTOAS.gif";
import DHTOFHr from "./resource/gif/DHTOFHr.gif";
import DHTOHO from "./resource/gif/DHTOHO.gif";
import DSTOGYM from "./resource/gif/DSTOGYM.gif";
import FHTODH from "./resource/gif/FHTODH.gif";
import FHTOL1r from "./resource/gif/FHTOL1r.gif";
import GGTOBAN from "./resource/gif/GGTOBAN.gif";
import GGTOHO from "./resource/gif/GGTOHO.gif";
import GYMTOL1 from "./resource/gif/GYMTOL1.gif";
import HOTODH from "./resource/gif/HOTODH.gif";
import HOTODHr from "./resource/gif/HOTODHr.gif";
import HOTOGG from "./resource/gif/HOTOGG.gif";
import L1TODS from "./resource/gif/L1TODS.gif";
import L1TORAG from "./resource/gif/L1TORAG.gif";
import MPCTOAS from "./resource/gif/MPCTOAS.gif";
import PRTOB1 from "./resource/gif/PRTOB1.gif";
import PRTORAGr from "./resource/gif/PRTORAGr.gif";
import RAGTOL1 from "./resource/gif/RAGTOL1.gif";
import RAGTOPRr from "./resource/gif/RAGTOPRr.gif";

// import place static images
import APAN from "./resource/images/APAN.jpg";
import BAN from "./resource/images/BAN.jpg";
import BL from "./resource/images/BL.jpg";
import DH from "./resource/images/DH.jpg";
import DS from "./resource/images/DS.jpg";
import FH from "./resource/images/FH.jpg";
import GG from "./resource/images/GG.jpg";
import GYM from "./resource/images/GYM.jpg";
import HO from "./resource/images/HO.jpg";
import MPC from "./resource/images/MPC.jpg";

export default {
  images: {
    APAN: APAN,
    BAN: BAN,
    BL: BL,
    DH: DH,
    DS: DS,
    FH: FH,
    GYM: GYM,
    GG: GG,
    HO: HO,
    MPC: MPC
  },

  transitiongifs: {
    RAGTOPRr: RAGTOPRr,
    RAGTOL1: RAGTOL1,
    PRTORAGr: PRTORAGr,
    PRTOB1: PRTOB1,
    L1TORAG: L1TORAG,
    L1TODS: L1TODS,
    HOTOGG: HOTOGG,
    HOTODHr: HOTODHr,
    HOTODH: HOTODH,
    GYMTOL1: GYMTOL1,
    FHTOL1r: FHTOL1r,
    DHTOFHr: DHTOFHr,
    DHTOHO: DHTOHO,
    FHTODH: FHTODH,
    DSTOGYM: DSTOGYM,
    GGTOBAN: GGTOBAN,
    B1TOPRr: B1TOPRr,
    GGTOHO: GGTOHO,
    BANTOB1: BANTOB1,
    B1TOGG: B1TOGG,
    ASTOMPC: ASTOMPC,
    ASTOB1: ASTOB1,
    ASTOBL: ASTOBL,
    ASTOPAN: ASTOPAN,
    MPCTOAS: MPCTOAS,
    APANTOAS: APANTOAS,
    BLTOAS: BLTOAS
  },

  mapList: [
    {
      Image: HO,
      Name: "Hall Office",
      Key: "HO"
    },
    {
      Image: "GS", // *!* 
      Name: "Golden Gate Stairs",
      Key: "GS"
    },
    {
      Image: APAN,
      Name: "A Pantry",
      Key: "APAN"
    },
    {
      Image: BL,
      Name: "B Lounge",
      Key: "BL"
    },
    {
      Image: DH,
      Name: "DH",
      Key: "DH"
    },
    {
      Image: DS,
      Name: "Dance Studio",
      Key: "DS"
    },
    {
      Image: FH,
      Name: "Function Hall",
      Key: "FH"
    },
    {
      Image: GYM,
      Name: "Gym",
      Key: "GYM"
    },
    {
      Image: MPC,
      Name: "MPC",
      Key: "MPC"
    },
    {
      Image: "ABB", // *!*
      Name: "A/B Bridge",
      Key: "ABB"
    },
    {
      Image: "B1", // *!*
      Name: "Main Bridge",
      Key: "B1"
    }
  ],

  eventLists: {
    MPC: [
      {
        Image:
          "https://lh3.googleusercontent.com/5lsjkpS_tnVC5VHWxJ8jxHv6EBASarC2ufCg1JeROk0gfagqX1IRmaIAJiCaTXk2_bGwvcjHQUK4oeSZoBrZKGq8aeWLdcM7Bheitoezp2EujFv4LLq2qV1MVmJztxExRSVL0Xju9ers4G4eBkvoOG0Bn9SceOqTwvzDmQeN66XTKPekfBO2plZloWijRS15C6J9qeo7-7y356WLxfNbxQT-WTMRa9vTPkCBXDvSH4UaRc7Nztu0GsLHA7mn8Mzwh4SDCkbaZmrjB9KCCcsYqdDcvjLBpRGzlIHZ234R2pxKPAQWv3raNxVT_QvSaEztCk1XrdijBgnbRZS96SDiUddO9AlcMN6dN_NY5goGb3tdYcPoDD2zanBDW_QhwTvbztteGB3MNJATUFcnoaM3bagjsZzN1Wh4m91Ff9yrgyzr543q3KxENN9qS2mTJk3nFMzc68Kc9Pa-TCQA2za3U10Sm1rQN4MwchFq8lcr0JmS6Qy35oR7drq9R79WKc-Z2OcGNEzHErmWNoJzaxY9GvaAVOcI4kWqRLsQ2hScndKv8JrnvXLjZsgRWLTUOya3kHp-xCvT3qcGc8nwDfpL85YfzBm7eRhKuBNRAAtlzKvkTb8oUQlyytUt7XBlKsySL3M5p1d2d19FMctg5a4AMgIxhJntmKapLfiNCxVR9mJIUcpJyRHu5bc=w1948-h1298-no",
        Caption: "IBG"
      }
    ],
    DH: [
      {
        Image:
          "https://lh3.googleusercontent.com/0DthVI2ihCkksoTHWA8y0d5xDqhtAbDTO76yjm5rIyMK7BMu2EFkIJCSrPFCmXq77TYl-SH9MGf0OIKEgsuiVM_vtWdtwG7eIUZH0k-Z6vzrdcx8AxTQ1Ed5L3nSLDYkRnsyeaGsu7jHAsmzNdzXcVQldcpjKhV1cspZZ9JcV4o9ekEzClIlFYic76wSNFrmfXzZpCJ51m4kB0IKIIt3p_Fbztcarh71-wm28aDh09QOniHFgMibmhS-h9GJ-pChO1yVpk3X3T9zS7fgkKFghHykkcU0LZpWqP2E1pZsa7em8GbjCDUCizQjkFKwYk65SDflK1fcYGaQPvPwk1DMjPEiJ1n2iiXZHg1UuiMZHJroPoO-aAnuPZM7F5C8YzjvBRUtu82RorzwUBoHaBFW7gEg0J_GMkSSeEYwH_uGs6-3hjYXMiOFjfiR6YYk2LRF3nALEgtHVJ8XdgZkpdL7MOXeVD61RMIX-AruZfqCY-ZGKG2m7OJEYuVYB2dPTpSgiTWd7YBXMCBDpIXLgCXtchcqqHM-mW1TRIvNZA_VDEXcWtCZGFEbYMNeDGIiA4pWyE7NBSuHx_50DBu3c4DoYLZNlLMNgTLeQEgX44FJZUaoYLVtFqNdufVpZQhl68f1b9_NdZZvxfXLkYiyTw2Unl75NTW_TKf_A50aqyXWKPJqjoZq8gTsBDM=w1948-h1298-no",
        Caption: "Halloween"
      },
      {
        Image: "https://lh3.googleusercontent.com/oCVD-J1Xu8TXnI27sASDD4zo3kmj2ZkqqPWMZo3iRVEGAECBxHIt8TWIY5GZus4zCcDSoFjoG69LqkWF3ceZkc-6EWDUNI3a7oHy8jw8-6wWbV9bgKaxwhWvJOwuuSeoUvdDQ6OylOess0hIevxGf_kPheOT66q-2aMQ-HQwQJHKbZAaLy75TgnX9xRWv9_TPnPKFkFsOZIDeyX9IelaDp9K_nVNUx44E-02xgM5Vtfi9X5Ciyt7NIi9YjEJJtI9mkW6puForsdEwIu3P5cfiRejQc8cx_1urbkgh2K1ifayX5F8tkpD_yjjm2-1f2GR6Qxp2HQfW2UT33powQNIww-cpclypaNFrqoF3owlm0DhtEH7iLHmwqt7RHRsHSG9D7Fw-6OaQm-fHnTrTWMhLae2Xan967OtqaVsowjjAAm3bprHKHdbp-li-vRjHdMUeWDGWj5pCUJALty-KP43ZkG-cjDVvv8dODVVrQJ0hZepdvuMJIRhId_boVx-Jr4Sq2QbRpcEPxZSCMohIoejzIX5hmETI-HiuAlKPiwPdq_MnFVptUKFsNzzyW508fGEjsRr9W_DIqv7Zra2eHPYErauyAMIZpU6zd9JGRz1CC668BiDTLLMaoRv6SlN49n6FW3N3lN01Q2WyR45nike52DifvoDZFyHYOg-iKhYVFiVZo8nU8G8GZI=w398-h266-no",
        Caption: "SMC Supper"
      },
    ],
    FH: [
      {
        Image:"https://lh3.googleusercontent.com/AgWH1uTqSJuWxFI7i8qG3GpVZ3BeJ_HaEkFmMXg45da7k_aLwjleNE6tZwjTlQyfYLT5SpKdn3RgkfOu08hMdqacnXa74SbboFHUWxGOiEUsw3Th1uIp442YaDzAnvJFhbSLbl0z6KyT5wRBFIXC3F7CKy0Lc_2yT5g5vHZ--VKwy5adaxrtC_IuWnMmJHWK0LO3siLp2_nrAfK52ANOE5hSPiVacO73fedX4srgxOoLcBuAs6aO4RD5rvUIByvT5sGKxHXQQtwORQKBKrzhpF4mnpnUb-HfPxeozEEHRMxKGFMAO0Iem-UoZj-EYKWvscxiT7c3ITEWBWilDH37TGT5b-XVbDCBy8NBH2_Z23s3_RAktlZkN8mgcRTOvo3iAzInGKyMTOIbiOf1_JZ3J1tVzYXlIZ8zkUs2WvLwrgD7GbhjbypL25Lhg8S9X2ICOthIz838upvKu1jFZVv4zZg7rs4ZiRe5hZFBevHY_83DTHWZyGni2B8wTEFF5OWugI6YIRTppUexM5HT9ZHnc0RiGcqGy6CY_SDFB-kvsD0J4MNhGg7wk5IPHMwiUa4HEgdZ_DKrr0gHvLwhU_erVPvcHm5krVlseI96CJt89VcoZhfDk5N5G_5OS2mcEq0-LBjSSueqtR69Vw2S9N6DD5jNmTtgJdaaFApjtSHN7ogltkxGtmefb1w=w1948-h1298-no",
        Caption:"Halloween"
      },
      {
        Image:"https://lh3.googleusercontent.com/fs81k8Y9SaHaB4KUjQsAvjjgPp5I63PxXi2pYc4L7fr7raU7QcdWlkuLzZQTC1qVcrE1q_ja4O3e2RWLJfc2hIA4PBDm-o6usKCbEFGNjG8S4fwp8H9fGYArAKfNz8fa_4Fb8sGwhQXMtF8lDKGDKvP9GSbjB636d4jpz950xOSTBks4tGCe4ZTwKdtje5VFd-dVRmmSqDbz1dzjxAXXpCq1SVrXZFB4zPL1HCNM3g_WCW3jV8lTnLmTN7LaluIvKhbsDP-mGObkCJ0rr8kLOk4xNkbxSPTIeGaXe2Qy2dMbx1jKxrmRVXf01rEVsfUkZrpjk754n_hqYmvWeD_tZDb78Pp84TA4uE9q7MxmWll4fhHUVeEZyp9IXmAmmWBVwj-cXSs_kuxLcqVdWEkJVGnH7kXcJ5psav5wI4POwGiZgMUMlGPX6bnE8Jl6H-IHfqAwF-R8zLhGQO5tX8fYI0m8-acdOyuWSJdn4CGm9hUhnMl5BdR7ePWxrBSWbgBbsiVSwecmti4M89eVTSpYmexYt-EWodmmWrkv317tPwic6hxZwpdwS6ArG23t8i2juRw8OS-J3_CfvzXzDxyi3fM9PKv_RYwt-DdBVuAzOneEUqxd4oZ90QeY4WZ4iSrsabGSOGsLcsFyOhIQPbS9Sgk_DCVx5Ygl6-WDsBhGva6egTyUWQI99v8=w1948-h1298-no",
        Caption:"Culture Night"
      },
      {
        Image:"https://lh3.googleusercontent.com/VpHKjJf4_BHZb435Csb4o2RWg7pslZ4YuYMHoRtnzS3k4XTFGGrRnFC7E8cicPfGauYiqO3A3Pwjmpb0W5hJivxtU9nVvdRt5BIViO524YoacUG-Ap9Z-UdRcgmTalNPBadWNWSqK9Uygw2MvTDSrt1rvcJ6yOKzf9QXUeKHsQQqaaQ_JoyzOZVDHfAVBLS41monGpCU74s9CN7FiH45v7L__VVlkQL1Y4kDcoKUzTs-eOjXuwnQoXH5THj0PPGHcjYr-zMdgQwNZovgoTFF8yr5vL119wa29BuLpHzAy5e7jv2Cs7pXd4Dcx4ud59KHqg9vg6PaNEHRkq7kv85dz-owH3tIi_fPke_oO3kHS3SvqinGXGsllv6Qr1o_BvShKZrqCujE7VETQYwWppI3EZdxIbQguSWFvKB3BMkFWzeC76uq2TF3sYyQoZNGkmr5JTBX4vAN0VRedPhv1Navw02ycEbYBhyo04p6yNY6aaicWzoea0nh-U-vUbRU_aeIZf43J9n-vIDQ3IKPvRQgnuuGuLRtAnE_Jy9CtMdAM7cRrlt_pHG-Fu4vWywDLyUtQjQKeUuZIjm0Fq24vUBB65LtQvQmTKJUBmc87maGps3YJliobJjNz39E33hCJs3G4NG_8WoMoaAgHvkwl9u6iJKqQQW-2S7kEGdwXzgbkSAiHhjuwoV24OA=w287-h191-no",
        Caption:"La Soriee"
      },
      {
        Image:"https://lh3.googleusercontent.com/ZPc91Z9-CcnZx895_KMWnriNEeBflc1xtPF9nwFoucP1SmI18QGjkZLVWYPP3LJ91YqNAqNUO3xL4tRExYF8iG6LcqSqR4Iqw6j9m4EPWQqSY4EIpAkoAhQvNe6UXhlky9dwBNSYCQRU62_pD_sg4XEqAzsVUVJc0b4IombT_bBMfRAWXLzMIL4OADQ07gIIHC0w8fMboW7EiYjnp0pFzxHx7oPVFqcmyA0pgC09FE8cvHR-h1kDeK-9bJr9xn1cJNivJx14xsNR2rb3MjmY3Ux5I09k1yE3lvn0xbAOYqq0yqTBCy2cFmgHX-z7rlkBmAvdjbk5Hc6VGTuQPtKoBpRvSA2qV_5FY0cCc9yhhF5GthwIJnrRgKhsY25g__noM0f0IvmN5h5Qx8tFI0mg9qjX7RBU1YKC7YVtTg-KQ_vHoz4tt7XZ4xqlKP1PWju4FpoYKFue79xc6Saz_IYmIM2LFZLLgQY7U2LAXKIXTZsHvLqizjBlTH5HuKnKAk5j0ryyY2zFIeD33lD2hwucJfdsKwAXL02JpwXOfFNKyJw8DHsg97RJn4nds2KOOoPoGxYkh73bFg-1tiAccDic87EuOmRKx_xJtlcGC2skXW-1Hgw6HcP8ti-hZJbyNwEKZs1rr3JZrjgPz4LXA2QiajJTxeUpB7Dg4iU2rV2xTofVMB0KRbvd-b0=w1948-h1298-no",
        Caption:"EHOC"
      }
    ]
  }
};
