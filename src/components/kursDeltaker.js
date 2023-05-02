import React from 'react';

import IMG01 from './img/kursdeltaker01.jpg';
import IMG02 from './img/kursdeltaker03.jpg';
import IMG03 from './img/kursdeltaker04.jpg';
import IMG04 from './img/kursdeltaker05.jpg';
import IMG05 from './img/kursdeltaker06.jpg';
import IMG06 from './img/kursdeltaker07.jpg';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./css/swiper.css";

import { Keyboard, Pagination, Navigation } from "swiper";
import "swiper/css/effect-coverflow";


const data = [
  {
    image: IMG01,
    name: "Yanira",
    review:
      "Etter lang yrkeskarrire i samme selskap flyttet jeg i 2017 til Bergen, og opplevde stor usikkerhet. Trude gav meg profesjonell karriereveiledning og hun evnet å møte meg der jeg var. Kort tid etter veiledningsprosessen fikk jeg ny jobb hvor jeg fortsatt trives. Jobber i dag som akturator.",
  },
  {
    image: IMG02,
    name: "Mathilde",
    review:
      "Veiledningen hjalp meg  å finne retning når jeg stod i noe som føltes ut som et umulig veivalg. Nå er jeg i gang med siste året på politiutdanningen som jeg opplever er et veldig riktig valg for meg!",
  },
  {
    image: IMG03,
    name: "William",
    review:
      "Hadde det ikke vært for Trude  hadde jeg ikke funnet min vei gjennom studier og arbeidsplassen jeg trives så godt på i dag! Jobber i dag som eiendomsmegler og studere ledelse og samfunnsøkonomi.",
  },
  {
    image: IMG04,
    name: "Oda",
    review:
      "Eg var usikker på kva eg ville etter vidaregåande og fekk kartlegging og veiledning av Trude. Det endte med at eg søkte ei utdanning eg aldri hadde hørt om. Det var full klaff! Etter fire år i arbeid og to vidareutdanningar innan feltet ergoterapi stortrivast eg med valet eg tok.",
  },
  {
    image: IMG05,
    name: "Sondre ",
    review:
      "Veiledningen hjalp meg å få oversikt, og jeg vil særlig trekke frem de gode samtalene vi hadde og personlighetstestene vi brukte for å kartlegge egenskapene og interessene mine. I tillegg fikk jeg veldig god hjelp til søknadsskriving og cv. Jobber i dag som offiser i Kystvakten.",
  },
  {
    image: IMG06,
    name: "Thomas",
    review:
      " Å kontakte Trude åpnet dører jeg ikke visste fantes, som har ført til to spennende jobber og videre karrieremuligheter i det selskapet jeg jobber i dag. Uten Trude hadde jeg aldri vært der jeg er i dag- og mulighetene mine fremover er mange. Tusen takk!  ",
  },
];

const KursDeltaker = () => {
  return (
    <section id="client_section">
      <h5 className="title">Hva våre kursdeltakere sier:</h5>

          <Swiper className='container swiper__container'

breakpoints={{
  0: {
    slidesPerView: 1,
  },
  400:{
    slidesPerView:1,
  },
  639: {
    slidesPerView: 1,
  },
  865:{
    slidesPerView:2,
  },
  1000:{
    slidesPerView:3,
  },
  1500:{
    slidesPerView:3,
  },
  1700:{
    slidesPerView:3,
  }
}}

        slidesPerView={3}
        spaceBetween={40}
        keyboard={{
          enabled: true,
        }}

        
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
      >

        
        
          {
            data.map(({image, name, review}, index) => {
              return(
                <SwiperSlide key={index} className="clients">
                
                <div className="client__image">
                  <img src={image} alt="ImageOne" />
                </div>

                 <h5 className='client__name'>{name}</h5>
                 
                 <small className='client__review'>{review}</small>

                 

            </SwiperSlide>
              )
            })
          }




          </Swiper>
        </section>
  )
}


export default KursDeltaker;
