"use client";

import React from 'react';

interface VoleInfoType {
    CityStart: string;
    CityEnd: string;
    DateStart: Date;
    NbPlaces : {
        Adultes : number ;
        teenager : number ;
        child : number ;
        Baby : number ;
  };
  }
  
  export const Trypassparametre = React.createContext<VoleInfoType>(
    {
      CityStart  : "" ,
      CityEnd : "" ,
      DateStart : new Date() ,
      NbPlaces : {
          Adultes : 1 ,
          teenager : 0 ,
          child : 0 ,
          Baby : 0 ,
      }
  }
  );