import { NextResponse} from 'next/server'

// export async function GET(req:NextRequest , res:NextResponse){
//     return res.send('cdsvdsvds')
// }
export async function GET(){
    return NextResponse.json([
        { country: "Austria", language: "German", flagUrl: "https://flagcdn.com/at.svg" ,isSelected : false },
        { country: "Belgium", language: "Dutch", flagUrl: "https://flagcdn.com/be.svg",isSelected : false },
        { country: "Bosnia", language: "English", flagUrl: "https://flagcdn.com/ba.svg",isSelected : false },
        { country: "Bulgaria", language: "Bulgarian", flagUrl: "https://flagcdn.com/bg.svg" ,isSelected : false},
        { country: "China", language: "Chinese", flagUrl: "https://flagcdn.com/cn.svg",isSelected : false },
        { country: "Croatia", language: "English", flagUrl: "https://flagcdn.com/hr.svg",isSelected : false },
        { country: "Cyprus", language: "English", flagUrl: "https://flagcdn.com/cy.svg" ,isSelected : false},
        { country: "Czech Republic", language: "Czech", flagUrl: "https://flagcdn.com/cz.svg",isSelected : false },
        { country: "Denmark", language: "Danish", flagUrl: "https://flagcdn.com/dk.svg" ,isSelected : false},
        { country: "Estonia", language: "English", flagUrl: "https://flagcdn.com/ee.svg" ,isSelected : false},
        { country: "Finland", language: "English", flagUrl: "https://flagcdn.com/fi.svg" ,isSelected : false},
        { country: "France", language: "French", flagUrl: "https://flagcdn.com/fr.svg",isSelected : false },
        { country: "Germany", language: "German", flagUrl: "https://flagcdn.com/de.svg" ,isSelected : false},
        { country: "Great Britain", language: "English", flagUrl: "https://flagcdn.com/gb.svg" ,isSelected : false},
        { country: "Greece", language: "Greek", flagUrl: "https://flagcdn.com/gr.svg" ,isSelected : false},
        { country: "Hungary", language: "Hungarian", flagUrl: "https://flagcdn.com/hu.svg" ,isSelected : false},
        { country: "Ireland", language: "English", flagUrl: "https://flagcdn.com/ie.svg",isSelected : false },
        { country: "Italy", language: "Italian", flagUrl: "https://flagcdn.com/it.svg" ,isSelected : false},
        { country: "Latvia", language: "English", flagUrl: "https://flagcdn.com/lv.svg" ,isSelected : false},
        { country: "Latvia", language: "Latvian", flagUrl: "https://flagcdn.com/lv.svg" ,isSelected : false},
        { country: "Lithuania", language: "Lithuanian", flagUrl: "https://flagcdn.com/lt.svg" ,isSelected : false},
        { country: "Luxembourg", language: "French", flagUrl: "https://flagcdn.com/lu.svg" ,isSelected : false},
        { country: "Malta", language: "English", flagUrl: "https://flagcdn.com/mt.svg" ,isSelected : false},
        { country: "Montenegro", language: "English", flagUrl: "https://flagcdn.com/me.svg" ,isSelected : false},
        { country: "Morocco", language: "French", flagUrl: "https://flagcdn.com/ma.svg" ,isSelected : true},
        { country: "Netherlands", language: "Dutch", flagUrl: "https://flagcdn.com/nl.svg" ,isSelected : false},
        { country: "Norway", language: "Norwegian", flagUrl: "https://flagcdn.com/no.svg" ,isSelected : false},
        { country: "Poland", language: "Polish", flagUrl: "https://flagcdn.com/pl.svg" ,isSelected : false},
        { country: "Portugal", language: "Portuguese", flagUrl: "https://flagcdn.com/pt.svg",isSelected : false },
        { country: "Romania", language: "Romanian", flagUrl: "https://flagcdn.com/ro.svg",isSelected : false },
        { country: "Serbia", language: "English", flagUrl: "https://flagcdn.com/rs.svg" ,isSelected : false},
        { country: "Slovakia", language: "English", flagUrl: "https://flagcdn.com/sk.svg" ,isSelected : false},
        { country: "Spain", language: "Catalan", flagUrl: "https://flagcdn.com/es.svg" ,isSelected : false},
        { country: "Spain", language: "Spanish", flagUrl: "https://flagcdn.com/es.svg",isSelected : false },
        { country: "Sweden", language: "Swedish", flagUrl: "https://flagcdn.com/se.svg",isSelected : false },
        { country: "Turkey", language: "English", flagUrl: "https://flagcdn.com/tr.svg" ,isSelected : false},
        { country: "Ukraine", language: "Ukrainian", flagUrl: "https://flagcdn.com/ua.svg" ,isSelected : false},
        { country: "United States", language: "English", flagUrl: "https://flagcdn.com/us.svg",isSelected : false }
      ]);
}