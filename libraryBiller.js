

let biller_lib = [
     {
        /*
        PLN Prepaid Advice
        210 Payment Response
        230 Payment Advice Response
        */
        code:"10000002001-Res",
        title:"Biller - PLN Prepaid: 210 Payment Response, 230 Advice Response",
        expression:[
            "Meter ID / Customer ID|20",
            "ID Code|1",
            "Buying Options|1",
            "Date|8",
            "Time|6",
            "Customer Name|30",
            "Buy Amount|12",
            "Admin Fee|12",
            "Reference|32",
            "Customer|32",
            "Reff|10",
            "Meter Serial Number|15",
            "Admin Fee / Admin CA|16",
            "Customer Name|25",
            "Materai|16",
            "Tarif / Daya|17",
            "PPN|16",
            "Reff|32",
            "PPJ|16",
            "Angsuran|16",
            "Rp. Bayar|16",
            "Rp. Token|16",
            "Kwh|12",
            "Token Number|20",
            "Rp Token / KWH|16",
            "No Telp Rayon|15",
            "Reserved 1|32",
            "Reserved 2|32",
            "Label Ref|10",
            "Biller Message|74",
        ]
        },
        {
            /*
            PLN Prepaid Advice
            210 Inquery Request
            200 payment Response
            220 Advice Request
            */
            code:"10000002001-Res2",
            title:"Biller - PLN Prepaid: 210 Inquery Request, 200 payment Response,220 Advice Request",
            expression:[
                    "Meter ID / Customer ID|20",
                    "ID Code|1",
                    "Buying Options|1",
                    "Date|8",
                    "Time|6",
                    "Customer Name|30",
                    "Buy Amount|12",
                    "Admin Fee|12",
                    "Reference|32",
                    "Customer ID|32",
                    "Reff|10",
                    "Meter Serial Number|15",
                    "Customer Name|25",
                    "Tarif / Daya|17",
                    "Avail Token 1|17",
                    "Avail Token 2|17"

            ]
        },
        {
            /*
            PLN Prepaid non taglis
            */
            code:"10000002002",
            title:"Biller - PLN Non Taglis:All MTI",
            expression:[
                "Registration Number|20",
                "Transaction Code|3",
                "Transaction Name|25",
                "Registration Date|8",
                "Expiration Date|8",
                "Subscriber ID|12",
                "Subscriber Name|30",
                "PLN Reference Number|32",
                "Switcher Reference Number|32",
                "Service Unit|5",
                "Service Unit Address|35",
                "Service Unit Phone|15",
                "Total Transaction Amount Minor Unit|1",
                "Total Transaction Amount|17",
                "PLN -BILL Minor Unit|1",
                "PLN -BILL Minor Unit (RPTAG)|17",
                "Administration Charge Minor Unit|1",
                "Administration Charge (AC)|12",
                "Reff Label|10"
            ]
        },

        {
            /*
            Telkomsel Paket Data
            210 Purchase Approve
            */
            code:"1013-210-pur-approve",
            title:"Biller - Telkomel Data:210 Purchase Approve",
            expression:[
                "Phone Number|13",
                "Amount|12",
                "Biaya Admin|10",
                "Window Period|8",
                "Serial Number|16"
            ]
        }
        
]



//1013