import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class data{
  public pc_folders:file[] = [
    {
      icon:"video",
      name:"Flimora",
      size:200,
      link:"https://harihar.ga"
    },
    {
      icon:"desktop",
      name:"Driver",
      size:20,
      link:"https://zebronics.info/driverszebronics7991/USB_Devices/ZEB-USB150WF/Realtek/ZEB-USB150WF%20Realtek.zip"
    },
    {
      icon:"tv",
      name:"T.C Games",
      size:50,
      link:"https://harihar.ga"
    }
  ];
    public folders:folder[]=[
        {
            name:'Video Editor',
            files:[
             {
      name:'Power Director',
      size:50,
      icon:'video',
      link:"http://localhost:4200/cs"
             },
             {
              name:'Kinemaster',
              size:50,
              icon:'video',
              link:"http://harihar.ga"
             },
             {
              name:'VidMate',
              size:50,
              icon:'video',
              link:'https://harihar.ga'
             },
             {
              name:'Flimora wonderShare',
              size:50,
              icon:'video',
              link:'sd'
             }                 
            ]
          },
          {
            name:'Social Media',
            files:[
              {
                name:'Instagram Hack',
                size:50,
                icon:'instagram',
                link:'sb'
              },
              {
                name:'Youtube Hack',
                size:70,
                icon:'youtube',
                link:'sb'
              },
              {
                name:'Whatsapp Hack',
                size:50,
                icon:'whatsapp',
                link:'sb'
              },
            ]
          },
          {
            name:'Game',
            files:[
              {
                name:'Secret FF',
                size:50,
                icon:'gamepad',
                link:'sb'
              }
            ]
          },
          {
            name:'hacking apps',
            files:[
              {
                name:"Mt Manager",
                size:50,
                icon:'bones',
                link:'sd'
              },
              {
                name:'Lucky Patcher',
                size:50,
                icon:'bones',
                link:'sd'
              },
              {
                name:"Apk Editor",
                size:50,
                icon:'bones',
                link:'sd'
              }
            ]
          }
    ];
}
export class folder{
  name:string;
  files:file[];
}
export class file{
  name:string;
  size:number;
  link:string;
  icon:string;
}
