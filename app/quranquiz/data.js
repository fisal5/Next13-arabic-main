import AllahTextSound from "../components/SoundTextComponent.jsx/Allah";
import BismTextSound from "../components/SoundTextComponent.jsx/Bism";
import AlrahmanTextSound from "../components/SoundTextComponent.jsx/Alrahman";
import AlraheemTextSound from "../components/SoundTextComponent.jsx/Alraheem";
import RabiTextSound from "../components/SoundTextComponent.jsx/rabi";
import Al3alaminTextSound from "../components/SoundTextComponent.jsx/al3alamin";
import AlhamdTextSound from "../components/SoundTextComponent.jsx/alhamd";
import LiallahTextSound from "../components/SoundTextComponent.jsx/lilalah";
import MalkiTextSound from "../components/SoundTextComponent.jsx/malki";
import YawmiTextSound from "../components/SoundTextComponent.jsx/yawmi";
import AldiinTextSound from "../components/SoundTextComponent.jsx/aldeen";
import EhdinaTextSound from "../components/SoundTextComponent.jsx/ehdina";
import AlsirataTextSound from "../components/SoundTextComponent.jsx/alsirata";
import AlmostakimTextSound from "../components/SoundTextComponent.jsx/almostakim";
import AlyhimTextSound from "../components/SoundTextComponent.jsx/3alyhim";
import AlzinaTextSound from "../components/SoundTextComponent.jsx/alzina";
import SirataTextSound from "../components/SoundTextComponent.jsx/sirata";
import An3amtaTextSound from "../components/SoundTextComponent.jsx/an3amta";
import EyakaTextSound from "../components/SoundTextComponent.jsx/eyaka";
import Na3bodoTextSound from "../components/SoundTextComponent.jsx/na3bodo";
import WaTextSound from "../components/SoundTextComponent.jsx/wa";
import Nasta3eenTextSound from "../components/SoundTextComponent.jsx/nasta3een";
import GairTextSound from "../components/SoundTextComponent.jsx/gairi";
import AlmagdobiTextSound from "../components/SoundTextComponent.jsx/almagdobi";
import WalaTextSound from "../components/SoundTextComponent.jsx/wala";
import AldalinnTextSound from "../components/SoundTextComponent.jsx/aldaliin";




      export const quiz = {
        questions: [
          {
            id: 1,
            answers: [
              { id: "allah", component: <AllahTextSound /> },
              { id: "bism", component: <BismTextSound /> },
              { id: "alraheem", component: <AlraheemTextSound /> },
              { id: "alrahman", component: <AlrahmanTextSound /> },
            ],
            correctBoard: ["bism", "allah", "alrahman", "alraheem"], // Store IDs instead of components
          },
          {
            id: 2,
            //question: { id: "knee", component: <KneeSound /> },
            answers: [
              { id: "liallah", component: <LiallahTextSound /> },
              { id: "rabi", component: <RabiTextSound /> },
              { id: "alhamd", component: <AlhamdTextSound /> },
              { id: "al3alamin", component: <Al3alaminTextSound /> },
              
             ],
            correctBoard: ["alhamd", "liallah", "rabi", "al3alamin"],
          },
          {
            id: 3,
            answers: [
              { id: "alraheem", component: <AlraheemTextSound /> },
              { id: "alrahman", component: <AlrahmanTextSound /> },
              ],
            correctBoard: ["alrahman", "alraheem"], // Store IDs instead of components
          },
          {
            id: 4,
            answers: [
              { id: "aldiin", component: <AldiinTextSound /> },
              { id: "malki", component: <MalkiTextSound /> },
              { id: "yawmi", component: <YawmiTextSound /> }
            ],
            correctBoard: ["malki", "yawmi","aldiin"], // Store IDs instead of components
          },
          {
            id: 5,
            //question: { id: "knee", component: <KneeSound /> },
            answers: [
              { id: "eyaka", component: <EyakaTextSound /> },
              { id: "wa", component: <WaTextSound /> },
              { id: "na3bodo", component: <Na3bodoTextSound /> },
              { id: "nasta3iin", component: <Nasta3eenTextSound /> },
              { id: "eyaka2", component: <EyakaTextSound/> },
              
             ],
            correctBoard: ["eyaka", "na3bodo","wa", "eyaka2", "nasta3iin"],
          },
          {
            id: 6,
            answers: [
              { id: "alsirata", component: <AlsirataTextSound /> },
              { id: "almostakim", component: <AlmostakimTextSound /> },
              { id: "ehdina", component: <EhdinaTextSound /> }
            ],
            correctBoard: ["ehdina", "alsirata","almostakim"], // Store IDs instead of components
          },
          {
            id: 7,
            //question: { id: "knee", component: <KneeSound /> },
            answers: [
              { id: "alyhim", component: <AlyhimTextSound /> },
              { id: "alzina", component: <AlzinaTextSound /> },
              { id: "sirata", component: <SirataTextSound /> },
              { id: "an3amta", component: <An3amtaTextSound /> },
              
             ],
            correctBoard: ["sirata", "alzina", "an3amta", "alyhim"],
          },
          {
            id: 8,
            //question: { id: "knee", component: <KneeSound /> },
            answers: [
              { id: "almagdobi", component: <AlmagdobiTextSound /> },
              { id: "gair", component: <GairTextSound /> },
              { id: "3alayhim", component: <AlyhimTextSound /> },
              { id: "aldaliin", component: <AldalinnTextSound /> },
              { id: "wala", component: <WalaTextSound/>}
              
             ],
            correctBoard: ["gair", "almagdobi", "3alayhim", "wala", "aldaliin"],
          },
        ],
      };
      