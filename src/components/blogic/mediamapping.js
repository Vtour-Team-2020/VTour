import ABB from "./resource/images/ABB.png"
import AS from "./resource/images/AS.png"
import APAN from "./resource/images/APAN.png"
import B1 from "./resource/images/B1.png"
import BL from "./resource/images/BL.png"
import DH from "./resource/images/DH.png"
import DHS from "./resource/images/DHS.png"
import DS from "./resource/images/DS.png"
import DSS from "./resource/images/DSS.png"
import FH from "./resource/images/FH.png"
import FHS from "./resource/images/FHS.png"
import GGS from "./resource/images/GGS.png"
import GYM from "./resource/images/GYM.png"
import HO from "./resource/images/HO.png"
import L1C from "./resource/images/L1C.png"
import L1S from "./resource/images/L1S.png"
import MPC from "./resource/images/MPC.png"
import RR from "./resource/images/RR.png"
import RRS from "./resource/images/RRS.png"

import ABBSUN from "./resource/event/ABBSUN.jpg"
import B1BANREV from "./resource/event/B1BANREV.jpg"
import DHSUP from "./resource/event/DHSUP.jpg"
import DP from "./resource/event/DP.jpg"
import EHOC from "./resource/event/EHOC.jpg"
import FHCULT from "./resource/event/FHCULT.jpg"
import FHSTT from "./resource/event/FHSTT.jpg"
import GGSHRB from "./resource/event/GGSHRB.jpg"
import GGSBANREV1 from "./resource/event/GGSBANREV1.jpg"
import GGSBANREV2 from "./resource/event/GGSBANREV2.jpg"
import GYMIHG from "./resource/event/GYMIHG.jpg"
import HALLOWDH from "./resource/event/HALLOWDH.jpg"
import HALLOWFH from "./resource/event/HALLOWFH.jpg"
import IBG from "./resource/event/IBG.jpg"
import MPCVB from "./resource/event/MPCVB.jpg"
import PANSUP from "./resource/event/PANSUP.jpg"


import ABBAS from "./resource/gif/ABBAS.gif"
import ABBB1 from "./resource/gif/ABBB1.gif"
import ABBBL from "./resource/gif/ABBBL.gif"
import APANAS from "./resource/gif/APANAS.gif"
import ASABB from "./resource/gif/ASABB.gif"

import ASAPAN from "./resource/gif/ASAPAN.gif"
import ASMPC from "./resource/gif/ASMPC.gif"
import B1ABB from "./resource/gif/B1ABB.gif"
import B1GGS from "./resource/gif/B1GGS.gif"
import B1L1C from "./resource/gif/B1L1C.gif"

import BLABB from "./resource/gif/BLABB.gif"
import DHDHS from "./resource/gif/DHDHS.gif"
import DHSDH from "./resource/gif/DHSDH.gif"
import DHSFHS from "./resource/gif/DHSFHS.gif"
import DHSRRS from "./resource/gif/DHSRRS.gif"

import DSDSS from "./resource/gif/DSDSS.gif"
import DSSDS from "./resource/gif/DSSDS.gif"
import DSSGYM from "./resource/gif/DSSGYM.gif"
import DSSL1S from "./resource/gif/DSSL1S.gif"
import FHFHS from "./resource/gif/FHFHS.gif"

import FHSDHS from "./resource/gif/FHSDHS.gif"
import FHSFH from "./resource/gif/FHSFH.gif"
import FHSL1S from "./resource/gif/FHSL1S.gif"
import GGSB1 from "./resource/gif/GGSB1.gif"

import GGSHO from "./resource/gif/GGSHO.gif"
import GYMDSS from "./resource/gif/GYMDSS.gif"
import HOGGS from "./resource/gif/HOGGS.gif"
import HORRS from "./resource/gif/HORRS.gif"
import L1CB1 from "./resource/gif/L1CB1.gif"

import L1CL1S from "./resource/gif/L1CL1S.gif"
import L1SDSS from "./resource/gif/L1SDSS.gif"
import L1SFHS from "./resource/gif/L1SFHS.gif"
import L1SL1C from "./resource/gif/L1SL1C.gif"
import MPCAS from "./resource/gif/MPCAS.gif"

import RRRRS from "./resource/gif/RRRRS.gif"
import RRSDHS from "./resource/gif/RRSDHS.gif"
import RRSHO from "./resource/gif/RRSHO.gif"
import RRSRR from "./resource/gif/RRSRR.gif"



export default {
  images: {
    AS:AS,
    ABB:ABB,
    APAN:APAN,
    B1:B1,
    BL:BL,
    DH:DH,
    DHS:DHS,
    DS:DS,
    DSS:DSS,
    FH:FH,
    FHS:FHS,
    GGS:GGS,
    GYM:GYM,
    HO:HO,
    L1C:L1C,
    L1S:L1S,
    MPC:MPC,
    RR:RR,
    RRS:RRS
  },

  mapList: [
    {
      Image: HO,
      Name: "Hall Office",
      Key: "HO"
    },
    {
      Image: GGS,
      Name: "Golden Gate Stairs",
      Key: "GGS"
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
      Image: ABB,
      Name: "A/B Bridge",
      Key: "ABB"
    },
    {
      Image: B1,
      Name: "Main Bridge",
      Key: "B1"
    }
  ],

  eventLists: {
    MPC: [
      {
        Image:MPCVB,
        Caption:"MPC is the training ground for most of our sports."
      },
      {
        Image:IBG,
        Caption:"Inter-block games - a change for freshmen to display their athletic talents (or lack of)."
      },
    ],
  
    APAN :[
      {
        Image:PANSUP,
        Caption:"The pantry is also a place for team managers to prepare supplements for hungry Eusoffians after trainings."
      }
    ],
  
    DH : [
      {
        Image:DHSUP,
        Caption:"Where supper happens."
      },
  
      {
        Image:HALLOWDH,
        Caption:"During Halloween, the dining hall is transformed into something creepier than it already is..."
      }
  
    ],
    FH : [
      {
        Image:FHCULT,
        Caption:"Cultural night - a night where talent shines brighter than the MPC light"
      },
  
      {
        Image:EHOC,
        Caption:"And the function hall is probably the most frequented place during camps."
      },
  
      {
        Image:HALLOWFH,
        Caption:"The function hall is also used for Halloween night performances."
      }
    ],
    GGS : [
      {
        Image:GGSBANREV1,
        Caption:"Internal IHG openning ceremony is held here."
      },
  
      {
        Image:GGSHRB,
        Caption:"Some makeups make Eusoff much prettier than she already is. This is one of the many hall wide events organised by Hall Relations Board"
      }
  
    ],
    DS : [
      {
        Image:DP,
        Caption:"Where DP is freshly baked"
      }
    ],
    ABB : [
      {
        Image:ABBSUN,
        Caption:"Best insta story spot"
      }
    ],
    GYM : [
      {
        Image:GYMIHG,
        Caption:"There is no way we can win IHG without the GYM."
      }
    ],
    FHS : [
      {
        Image:FHSTT,
        Caption:"Every place in Eusoff is training ground for the atheletes, even this space outside FH."
      }
    ],
    B1 : [
      {
        Image:B1BANREV,
        Caption:"During IHG openening ceremony, Eusoffians line up on this bridge to witness the investiture of Captains."
      }
    ]
  },

  entrance:
    "https://lh3.googleusercontent.com/0bxOqngwh3UGq5j_1MYFSAoMryBHWthYimnSn9t8NvykLrHo2E0bWXYVtPySzXYt9GCuxGnV8w4l9zQbwzYvGlvWJh749ALjAyPoOOhxFyk0UGjaSn3A0T-k-r6E7UpOVncTFpC4-4ppMvCwrfXewg6YdVW5OqH4Rbd3r44VHgDzfhF0xzD0aC3FjRxFNHOswmvcwMmUxx5mdHHeZEJq2pTkybtqPfWcCKJVHnaRZEjBewdtME_P3SwpDKuA82YldfRu0lfh4nOYm2NGIYCAU5Kodg8VWp5CB6W-CkGLsBNxe0nGapCn3jGx0jnPgXJ8L34yxMZ60m_oSMtOtaswIjQ3eEUk8hDGmhgnNSgwquEktszAH554n_XT6YQ5zz5acuoBP-HRy0h-MNyFiXYtxudcbfj8Ug5KFYEHaX7InzL1DWEBbNo4cp5R0DH1h-DUBWojzA2eeZOokjqKZ_zl9djo5xv_MOcubRd_lxnYoe1S8sYoFlcACgCgTcVcRDiHWv3Goc9c9Ai0TyMf1-UbYzLBUbHSyRMOyeR-lfFMGBlCRc8DUnWzs8K0TK_5LdY5_DPLpBIGLFX-Z4mEPtmJ1gvODkrpT4bBTxEMG9KjzCbfhnAHO4nGPPq93K_i4tqwignEf_le0LSp82weaYL_nX8eztSjI13Am5QZI6Xrcx8bZ0Q3JKF6Buo=w1440-h810-no",

    transitiongifs: {
      ABBAS:ABBAS,
      ABBB1:ABBB1,
      ABBBL:ABBBL,
      APANAS:APANAS,
      ASABB:ASABB,
      ASAPAN:ASAPAN,
      ASMPC:ASMPC,
      B1ABB:B1ABB,
      B1GGS:B1GGS,
      B1L1C:B1L1C,
      BLABB:BLABB,
      DHDHS:DHDHS,
      DHSDH:DHSDH,
      DHSFHS:DHSFHS,
      DHSRRS:DHSRRS,
      DSDSS:DSDSS,
      DSSDS:DSSDS,
      DSSGYM:DSSGYM,
      DSSL1S:DSSL1S,
      FHFHS:FHFHS,
      FHSDHS:FHSDHS,
      FHSFH:FHSFH,
      FHSL1S:FHSL1S,
      GGSB1:GGSB1,
      GGSHO:GGSHO,
      GYMDSS:GYMDSS,
      HOGGS:HOGGS,
      HORRS:HORRS,
      L1CB1:L1CB1,
      L1CL1S:L1CL1S,
      L1SDSS:L1SDSS,
      L1SFHS:L1SFHS,
      L1SL1C:L1SL1C,
      MPCAS:MPCAS,
      RRRRS:RRRRS,
      RRSDHS:RRSDHS,
      RRSHO:RRSHO,
      RRSRR:RRSRR
    }
};