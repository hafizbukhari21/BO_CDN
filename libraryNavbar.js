//Biller Navbar
let navbar = [
    {
        billerName :"PLN Prepaid",
        detail:[
            {
                detailName:"210 Payment Response & 230 Advice Response",
                code:"10000002001-Res"

            },
            {
                detailName:"210 Inquiry Response, 200 Payment Request, 220 Advice Request",
                code:"10000002001-Res2"

            }
        ]
    },
    {
        billerName :"PLN Non Taglis",
        detail:[
            {
                detailName:"All MTI",
                code:"10000002002"

            },
          
        ]
    },
    {
        billerName :"Telkomsel Paket Data & Pulsa",
        detail:[
            {
                detailName:"210 Purchase Response (Approve)",
                code:"1013-210-pur-approve"

            },
          
        ]
    }
    
]





//Main Navbar
let navbarFeature =  [
    {
        name:"Transaction Data",
        isBiller:false,
        codeNavbar:1
    },
    {
        name:"EJ Report",
        isBiller:false,
        codeNavbar:2
    },
    {
        name:"Recon .txt",
        isBiller:false,
        codeNavbar:3
    },
    {
        name:"Trasanction Data Detail",
        isBiller:false,
        codeNavbar:4
    }
]